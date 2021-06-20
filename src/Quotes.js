import { React, useState } from "react";
import { Link } from "react-router-dom";
import quotes from "./quotes.json";
import "./style.css";

function Quotes() {
  const [values] = useState(Object.values(getRandomValues(quotes, 3)));

  return (
    <div className="App">
      <div>
        <h2>Quotes of the Day</h2>
        {values.map((value, index) => {
          const { quote, author } = value;
          if (isEven(index)) {
            return (
              <h1 key={`${author}-i`} className="myRandomQuoteEven">
                {quote} <br /> {author}{" "}
              </h1>
            );
          } else {
            return (
              <h1 key={`${author}-i`} className="myRandomQuote">
                {quote} <br /> {author}{" "}
              </h1>
            );
          }
        })}
      </div>
      <br />
      <br />
      <Link className="back" to="/">
        Back
      </Link>
    </div>
  );
}
const getRandomValues = (array, amount) => {
  const randomElements = [...array].sort(() => 0.5 - Math.random());
  return randomElements.slice(0, amount);
};
const isEven = (number) => {
  return number % 2 === 0;
};
export default Quotes;
