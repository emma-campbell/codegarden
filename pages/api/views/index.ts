import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const agg = await prisma.stats.aggregate({
        _sum: {
          views: true,
        },
      });

      return res.status(200).send(agg._sum.views);
    }

    return res.status(404).send("Invalid Request");
  } catch (e: any) {
    return res.status(500).json({
      message: e.message,
    });
  }
}
