import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";


const Books = ({ book }) => {
    const { bookName, author, image, rating, bookId, category, tags } = book;

    console.log(bookName);
  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-base-200 w-96 h-[100%] shadow-2xl p-5 flex-col space-y-3">
        <figure className="bg-gray-300 p-2 rounded-lg flex-grow">
          <img src={image} />
        </figure>
        <div className="flex justify-around">
          {tags.map((tag) => (
            <p className="text-[#23BE0A] font-bold" key={tags.index}>
              {tag}
            </p>
          ))}
        </div>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>By {author}</p>
          <div className="flex justify-between">
            <div className="">{category}</div>
            <div className="flex justify-between items-center space-x-5">
              {rating} <CiStar></CiStar>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

Books.propTypes = {
    book : PropTypes.object
}

export default Books;
