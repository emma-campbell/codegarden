import Books from "@/container/books";
import { allBooks } from "contentlayer/generated";

const Page = async () => {
  return <Books books={allBooks} />;
};

export default Page;
