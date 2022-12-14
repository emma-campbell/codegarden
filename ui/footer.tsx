import { FC } from "react";
import Link from "next/link";
import moment from "moment";

export const Footer: FC = () => {
  return (
    <footer className="mt-16">
      <hr />
      <div className="mt-8 pb-36 grid space-y-2 sm:space-y-0 sm:grid-cols-3">
        <div className="text-sm flex flex-col space-y-1">
          <h4 className="font-semibold">Useful Things</h4>
          <Link href="/stats" className="text-white/30 hover:text-white/70">
            Statistics
          </Link>
          <Link href="/tools" className="text-white/30 hover:text-white/70">
            Toolbox
          </Link>
          {/* <p className="text-white/30">Snippets</p>
          <p className="text-white/30">Bookmarks</p> */}
        </div>
        <div className="text-sm flex flex-col space-y-1">
          <h4 className="font-semibold">About Me</h4>
          <p className="text-white/30">Resume</p>
          <p className="text-white/30">Contact</p>
        </div>
        <div className="text-sm flex flex-col space-y-1"></div>
      </div>
      <div className="grid xl:grid-cols-2">
        <p>© Emma Campbell {moment().format("YYYY")}</p>
      </div>
    </footer>
  );
};
