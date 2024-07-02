import Preloader from "../Preloader/Preloader";
import "./SearchForm.css";
const SearchForm = ({}) => {
  return (
    <form className="search-form">
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
          />
          <button className="search-form__button" type="submit">
            Search
          </button>
        </div>
      </section>
    </form>
  );
};
export default SearchForm;
