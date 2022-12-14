import { FeedCard } from "../ui/feed-card";
import { Layout } from "../ui/layout";

const feeds = [
  {
    name: "Tech",
    url: "",
  },
  {
    name: "Chronic Illness",
    url: "",
  },
  {
    name: "Healthcare IT",
    url: "",
  },
];

const navItems = [
  {
    icon: "Home 🏠",
    url: "/",
  },
  {
    name: "Posts ✏️",
    url: "/posts",
  },
];

const Feeds = () => {
  return (
    <Layout>
      <section className="flex flex-col w-full justify-start pb-5 align-bottom">
        <div className="flex flex-row w-full space-x-2">
          <h1 className="text-4xl font-black pb-4">Feeds</h1>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9999 0C24.8359 0 32 7.164 32 16.0001C32 24.8371 24.836 32 15.9999 32C7.16389 32 0 24.837 0 16.0001C0 7.164 7.16301 0 15.9999 0Z"
              fill="#FF5A5F"
            />
            <path
              d="M12.0011 17.996C10.896 17.996 9.99902 18.8921 9.99902 19.9981C9.99902 21.1041 10.895 22.0001 12.0011 22.0001C13.1071 22.0001 14.0031 21.1041 14.0031 19.9981C14.0031 18.8921 13.107 17.996 12.0011 17.996ZM11.41 13.002C10.6329 13.002 10.004 13.631 10.004 14.4081C10.004 15.184 10.6329 15.8141 11.41 15.8141C14.0459 15.8141 16.191 17.959 16.191 20.5951C16.191 21.371 16.82 22.0011 17.598 22.0011C18.373 22.0011 19.004 21.3711 19.004 20.5951C19.004 16.408 15.5971 13.002 11.41 13.002ZM11.437 8.00101C10.643 8.00101 9.99902 8.64503 9.99902 9.43899C9.99902 10.233 10.643 10.877 11.437 10.877C16.778 10.877 21.124 15.222 21.124 20.563C21.124 21.357 21.7671 22.001 22.562 22.001C23.357 22.001 24 21.356 24 20.563C23.999 13.636 18.3631 8.00101 11.437 8.00101Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex flex-col space-y-5">
          <p className="text-sm font-['Work_Sans']">
            I recognize that I tend to write about different niches that don’t
            interest every human that stumbles across my content. As a result,
            I’ve set up different feeds for the different type of content that I
            write.
          </p>
          <p className="text-sm font-['Work_Sans']">
            If you are someone who is interested in all the content I have to
            offer, there’s a feed for that too!
          </p>
        </div>
      </section>
      <section className="w-full space-y-5">
        {feeds.map((feed) => {
          return <FeedCard key={feed.name} title={feed.name} url={feed.url} />;
        })}
      </section>
    </Layout>
  );
};

export default Feeds;
