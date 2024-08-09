import { useLoaderData } from "react-router-dom";
import { getLocalStorage } from "../utilities/localstorage";
import ReadBooksCard from "./ReadBooksCard";

const ReadBooks = () => {
   const books = useLoaderData()
   const readBooks = getLocalStorage("readBooksId");

   const selectedReadBooks = Array.isArray(books) && books?.filter((book) =>
     readBooks.includes(book.bookId)
   );

   console.log(selectedReadBooks);
    return (
      <div>
        {Array.isArray(selectedReadBooks) &&
          selectedReadBooks?.map((selectedReadBook) => (
            <ReadBooksCard
              selectedReadBook={selectedReadBook}
              key={selectedReadBook.bookId}
            ></ReadBooksCard>
          ))}
      </div>
    );
};

export default ReadBooks;