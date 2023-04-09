import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { getPosts } from "@/lib/sanity";
import { Post } from "@/types";

export async function GET(req: NextRequest) {
  try {
    const top = await prisma.stats.findMany({
      orderBy: { views: "desc" },
      take: 3,
      select: { slug: true },
    });

    const articles: Partial<Post>[] = [];
    const allPosts = await getPosts();

    top?.forEach(async (item) => {
      const post = allPosts.find((p) => p.slug === item.slug);
      if (post != null) {
        articles.push(post);
      }
    });

    return NextResponse.json(articles, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
