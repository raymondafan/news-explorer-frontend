import "./SearchForm.css";
const SearchForm = ({}) => {
  return (
    <form className="searchForm">
      <section className="searchForm__container">
        <h1 className="searchForm__header">What's going on in the world?</h1>
        <p className="searchForm__subHeader">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <div className="searchForm__bar">
          <input
            type="text"
            className="searchForm__input"
            id="search"
            placeholder="Enter topic"
          />
        </div>
        <button className="searchForm__button" type="submit">
          Search
        </button>
      </section>
    </form>
  );
};
export default SearchForm;
