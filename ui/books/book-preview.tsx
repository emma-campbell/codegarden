import { Book } from "@/types";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { sanity } from "@/lib/sanity";
import moment from "moment";

export const BookPreview = ({
  book,
  className,
}: {
  book: Book;
  className: string;
}) => {
  const cover = useNextSanityImage(sanity, book.cover as any);
  return (
    <div className={`flex h-1/2 gap-x-4 grow-0 w-full ${className}`}>
      {book.image ?? (
        <Img
          // @ts-expect-error
          {...cover}
          className="grow-0 h-auto w-auto"
          placeholder="blur"
          // @ts-expect-error
          blurDataURL={book.cover.asset.metadata.lqip}
        />
      )}
      <div className="flex-col space-y-4 basis-3/4">
        <div>
          <h3 className="font-extrabold">{book.title}</h3>
          <h4>{book.authors?.join(", ")}</h4>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase">Started</h4>
          <p>{moment(book.started).format("MMM Do, YYYY")}</p>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase">Completed</h4>
          <p>{book.ended ? moment(book.ended).format("MMM Do, YYYY") : "-"}</p>
        </div>
      </div>
    </div>
  );
};
