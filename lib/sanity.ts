import { Book, Post, Series } from "@/types";
import { createClient } from "@sanity/client";
import moment from "moment";

export const sanity = createClient({
  projectId: "zbh3667d",
  dataset: "production",
  apiVersion: "v2021-10-21",
  useCdn: false,
  token: process.env.SANITY_SECRET_TOKEN,
});

export async function getPosts() {
  const posts = await sanity.fetch(
    '*[_type == "post"] | order(published) {title, slug, description, published}'
  );

  posts.forEach((p) => {
    p.slug = p.slug.current;
    p.published = moment(p.published).format("MMMM Do, YYYY");
  });

  return posts as Post[];
}

export async function getLatestPost() {
  const post = await sanity.fetch(
    '*[_type == "post"] | order(published desc) {title, slug, description, published}[0]'
  );
  post.slug = post?.slug?.current;
  post.published = moment(post.published).format("MMMM Do, YYYY");

  return post as Post;
}

export async function getPost(slug: string): Promise<Post> {
  const post = await sanity.fetch(
    `*[slug.current == "${slug}"]{title, published, slug, content, "series": *[references(^._id)]{name, items[]{order,article->{title, "slug": slug.current}}}}[0]`
  );

  post.slug = post?.slug?.current;
  post.published = moment(post.published).format("MMMM Do, YYYY");
  post.series?.items?.forEach((a) => {
    a.slug = a.slug?.current;
  });

  return post as Post;
}

export async function getBooks() {
  const books = await sanity.fetch('*[_type == "book"]');
  return books as Book[];
}

export async function getSeries(name: string) {
  const series = await sanity.fetch(`*[name == "${name}"]`);
  return series as Series;
}
