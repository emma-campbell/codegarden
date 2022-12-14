import prisma from "@/lib/prisma";
import { createHash } from "crypto";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ip = req.headers["x-forwarded-for"] || "0.0.0";
  const slug = req.query.slug?.toString();
  try {
    const userId = createHash("md5")
      .update(
        // @ts-ignore
        ip + process.env.IP_ADDRESS_SALT,
        "utf-8"
      )
      .digest("hex");

    const session = slug + "___" + userId;

    if (req.method === "GET") {
      const [stats, userHasLiked] = await Promise.all([
        prisma.stats.findUnique({
          where: { slug },
        }),
        prisma.session.findUnique({
          where: { id: session },
        }),
      ]);

      return res.status(200).json({
        total: stats?.likes,
        user: userHasLiked != null,
      });
    }

    if (req.method === "POST") {
      try {
        await prisma.session.findUniqueOrThrow({
          where: { id: session },
        });
      } catch (e) {
        await prisma.session.create({
          data: {
            id: session,
          },
        });
      }

      const newOrUpdatedLikes = await prisma.stats.upsert({
        where: { slug },
        create: {
          // @ts-ignore
          slug,
        },
        update: {
          likes: {
            increment: 1,
          },
        },
      });

      return res.status(200).json({
        total: newOrUpdatedLikes.likes.toString(),
        user: true,
      });
    }

    if (req.method === "DELETE") {
      await prisma.session.delete({
        where: {
          id: session,
        },
      });

      const stats = await prisma.stats.update({
        where: {
          slug,
        },
        data: {
          likes: {
            decrement: 1,
          },
        },
      });

      return res.status(200).json({
        total: stats.likes.toString(),
        user: false,
      });
    }
  } catch (e: any) {
    return res.status(500).json({
      message: e.message,
    });
  }
}
