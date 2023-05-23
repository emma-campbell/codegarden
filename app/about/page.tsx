import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "About Me | Emma Campbell",
  description: "Learn about me and what I do.",
};

const Page: FC = () => {
  return (
    <>
      <h1 className="text-5xl sm:text-[96px] font-heading font-bold leading-extra-tight pb-8">
        About Me
      </h1>
      <section className="space-y-4 text-white/80 font-medium">
        <p>
          I&apos;m a 24 year old software engineer working remotely in the DMV
          area. It&apos;s nice to digitally meet you!
        </p>
        <p>
          I&apos;m currently working as a Software Engineer II @{" "}
          <b>Hugo Health</b>, a health tech company with the goal of
          decentralizing clinical research in the US. We are a small team, and I
          am responsible for many of our backend services including maintaining
          our EHR integrations, ETL processes, and a lot of internal tooling.
        </p>
        <p>
          When I am not coding, I spend a lot of time <b>reading</b>, playing
          video games, lifting weights, or obsessing over my dog. Music is one
          of my passions. I play a few instruments and to find me sitting in
          silence is pretty rare.
        </p>
      </section>
    </>
  );
};

export default Page;
