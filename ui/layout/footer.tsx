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
    <footer className="mt-12 pb-4 font-heading font-bold">
      <hr className="border-white/20 border-t-2" />
      <div className="mt-8 mb-12 grid space-y-2 sm:space-y-0 sm:grid-cols-3">
        <div className="text-md flex flex-col text-white/60">
          <Link href="/books" className="hover:text-white/95">
            reading
          </Link>
          <Link href="/bookmarks" className="hover:text-white/95">
            bookmarks
          </Link>
          <Link href="/snippets" className="hover:text-white/95">
            snippets
          </Link>
        </div>
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
