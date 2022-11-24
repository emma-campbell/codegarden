import { FC } from "react";
import Link from "next/link";
import moment from "moment";

export const Footer: FC = () => {
  return (
    <footer className="flex flex-col w-full justify-start mt-36 pb-36 text-base">
      <div className="text-gray-100">
        <div className="flex flex-col font-medium justify-between space-y-5">
          <div className="flex space-x-5">
            {/* <div>
              <Link href={"/feeds"}>RSS Feeds</Link>
            </div>
            <div>
              <Link href={"/contact"}>Contact</Link>
            </div> */}
            <div>
              <a href="https://github.com/emma-campbell">Github</a>
            </div>
            <div>
              <a href="https://twitter.com/spoonsandcode">Twitter</a>
            </div>
          </div>

          <div className="flex flex-col justify-left text-gray-200">
            <div>
              <p>Made with ❤️ by Emma Campbell</p>
            </div>
            <div>
              <p>© {moment().format("YYYY").toString()}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
