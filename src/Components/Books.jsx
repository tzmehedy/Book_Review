import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Books = ({ book }) => {
    const { bookName, author, image, review, bookId } = book;

    console.log(bookName);
  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {author}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
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
