import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const slug = path.replace("/blog/", "");

  redirect(`https://spookyemma.com/notebook/${slug}`);
}
