import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ListedBooks from './Pages/ListedBooks'
import PagesToRead from './Pages/PagesToRead'
import Home from './Pages/Home'
import App from './App'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path:'/',
        element:<Home></Home>

      },
      {
        path: "/listedBooks",
        element:<ListedBooks></ListedBooks>
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
