import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
function About() {
  return (
    <>
      <div className="divOpenLibrary">
        <h1>About Open Library</h1>
        <p className="paraOpenLibrary">
          Open Library is an online project intended to create "one web page for
          every book ever published". Created by Aaron Swartz, Brewster Kahle,
          Alexis Rossi, Anand Chitipothu, and Rebecca Malamud, Open Library is a
          project of the Internet Archive, a nonprofit organization. It has been
          funded in part by grants from the California State Library and the
          Kahle/Austin Foundation.
        </p>
      </div>
      <div className="divAppInfo">
        <h1>About Get Books App</h1>
        <p className="paraAppInfo">
          - You can start a search by any search value.
          <br />
          - The application will return a list of books and author names that
          match with your search value.
          <br />
          - Here you will find some information about the books, including the
          cover of the book.
          <br />
          - If you can't see a cover, this is because the API does not provide a
          cover for that specific book.
          <br />
          - If you click on any of the information, you will see more detailed
          information about a particular book.
          <br />
          - You can always go back to your previous page using the 'Back'
          button.
          <br />
        </p>
      </div>
      <br />
      <br />
      <Link className="backAbout" to="/">
        Back
      </Link>
    </>
  );
}
export default About;
