import { useLoaderData } from "react-router-dom";
import { getLocalStorage } from "../utilities/localstorage";
import WishListBookCard from "./WishListBookCard";

const WishListBooks = () => {
    const books = useLoaderData();
    const wishListBooks = getLocalStorage("wishlistBooksID");
    
    const selectedWishListBooks =
      Array.isArray(books) &&
      books?.filter((book) => wishListBooks.includes(book.bookId));

    return (
      <div>
        {Array.isArray(selectedWishListBooks) &&
          selectedWishListBooks?.map((selectedWishListBook) => (
            <WishListBookCard
              selectedWishListBook={selectedWishListBook}
              key={selectedWishListBook.bookId}
            ></WishListBookCard>
          ))}
      </div>
    );
};

export default WishListBooks;