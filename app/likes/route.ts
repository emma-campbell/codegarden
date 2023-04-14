import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const agg = await prisma.stats.aggregate({
      _sum: {
        likes: true,
      },
    });

    return NextResponse.json(agg._sum.likes, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
