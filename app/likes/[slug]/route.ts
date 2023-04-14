import prisma from "@/lib/prisma";
import { createHash } from "crypto";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const ip = req.headers["x-forwarded-for"] || "0.0.0";
  const path = req.nextUrl.pathname;
  const slug = path.replace("/likes/", "");

  try {
    const userId = createHash("md5")
      .update(
        // @ts-ignore
        ip + process.env.IP_ADDRESS_SALT,
        "utf-8"
      )
      .digest("hex");

    const session = slug + "___" + userId;
    const [stats, userHasLiked] = await Promise.all([
      prisma.stats.findUnique({
        where: { slug },
      }),
      prisma.session.findUnique({
        where: { id: session },
      }),
    ]);

    return NextResponse.json(
      {
        total: stats?.likes,
        user: userHasLiked != null,
      },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json(
      {
        message: e.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const ip = req.headers["x-forwarded-for"] || "0.0.0";
  const path = req.nextUrl.pathname;
  const slug = path.replace("/likes/", "");

  const userId = createHash("md5")
    .update(
      // @ts-ignore
      ip + process.env.IP_ADDRESS_SALT,
      "utf-8"
    )
    .digest("hex");

  const session = slug + "___" + userId;

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

  try {
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

    return NextResponse.json(
      {
        total: newOrUpdatedLikes.likes.toString(),
        user: true,
      },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json(
      {
        message: e.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const ip = req.headers["x-forwarded-for"] || "0.0.0";
  const path = req.nextUrl.pathname;
  const slug = path.replace("/likes/", "");

  const userId = createHash("md5")
    .update(
      // @ts-ignore
      ip + process.env.IP_ADDRESS_SALT,
      "utf-8"
    )
    .digest("hex");

  const session = slug + "___" + userId;

  try {
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

    return NextResponse.json(
      {
        total: stats.likes.toString(),
        user: false,
      },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json(
      {
        message: e.message,
      },
      { status: 500 }
    );
  }
}
