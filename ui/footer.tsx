import moment from "moment";
import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="pb-4">
      <hr />
      <div className="mt-8 mb-12 grid space-y-2 sm:space-y-0 sm:grid-cols-3">
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
          <h4 className="font-semibold">Other Information</h4>
          <Link href="/about" className="text-white/30 hover:text-white/70">
            About Me
          </Link>
          {/* <p className="text-white/30">Resume</p> */}
          {/* <p className="text-white/30">Contact</p> */}
        </div>
        <div className="text-sm flex flex-col space-y-1"></div>
      </div>
      <div className="grid xl:grid-cols-2">
        <div className="text-sm text-white/70">
          <p>Emma Campbell</p>
          <p>© 2022 - {moment().format("YYYY")}</p>
        </div>
      </div>
    </footer>
  );
};
