import { BarChart, Bar, Cell, XAxis, YAxis, } from "recharts";
import { getLocalStorage } from "../utilities/localstorage";
import { useLoaderData } from "react-router-dom";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const PagesToRead = () => {

    const books = useLoaderData();
    const readBooks = getLocalStorage("readBooksId");

    const selectedReadBooks =
      Array.isArray(books) &&
      books?.filter((book) => readBooks.includes(book.bookId));

    
    
 console.log(selectedReadBooks)
    
  return (
    <div className="flex justify-center">
      <BarChart
        width={800}
        height={500}
        data={selectedReadBooks}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="bookName" />
        <YAxis />
        <Bar dataKey="totalPages" fill="#8884d8" label={{ position: "top" }}>
          {selectedReadBooks.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 30]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default PagesToRead;
