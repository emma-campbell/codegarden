import Books from "@/container/books";
import { getBooks } from "@/lib/sanity";

const Page = async () => {
  const books = await getBooks();
  return <Books books={books} />;
};

export default Page;
