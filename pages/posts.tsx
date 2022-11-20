import { PostPreview } from "../ui/post-preview";
import { Search } from "../ui/search";
import moment from "moment";
import { Layout } from "../ui/layout";

const navItems = [
  {
    name: "Home 🏠",
    url: "/",
  },
];

const articles = [
  {
    title:
      "Build a Personal Blog using Next.JS, TailwindCSS, MDX, Prisma, and Typescript",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed egestas egestas fringilla phasellus faucibus. Lacinia at quis risus sed vulputate odio ut enim. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Libero volutpat sed cras ornare arcu. Tortor condimentum lacinia",
    slug: "building-a-blog",
    published: moment().subtract(1, "month"),
  },
  {
    title:
      "Build a Personal Blog using Next.JS, TailwindCSS, MDX, Prisma, and Typescript",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed egestas egestas fringilla phasellus faucibus. Lacinia at quis risus sed vulputate odio ut enim. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Libero volutpat sed cras ornare arcu. Tortor condimentum lacinia",
    slug: "building-a-blog-2",
    published: moment().subtract(2, "month").subtract(4, "days"),
  },
  {
    title:
      "Build a Personal Blog using Next.JS, TailwindCSS, MDX, Prisma, and Typescript",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed egestas egestas fringilla phasellus faucibus. Lacinia at quis risus sed vulputate odio ut enim. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Libero volutpat sed cras ornare arcu. Tortor condimentum lacinia",
    slug: "building-a-blog-3",
    published: moment().subtract(5, "month").subtract(20, "days"),
  },
  {
    title:
      "Build a Personal Blog using Next.JS, TailwindCSS, MDX, Prisma, and Typescript",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed egestas egestas fringilla phasellus faucibus. Lacinia at quis risus sed vulputate odio ut enim. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Libero volutpat sed cras ornare arcu. Tortor condimentum lacinia",
    slug: "building-a-blog-4",
    published: moment().subtract(5, "month").subtract(26, "days"),
  },
];

export const Posts = () => {
  return (
    <Layout showNav={true} navItems={navItems}>
      <section className="flex flex-col w-full justify-start pb-5 align-bottom">
        <div className="flex flex-row w-full space-x-2">
          <h1 className="text-4xl font-['Montserrat'] font-black pb-4">
            Posts ✏️
          </h1>
        </div>
        <div className="flex flex-col space-y-5">
          <Search />
        </div>
      </section>
      <section className="w-full space-y-5">
        {articles.map((article) => {
          return (
            <PostPreview
              key={article.title}
              title={article.title}
              content={article.content}
              slug={article.slug}
              published={article.published}
            />
          );
        })}
      </section>
    </Layout>
  );
};

export default Posts;
