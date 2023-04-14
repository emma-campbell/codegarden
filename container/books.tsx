"use client";

import { Accordion, AccordionItem } from "@/ui/accordion";
import { BookListItem } from "@/ui/book-list";
import { Layout } from "@/ui/layout";
import { NavAlign } from "@/ui/layout/navigation";
import { Book } from "contentlayer/generated";
import { FC } from "react";

type BooksProps = {
  books?: Book[];
};

const NavigationItems = [
  {
    url: "/",
    label: "Home",
  },
];

export const Books: FC<BooksProps> = ({ books }) => {
  const reading = books?.filter((b) => b.status === "in progress");
  const complete = books?.filter((b) => b.status === "completed");
  const queued = books?.filter((b) => b.status === "queued");

  return (
    <Layout alignNav={NavAlign.RIGHT} navItems={NavigationItems}>
      <h1 className="text-3xl w-fit md:text-4xl font-extrabold font-[Cal Sans]">
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
            {reading?.length != null && reading?.length > 0 ? (
              <BookListItem books={reading} />
            ) : (
              <p className="font-medium text-sm">
                Oops, there&apos;s nothing here!
              </p>
            )}
          </AccordionItem>
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
