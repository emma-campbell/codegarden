import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const prerender = false;

export const GET: RequestHandler = ({ params }) => {
  throw redirect(308, `https://spookyemma.com/notebook/${params.slug}`);
};
