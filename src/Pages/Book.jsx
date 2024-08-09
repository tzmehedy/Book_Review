import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getLocalStorage, saveLocalStorage } from "../utilities/localstorage";
const Book = () => {

    const params = useParams()

    const books = useLoaderData()

    const selectedBook =
      Array.isArray(books) &&
       books?.find((book) => book.bookId === params.bookId);

    const handelRead = () =>{

      const getReadBookList = getLocalStorage("readBooksId")

      const isExist = getReadBookList.find(
        (readBookId) => readBookId === params.bookId
      );

      if(!isExist){
        saveLocalStorage(params.bookId, "readBooksId");
        toast("successfully added");
      }
      else{
        toast("Already Read")
      }
    }

    const handelWishlist= ()=>{
      const getWishList = getLocalStorage("wishlistBooksID");
      const getReadBookList = getLocalStorage("readBooksId");

      // console.log(getReadBookList)

      // const isExist = getWishList.find(
      //   (wishBookId) => wishBookId === params.bookId
      // );

      function isExist(){
        for(let i=0; i<getReadBookList.length; i++){
          for(let j=0; j<getWishList.length;j++){
            if(getReadBookList[i]=== getWishList[j]){
              return true
            }
            else{
              return false
            }
          }

        }
      }

      let isExistCheck = isExist()

      console.log(isExistCheck);
      if (isExistCheck === true || isExistCheck === undefined) {
        saveLocalStorage(params.bookId, "wishlistBooksID");
        toast("Successfully added");
      } else {
        toast("Already Read");
      }
    }
    
    return (
      <div className="flex flex-col md:flex-row justify-around items-center max-h-screen space-y-20 mb-10">
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
            <button
              onClick={handelRead}
              className="border border-[#131313] rounded-lg px-3 py-1"
            >
              Read
            </button>
            <button onClick={handelWishlist} className="bg-[#50B1C9] px-4 py-1 rounded-lg">
              Wishlist
            </button>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    );
};

export default Book;