import "./App.css";
import { useState } from "react";
import FilteredQuotes from "./components/FilteredQuotes";
import bg from "./assets/videos/bgvideo.mp4";

function App() {
  const [author, setAuthor] = useState("");

  const handleSelect = (e) => {
    setAuthor(e.target.value);
  };

  // console.log(filterArray, author);
  return (
    <>
      <div className="selectQ">
        <div className="select">
          {author == "" && (
            <select name="" id="" onChange={handleSelect}>
              <option value="">Select an Author</option>
              <option value="Steve Jobs">Steve Jobs</option>
              <option value="Ratan Tata">Ratan Tata</option>
              <option value="Paulo Coelho">Paulo Coelho</option>
              <option value="Elon Musk">Elon Musk</option>
              <option value="Jeff Bezos">Jeff Bezos</option>
            </select>
          )}
          {author !== "" && (
            <FilteredQuotes author={author} setAuthor={setAuthor} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
