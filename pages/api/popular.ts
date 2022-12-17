import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { allPosts, Post } from "contentlayer/generated";
import { getPartialPost } from "@/lib/contentlayer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const top = await prisma.stats.findMany({
        orderBy: { views: "desc" },
        take: 3,
        select: { slug: true },
      });

      const articles: ReturnType<typeof getPartialPost>[] = [];

      top?.forEach((item) => {
        const post = allPosts.find((p) => p.slug === item.slug);
        if (post != null && typeof post != "undefined") {
          articles.push(getPartialPost(post, allPosts));
        }
      });

      return res.status(200).send(articles);
    }

    return res.status(404).send("Invalid Request");
  } catch (e: any) {
    return res.status(500).json({
      message: e.message,
    });
  }
}
