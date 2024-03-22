import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Emma Campbell",
  description: "My personal slice of the internet.",
};

const Page = () => {
  return (
    <>
      <section className="flex flex-col justify-start">
        <h1 className="text-5xl font-bold font-heading sm:text-[96px] leading-extra-tight">
          Emma
        </h1>
        <h1 className="text-5xl font-bold font-heading sm:text-[96px] leading-extra-tight pb-12">
          Campbell
        </h1>
        <p className="font-medium text-white/80">
          I am a <b>software engineer</b>, currently working at{" "}
          <b>Hugo Health</b>. Building functional, performant, and impactful
          applications is at the heart of what I do. I love to learn and teach,
          mainly by writing about the things that I do.
        </p>
      </section>
    </>
  );
};

export default Page;
