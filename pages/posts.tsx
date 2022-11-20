import { FeedCard } from "../ui/feed-card";

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
export const Posts = () => {
  return (
    <>
      <section className="flex flex-col w-full justify-start pb-5 align-bottom">
        <div className="flex flex-row w-full space-x-2">
          <h1 className="text-4xl font-['Montserrat'] font-black pb-4">
            Posts ✏️
          </h1>
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
    </>
  );
};

export default Posts;
