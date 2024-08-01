import { useLoaderData, useParams } from "react-router-dom";

const Book = () => {

    const params = useParams()

    const books = useLoaderData()

    const selectedBook =
      Array.isArray(books) &&
       books?.find((book) => book.bookId === params.bookId);

    console.log(selectedBook)
    
    return (
      <div className="flex justify-around items-center max-h-screen space-y-20 mb-10">
        <div>
          <img src={selectedBook.image} alt="" />
        </div>
        <div className="space-y-5">
          <h1>{selectedBook.bookName}</h1>
          <p>By {selectedBook.author}</p>
          <hr />
          <p>{selectedBook.category}</p>
          <hr />
          <p>Review: {selectedBook.review}</p>
          <div className="flex items-center justify-between">
            <div>Tags</div>
            <div className="flex justify-between space-x-5">
              {selectedBook &&
                selectedBook.tags.map((tag) => (
                  <p className="font-bold text-[#23BE0A]" key={tag.index}>
                    #{tag}
                  </p>
                ))}
            </div>
          </div>
          <div>
            <pre>Number of the pages: {selectedBook.totalPages}</pre>
            <pre>Publisher: {selectedBook.publisher}</pre>
            <pre>Year of publishing: {selectedBook.yearOfPublishing}</pre>
            <pre>Rating: {selectedBook.rating}</pre>
          </div>

          <div className="flex justify-start space-x-5">
            <button className="border border-[#131313] rounded-lg px-3 py-1">
              Read
            </button>
            <button className="bg-[#50B1C9] px-4 py-1 rounded-lg">Wishlist</button>
          </div>
        </div>
      </div>
    );
};

export default Book;