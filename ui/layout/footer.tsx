import moment from "moment";
import Link from "next/link";
import { FC } from "react";

import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

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
    <footer className="pb-4 font-[Cal Sans] font-bold">
      <hr className="border-white/20 border-t-2" />
      <div className="mt-8 mb-12 grid space-y-2 sm:space-y-0 sm:grid-cols-3">
        <div className="text-sm flex flex-col space-y-1 text-white/30 hover:text-white/70">
          <Link href="/books">reading</Link>
          <Link href="/bookmarks">bookmarks</Link>
          <Link href="/snippets">snippets</Link>
        </div>
        <div className="text-sm flex flex-col space-y-1"></div>
      </div>
      <div className="grid xl:grid-cols-2">
        <div className="text-sm text-white/70">
          <p>Emma Campbell</p>
          <p>© 2022 - {moment().format("YYYY")}</p>
        </div>
        <div className="flex flex-row justify-end">
          <div className="grid grid-cols-3 gap-4">
            {Socials.map((s) => {
              return (
                <a href={s.url} key={s.name}>
                  <s.icon className="text-white/70 w-6 h-6 hover:text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
