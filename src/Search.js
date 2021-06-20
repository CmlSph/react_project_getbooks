import { useState, useContext } from "react";
import { BooksContext } from "./App";
import Book from "./Book";
import "./style.css";

const Search = (props) => {
  const [bookAuthorName, setBookAuthorName] = useState("");
  const { books, setBooks } = useContext(BooksContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getName = (e) => {
    e.preventDefault();
    setBookAuthorName(e.target.value);
  };

  const getBook = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${bookAuthorName}`
      );
      if (!res.ok) {
        throw Error("Could not fetch the data!");
      }
      const data = await res.json();
      
      setBooks(data.docs);
      setLoading(false);
      setError(null);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <div className="app_container">
      {!bookAuthorName && <p></p>}
      <form onSubmit={getBook}>
        <input
          className="searchInput"
          type="text"
          placeholder="Enter a search word..."
          onChange={getName}
          value={bookAuthorName}
        />
        <input
          className="buttonGetBook"
          type="submit"
          value="Get Books"
          disabled={!bookAuthorName}
        />

        {loading ? (
          <p className="loading">Loading, please wait</p>
        ) : (
          books.map((item) => <Book key={item.key} item={item} />)
        )}
        {error && <div>{error} </div>}
      </form>
    </div>
  );
};

export default Search;
