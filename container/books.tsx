"use client";

import { Book, BookStatus } from "@/types";
import { Accordion, AccordionItem } from "@/ui/accordion";
import { BookListItem } from "@/ui/book-list";
import { BookPreview } from "@/ui/books/book-preview";
import { Layout } from "@/ui/layout";
import { NavAlign } from "@/ui/layout/navigation";

const NavigationItems = [
  {
    url: "/",
    label: "Home",
  },
];

export const Books = ({ current, books }: { current: Book; books: Book[] }) => {
  const complete = books?.filter((b) => b.status === BookStatus.COMPLETE);
  const queued = books?.filter((b) => b.status === BookStatus.QUEUED);

  return (
    <Layout alignNav={NavAlign.RIGHT} navItems={NavigationItems}>
      <h1 className="text-3xl w-fit md:text-4xl font-extrabold font-[Raleway] bg-clip-text text-transparent bg-gradient-to-r from-blue to-purple">
        Books
      </h1>
      <p className="text-white/80">
        My goal for 2023 is to read more. Books, articles, you name it. I built
        this tool to help keep me accountable, and to track what I have been
        reading.
      </p>

      <section>
        <h2 className="text-lg font-semibold pb-4">Currently Reading</h2>
        <BookPreview className="pb-16" book={current} />
        <Accordion>
          <AccordionItem label="Complete">
            {complete?.length != null && complete?.length > 0 ? (
              <BookListItem books={complete} />
            ) : (
              <p className="font-medium text-sm">
                Oops, there&apos;s nothing here!
              </p>
            )}
          </AccordionItem>
          <AccordionItem label="Queued">
            {queued?.length != null && queued?.length > 0 ? (
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
