import React, { useState } from "react";
import QuotesArray from "../../src/components/data";
import "./FilteredQuotes.css";

const FilteredQuotes = ({ author, setAuthor }) => {
  const filterArray = QuotesArray.filter((quote) => quote.author === author);
  const [quotes, setQuotes] = useState(filterArray[0].quote);

  const RandomQuotes = () => {
    const random = Math.floor(Math.random() * filterArray.length);
    const randQ = filterArray[random].quote;
    const randomA = filterArray[random].author;
    setQuotes(randQ, randomA);
  };

  console.log(quotes);
  return (
    <>
      <div className="quotes">
        <h1>
          Quotes Of:{" "}
          <span>
            {author}
            {quotes.author}
          </span>
        </h1>
        <h5>
          {quotes}
          {quotes.quote}
        </h5>
      </div>
      <div className="btn">
        <button onClick={RandomQuotes}>Change Quotes</button>
        <button onClick={() => setAuthor("")}>Back</button>
      </div>
    </>
  );
};
export default FilteredQuotes;
