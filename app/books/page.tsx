import Books from "@/container/books";
import { getBooks, getCurrentlyReading } from "@/lib/sanity";

const Page = async () => {
  const reading = await getCurrentlyReading();
  const books = await getBooks();
  return <Books current={reading} books={books} />;
};

export default Page;
