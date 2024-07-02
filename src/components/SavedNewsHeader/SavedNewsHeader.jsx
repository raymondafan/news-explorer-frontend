import "./SavedNewsHeader.css";
const SavedNewsHeader = () => {
  return (
    <div className="saved-news__header">
      <header className="saved-news__container">
        <h1 className="saved-news__title">Saved articles</h1>
        <p className="saved-news__subtitle">
          Ray, you have 5 saved <br />
          articles
        </p>
        <p className="saved-news__keywords">By keywords:</p>
      </header>
      <div className="saved-news__cards"></div>
    </div>
  );
};
export default SavedNewsHeader;
