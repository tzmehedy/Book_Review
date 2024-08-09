
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const WishListBookCard = ({selectedWishListBook}) => {
    
  const {
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
    bookId,
  } = selectedWishListBook;
  return (
    <div className="m-10">
      <div className="flex bg-base-100 shadow-xl">
        <figure>
          <img src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>By: {author}</p>

          <div className="flex space-x-3">
            <div className="flex space-x-2">
              <h1 className="font-bold">Tags</h1>
              {Array.isArray(tags) && tags?.map((tag) => (
                <p className="text-[#23BE0A]" key={tag.index}>
                  #{tag}
                </p>
              ))}
            </div>
            <div>Year of Publishing: {yearOfPublishing}</div>
          </div>

          <div className="flex spce-x-3">
            <div>Publisher: {publisher}</div>
            <div>Page: {totalPages}</div>
          </div>
          <div className="flex items-center space-x-5">
            <div>Category: {category}</div>
            <div>Rating: {rating}</div>
            <Link
              to={`/book/${bookId}`}
              className="bg-[#23BE0A] px-3 py-2 text-white rounded-2xl font-bold"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
WishListBookCard.propTypes = {
  selectedWishListBook : PropTypes.object,
};


export default WishListBookCard;