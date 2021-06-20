import { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "./App";
import image from "./images/noCover.jpg";

const Book = (props) => {
  const { books } = useContext(BooksContext);
  const { setBooks } = useContext(BooksContext);

  const removeBook = (key, index) => {
    setBooks(books.filter((data) => data.key !== key));
  };
  const { item } = props;

  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <>
    <div className="outerContainer">
      <div className="bookContainer">
     
      <p className="innerContainer" style={linkStyle} key={item.seed[0]}>
          <button
            type="button"
            className="deleteBookButton"
            onClick={() => removeBook(item.key)}
          >
            X
          </button><br/>
          {item && item.isbn && item.isbn.length > 0 ? (
            <img
              alt=""
              src={`http://covers.openlibrary.org/b/isbn/${item.isbn[0]}-M.jpg`}
            />
          ) : (
            <img alt="" src={image} />
          )}
          <br />
          <Link to={`${item.seed[0]}`} style={linkStyle}>
            Title: {item.title} <br />
            <br />
            Author: {item.author_name} <br />
            <br />
            First Publish Year: {item.first_publish_year} <br />
            <br />
            Edition Count: {item.edition_count} <br />
            <br />
            Language: {item.language} <br /><br/>
            <button className="learnMoreButton">Learn More</button>
          </Link>
        </p>
      </div>
      </div>
    </>
  );
};
export default Book;
