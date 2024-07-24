import "./SavedNews.css";
import { Link } from "react-router-dom";

import deleteButton from "../../assets/trash.svg";
const SavedNews = ({ article }) => {
  const { title, url, id, urlToImage, description, publishedAt, source } =
    article;

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };
  return (
    <div className="saved-news" key={id}>
      <div className="saved-news__content">
        <img
          src={urlToImage}
          alt="Article image"
          className="saved-news__image"
        />
        <div className="saved-news__keyword">nature</div>
        <button className="saved-news__remove-button">
          <img
            className="saved-news__trash-icon"
            src={deleteButton}
            alt="save"
          />
        </button>
        <Link
          to={url}
          target="_blank"
          rel="noopener noreferrer"
          className="saved-news-link"
        >
          <div className="saved-news__info">
            <h2 className="news-card__date">{formatDate(publishedAt)}</h2>
            <h3 className="saved-news__article-title">{title}</h3>
            <p className="saved-news__description">{description}</p>
            <p className="saved-news__publisher">{source.name}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default SavedNews;
