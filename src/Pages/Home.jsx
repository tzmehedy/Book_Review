import { useLoaderData } from "react-router-dom";
import bookImage from "../assets/Images/pngwing 1.png"
import Books from "../Components/Books";

const Home = () => {
  const books = useLoaderData()
  
    return (
      <div className="container mx-auto">
        <div className="p-3">
          {/* Hero section */}
          <div className="flex flex-col-reverse md:flex-row justify-center md:justify-evenly md:items-center text-center md:text-justify p-6 bg-[#1313130D] rounded-lg ">
            <div className="space-y-10">
              <h1 className="font-bold text-5xl text-black">
                Books to freshen <br /> up your bookshelf
              </h1>
              <button className="bg-[#23BE0A] px-2 py-3 rounded-lg">
                View the list
              </button>
            </div>
            <div>
              <img src={bookImage} alt="" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-3">
          {Array.isArray(books) && books?.map((book) => (
            <Books book={book} key={book.bookId}></Books>
          ))}
        </div>
      </div>
    );
};

export default Home;