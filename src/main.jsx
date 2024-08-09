import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListedBooks from "./Pages/ListedBooks";
import PagesToRead from "./Pages/PagesToRead";
import Home from "./Pages/Home";
import App from "./App";
import Book from "./Pages/Book";
import ReadBooks from "./Components/ReadBooks";
import WishListBooks from "./Components/WishListBooks";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("fakeData.json"),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch("fakeData.json"),
          },
          {
            path: "wishlistBooks",
            element: <WishListBooks></WishListBooks>,
            loader: () => fetch("fakeData.json"),
          },
        ],
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/book/:bookId",
        element: <Book></Book>,
        loader: () => fetch("fakeData.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
   
  </React.StrictMode>
);
