import "./App.css";
import { useState, createContext } from "react";
import BookInfo from "./BookInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import Quotes from "./Quotes";
import Search from "./Search";
import Contacts from './Contacts';

export const BooksContext = createContext();

function App() {
  const [books, setBooks] = useState([]);
  return (
    <>
      <Router>
        <div className="container">
          <Nav />
          <BooksContext.Provider value={{ books, setBooks }}>
            <h1 className="paraReadBooks">Read books, because reading makes you aware.</h1>
            <Switch>
              <Route path="/" exact component={Search} />
              <Route path="/about" component={About} />
              <Route path="/quotes" component={Quotes} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/books/:bookId" exact component={BookInfo} />
            </Switch>
          </BooksContext.Provider>
        </div>
      </Router>
    </>
  );
}

export default App;
