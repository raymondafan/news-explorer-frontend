import { useState } from "react";

import "./SearchForm.css";
const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    } else {
      alert("Please enter a keyword");
    }
    // setIsClicked(false);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <section className="search-form__container">
        <h1 className="search-form__header">What's going on in the world?</h1>
        <p className="search-form__subHeader">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <div className="search-form__bar">
          <input
            type="text"
            className="search-form__input"
            id="search"
            placeholder="Enter topic"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className={`search-form__button ${
              isClicked ? "search-form__button-clicked" : ""
            }`}
            type="submit"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </section>
    </form>
  );
};
export default SearchForm;
