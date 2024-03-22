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
      <div className="pt-4 text-sm text-white/70">
        <p>Emma Campbell</p>
        <p>© 2022 - 2024</p>
      </div>
    </footer>
  );
};
