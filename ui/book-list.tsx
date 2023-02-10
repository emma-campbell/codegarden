import { Book } from "contentlayer/generated";
import { FC } from "react";

type BookListProps = {
  books: Book[];
};

export const BookListItem: FC<BookListProps> = ({ books }) => {
  return (
    <>
      {books.map((b) => {
        return (
          <div
            className="grid grid-cols-1 gap-y-2 md:gap-y-0 md:grid-cols-2 justify-between align-middle items-center"
            key={b.title}
          >
            <div>
              <h5 className="text-white font-medium text-md">{b.title}</h5>
              <p className="text-sm">{b.authors?.join(", ")}</p>
            </div>
            <div className="flex justify-start md:justify-end space-x-4">
              {b.start ? (
                <div>
                  <p className="text-xs">{b.startedAt}</p>
                  <p className="text-xs">STARTED</p>
                </div>
              ) : null}
              {b.end ? <p>-</p> : null}
              {b.end ? (
                <div className="flex space-x-4">
                  <div>
                    <p className="text-xs">{b.endedAt}</p>
                    <p className="text-xs">COMPLETED</p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </>
  );
};
