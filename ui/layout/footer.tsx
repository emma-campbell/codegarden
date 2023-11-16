import moment from "moment";
import Link from "next/link";
import { FC } from "react";

import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { AnimatedFooter } from "../animation/footer";
import { container, content } from "@/lib/variants";
import { AnimatedDiv } from "../animation/div";
import { AnimatedHorizontalRule } from "../animation/hr";
import { AnimatedLink } from "../animation/a";

const Socials = [
  {
    name: "Github",
    url: "https://github.com/emma-campbell",
    icon: BsGithub,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/ec-campbell/",
    icon: BsLinkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/spoonsandcode",
    icon: BsTwitter,
  },
];

export const Footer: FC = () => {
  return (
    <AnimatedFooter
      className="mt-12 pb-4 font-heading font-bold"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <AnimatedHorizontalRule
        className="border-white/20 border-t-2"
        variants={content}
      />
      <div className="mt-8 mb-12 grid space-y-2 sm:space-y-0 sm:grid-cols-2">
        <div className="text-md flex flex-col text-white/60">
          <AnimatedDiv variants={content}>
            <Link href="/books" className="hover:text-white/95">
              reading
            </Link>
          </AnimatedDiv>
          <AnimatedDiv variants={content}>
            <Link href="/bookmarks" className="hover:text-white/95">
              bookmarks
            </Link>
          </AnimatedDiv>
          <AnimatedDiv variants={content}>
            <Link href="/snippets" className="hover:text-white/95">
              snippets
            </Link>
          </AnimatedDiv>
          <AnimatedDiv variants={content}>
            <Link href="/stats" className="hover:text-white/95">
              stats
            </Link>
          </AnimatedDiv>
        </div>
        <div className="flex flex-row justify-end">
          <div className="grid grid-cols-3 gap-4">
            {Socials.map((s) => {
              return (
                <AnimatedLink href={s.url} key={s.name} variants={content}>
                  <s.icon className="text-white/70 w-6 h-6 hover:text-white" />
                </AnimatedLink>
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-2">
        <AnimatedDiv className="text-sm text-white/70" variants={content}>
          <p>Emma Campbell</p>
          <p>© 2022 - {moment().format("YYYY")}</p>
        </AnimatedDiv>
      </div>
    </AnimatedFooter>
  );
};
