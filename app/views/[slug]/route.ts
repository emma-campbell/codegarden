import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const slug = path.replace("/views/", "");

  try {
    const stats = await prisma.stats.findUnique({
      where: {
        slug,
      },
    });
    return NextResponse.json({ total: stats?.views }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}

export default async function POST(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const slug = path.replace("/views/", "");

  try {
    const newOrUpdatedViews = await prisma.stats.upsert({
      where: { slug },
      create: {
        // @ts-ignore
        slug,
      },
      update: {
        views: {
          increment: 1,
        },
      },
    });

    return NextResponse.json(
      {
        total: newOrUpdatedViews.views.toString(),
      },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
