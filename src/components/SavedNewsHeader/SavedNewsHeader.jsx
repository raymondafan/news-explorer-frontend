import SavedNews from "../SavedNews/SavedNews";
import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";
import "./SavedNewsHeader.css";
const SavedNewsHeader = ({ savedArticles }) => {
  return (
    <div className="saved-news__header">
      <header className="saved-news__header-container">
        <h1 className="saved-news__header-title">Saved articles</h1>
        <p className="saved-news__header-subtitle">
          Ray, you have 5 saved <br />
          articles
        </p>
        <p className="saved-news__header-keywords">By keywords:</p>
      </header>

      <SavedNewsCardList savedArticles={savedArticles} />
    </div>
  );
};
export default SavedNewsHeader;
