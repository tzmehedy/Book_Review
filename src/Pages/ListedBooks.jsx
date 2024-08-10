
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
const ListedBooks = () => {

    const [isActive, setActive] = useState(0);

    return (
      <div>
        <div className="bg-gray-400 p-12">
          <h1 className="font-bold text-center text-2xl">Books</h1>
        </div>
        <div className="flex justify-center items-center mt-10">
          <h1 className="bg-[#23BE0A] p-3 rounded-lg font-bold">Short By</h1>
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className=" p-4 rounded-lg rounded-l-none bg-[#23BE0A] -ml-2">
              <IoIosArrowDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Rating</a>
              </li>
              <li>
                <a>Publish Date</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center mx-4 overflow-x-auto mt-10 overflow-y-hidden flex-nowrap dark:bg-gray-100 dark:text-gray-800">
          <Link
            to={""}
            onClick={() => setActive(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              isActive === 0 ? "border border-b-0 rounded-t-lg" : "border-b"
            } dark:border-gray-600 dark:text-gray-600`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Read Books</span>
          </Link>
          <Link
            to={"wishlistBooks"}
            onClick={() => setActive(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              isActive === 1 ? "border border-b-0 rounded-t-lg" : "border-b"
            } dark:border-gray-600 dark:text-gray-900`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Wishlist Books </span>
          </Link>
        </div>
        <Outlet></Outlet>
      </div>
    );
};

export default ListedBooks;