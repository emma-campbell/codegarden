import { FC } from "react";
import moment from "moment";

export const Footer: FC = () => {
  return (
    <footer className="mt-36 pb-36 text-base">
      <div className="text-gray-100">
        <div className="flex flex-col font-medium justify-between space-y-5">
          <div className="flex space-x-5">
            <div>
              <a href="/feeds">RSS Feeds</a>
            </div>
            <div>
              <a href="/contact">Contact</a>
            </div>
            <div>
              <a href="https://github.com/emma-campbell">Github</a>
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
