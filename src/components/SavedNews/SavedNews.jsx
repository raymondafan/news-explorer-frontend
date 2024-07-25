import "./SavedNews.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import deleteButton from "../../assets/trash.svg";
const SavedNews = ({ article }) => {
  const { title, url, id, urlToImage, description, publishedAt, source } =
    article;

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 815);

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 815);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="saved-news" key={id}>
      <div className="saved-news__content">
        <img
          src={urlToImage}
          alt="Article image"
          className="saved-news__image"
        />
        <div className="saved-news__keyword">nature</div>
        <button
          className="saved-news__remove-button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="saved-news__trash-icon"
            src={deleteButton}
            alt="delete"
          />
          {isTooltipVisible && !isSmallScreen && (
            <span className="saved-news__remove-hover">Remove from saved</span>
          )}
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
