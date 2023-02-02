import { allBooks } from "contentlayer/generated";
import { Layout } from "@/ui/layout";
import { FC } from "react";
import { Accordion, AccordionItem } from "@/ui/accordion";
import { BookListItem } from "@/ui/book-list";

export async function getStaticProps() {
  const books = allBooks;
  return { props: { books } };
}

// @ts-ignore
export const Books: FC = ({ books }) => {
  const reading = books.filter((b) => b.status === "in progress");
  const complete = books.filter((b) => b.status === "completed");
  const queued = books.filter((b) => b.status === "queued");

  return (
    <Layout>
      <h1 className="text-3xl w-fit md:text-4xl font-extrabold font-[Raleway] bg-clip-text text-transparent bg-gradient-to-r from-blue to-purple">
        Books
      </h1>
      <p className="text-white/80">
        My goal for 2023 is to read more. Books, articles, you name it. I built
        this tool to help keep me accountable, and to track what I have been
        reading.
      </p>

      <section>
        <Accordion>
          <AccordionItem label="In Progress" isOpen={true}>
            {reading.length > 0 ? (
              <BookListItem books={reading} />
            ) : (
              <p className="font-medium text-sm">
                Oops, there&apos;s nothing here!
              </p>
            )}
          </AccordionItem>
          <AccordionItem label="Complete">
            {complete.length > 0 ? (
              <BookListItem books={complete} />
            ) : (
              <p className="font-medium text-sm">
                Oops, there&apos;s nothing here!
              </p>
            )}
          </AccordionItem>
          <AccordionItem label="Queued">
            {queued.length > 0 ? (
              <BookListItem books={queued} />
            ) : (
              <p className="font-medium text-sm">
                Oops, there&apos;s nothing here!
              </p>
            )}
          </AccordionItem>
        </Accordion>
      </section>
    </Layout>
  );
};

export default Books;
