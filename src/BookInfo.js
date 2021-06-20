import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { useParams, Link } from "react-router-dom";
import { BooksContext } from "./App";
import image from "./images/noCover.jpg";

function FetchMoreInfo(match) {
  const { books } = useContext(BooksContext);

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  let { bookId } = useParams();

  const fetchItems = async () => {
    const data = await fetch(`https://openlibrary.org/books/${bookId}.json`);
    const items = await data.json();

    setItems(items);
  };

  const clickedBook = books.filter(
    (book) => book.seed[0] === `/books/${bookId}`
  );

  return (
    <>
      <div className="innerContainer2">
        {clickedBook && clickedBook[0].isbn ? (
          <img
            alt=""
            src={`http://covers.openlibrary.org/b/isbn/${clickedBook[0].isbn[0]}-M.jpg`}
          />
        ) : (
          <img alt="" src={image} />
        )}
        <h3>Title: {items.title}</h3>
        {items && items.number_of_pages ? (
          <h3>Number of Pages: {items.number_of_pages}</h3>
        ) : (
          <h3>Number of Pages: Not provided</h3>
        )}
        {items && items.publishers ? (
          <h3>Publisher: {items.publishers}</h3>
        ) : (
          <h3>Publisher: Not provided</h3>
        )}
        {items && items.publish_date ? (
          <h3>Publish Date: {items.publish_date}</h3>
        ) : (
          <h3>Publish Date: Not provided</h3>
        )}
        {items && items.publish_places ? (
          <h3>Publish Places: {items.publish_places}</h3>
        ) : (
          <h3>Publish Places: Not provided</h3>
        )}
        {items && items.subjects ? (
          <h3>
            Subjects: {items.subjects[0]} {items.subjects[1]}{" "}
            {items.subjects[2]} {items.subjects[3]}
          </h3>
        ) : (
          <h3>Subjects: Not provided</h3>
        )}
      </div>
      <div>
        <Link className="backAbout" to="/">
          Back
        </Link>
      </div>
    </>
  );
}
export default FetchMoreInfo;
