import { Layout } from "@/ui/layout";
import { Metadata } from "next";
import { FC } from "react";

const NavItems = [
  {
    url: "/",
    label: "Home",
  },
];

export const metadata: Metadata = {
  title: "About Me | Emma Campbell",
  description: "Learn about me and what I do.",
};

const Page: FC = () => {
  return (
    <Layout navItems={NavItems}>
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold font-[Cal Sans] mb-4">
          About Me
        </h1>
        <p className="text-white/70">
          Hello 👋🏼 My name is Emma. I am a 24 year old software engineer
          currently living in the DMV area. Nice to digitally meet you!
        </p>
      </div>
      <section id="bio" className="space-y-2">
        <h2 className="text-2xl font-bold font-[Cal Sans] mb-2">Biography</h2>
        <div className="space-y-4">
          <p className="text-md text-white/70">
            I grew up wanting to be a doctor. No, seriously. I think medicine is
            fascinating and I was always enamoured with the idea of helping
            people. I spent some time in the classes, and I was enjoying the
            stuff I was learning. Biology and the human body are fascinating!
            Then, I got to chemistry. Yuck 🤮
          </p>
          <p className="text-md text-white/70">
            So, I switched. I had always thought outer space was cool, and I did
            well in physics in high school, so I decided to give physics and
            astronomy a try. I did well, and as a part of the course work I was
            required to take a class called &quot;Introduction to
            Programming&quot;. The class was in python, and I fell in love with
            it.
          </p>
          <p className="text-md text-white/70">
            So, I switched again. I decided to major in Computer Science.
            Besides learning to program, I grew to become well-versed in the
            theory that makes great software and even better at learning how to
            problem solve.
          </p>
          <p className="text-md text-white/70">
            During my senior year, I was diagnosed with Psoriatic Axial
            Spondyloarthitis. A mouthful, yes, but I had to learn how to manage
            a life altering condition. I knew I wanted to help others in
            predicaments like my own, so I joined{" "}
            <a className="underline hover:bg-green-300 hover:text-white transition ease-in-out">
              Hugo Health
            </a>{" "}
            to help facilitate research and communities to help others like me.
          </p>
        </div>
      </section>
      <section id="education">
        <h2 className="text-2xl font-bold font-[Cal Sans] mb-2">Education</h2>
        <div className="mb-2 text-white/70">
          <p className="text-md font-semibold">University of Rochester</p>
          <p className="text-sm">Bachelors in Computer Science</p>
        </div>
        <div className="text-white/70 text-sm">
          Data Structures & Algorithms, Computational Theory, Computer
          Organization, Introduction to Artificial Intelligence, Human-Computer
          Interaction, Social Implications of Computing, Web Development,
          Advanced Frontend Web Design
        </div>
      </section>
    </Layout>
  );
};

export default Page;
