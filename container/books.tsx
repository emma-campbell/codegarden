"use client";

import { Accordion, AccordionItem } from "@/ui/accordion";
import { BookListItem } from "@/ui/book-list";
import { Book } from "contentlayer/generated";
import moment from "moment";

function sortDate(a: string, b: string): number {
  const c = moment(a);
  const d = moment(b);

  if (c.isBefore(d)) {
    return 1;
  } else if (c.isSame(d)) {
    return 0;
  } else {
    return -1;
  }
}

export const Books = ({ books }) => {
  const reading = books?.filter((b: Book) => b.status === "in progress");
  const complete = books
    ?.filter((b: Book) => b.status === "completed")
    .sort((a: Book, b: Book) => {
      if (a.start && b.start) {
        return sortDate(a.start, b.start);
      } else {
        return -1;
      }
    })
    .reverse();
  const queued = books?.filter((b) => b.status === "queued");

  return (
    <>
      <section className="pb-4">
        <h1 className="w-fit text-5xl sm:text-[96px] font-bold font-heading leading-extra-tight pb-8">
          Books
        </h1>
        <p className="text-white/80">
          My goal for 2023 is to read more. Books, articles, you name it. I
          built this tool to help keep me accountable, and to track what I have
          been reading.
        </p>
      </section>

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
    </>
  );
};

export default Books;
