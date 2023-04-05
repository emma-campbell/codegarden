import { Layout } from "@/ui/layout";
import Link from "next/link";

export const MissingPage = () => {
  return (
    <Layout>
      <h1 className="font-extrabold text-3xl md:text-5xl">
        The page you&apos;re looking for isn&apos;t here.{" "}
      </h1>
      <p>
        You can use the navigation above to get to where you&apos;re going, or{" "}
        <Link
          href="/"
          className="underline transition ease-in-out hover:bg-green-300"
        >
          click here
        </Link>{" "}
        to get back home.
      </p>
    </Layout>
  );
};

export default MissingPage;
