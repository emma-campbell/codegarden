import { Post } from "contentlayer/generated";

export const tagNames = ["Next.js", "MDX", "Typescript", "Tech", "Tailwindcss", "contentlayer", "Cures Act", "FHIR", "Health IT", "Planetscale", "Prisma"];
export const tagSlugs = ["nextjs", "mdx", "ts", "tech", "tailwind", "contentlayer", "cures-act", "fhir", "health-it", "planetscale", "prisma"];

export const getPartialPost = (
  { title, slug, tags, formattedDate, description, body, series, headings }: Post,
  allPosts: Post[]
) => ({
  title,
  slug,
  formattedDate,
  tags: tags ?? null,
  description: description ?? null,
  body: {
    code: body.code,
  },
  headings:
    (headings as { heading: number; text: string; slug: string }[]) ?? null,
  series: series
    ? {
        title: series.title,
        posts: allPosts
          .filter((p) => p.series?.title === series.title)
          .sort(
            (a, b) =>
              Number(new Date(a.series!.order)) -
              Number(new Date(b.series!.order))
          )
          .map((p) => {
            return {
              title: p.title,
              slug: p.slug,
              status: p.status,
              isCurrent: p.slug === slug,
            };
          }),
      }
    : null,
});
