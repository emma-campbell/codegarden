import { Card } from "../ui/card";
import moment from "moment";

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

export const Home = () => {
  return (
    <>
      <section className="flex flex-col w-fit justify-start">
        <div className="flex flex-col">
          <h1 className="text-4xl font-['Montserrat'] font-black pb-4">Emma 🤟</h1>
        </div>
        <div className="flex flex-col space-y-5">
          <p className="text-sm font-['Work_Sans']">
            I am a 24 year old software engineer living in Arlington, Virginia.
            I have my B.A in Computer Science from the University of Rochester,
            and spend a lot of my time building digital health data systems that
            help facilitate critical research with{" "}
            <a href="https://hugo.health">Hugo Health</a>.
          </p>
          <p className="text-sm font-['Work_Sans']">
            This is a space where I write about the things I learn, the things I
            struggle with, and the things that I feel. As someone who is
            learning to manage chronic illness, I find pride in helping to share
            what I learn, and as someone who tries to take on technical
            challenges daily, I like to share what I find.
          </p>
          <p className="text-sm font-['Work_Sans']">
            Thank you, and welcome to my digital garden 🌱
          </p>
        </div>
      </section>
      <section>
        <div className="flex flex-row w-full justify-end pb-2 pt-2">
          <h1 className="text-2xl font-['Montserrat'] font-black">
            Latest Writing
          </h1>
        </div>
        {articles.map((article) => {
          return (
            <>
              <div className="pb-2">
                <Card
                  key={article.slug}
                  title={article.title}
                  content={article.content}
                  slug={article.slug}
                  published={article.published}
                />
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Home;
