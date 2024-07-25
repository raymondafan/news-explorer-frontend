import "./NewsCard.css";
import saveButton from "../../assets/bookmark.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const NewsCard = ({ article, onSaveArticle, isLoggedIn }) => {
  const { title, url, id, urlToImage, description, publishedAt, source } =
    article;
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 815);

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
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
    <div className="news-card" key={id}>
      <div className="news-card__content">
        <img
          src={urlToImage}
          alt="Article image"
          className="news-card__image"
        />
        <button
          className="news-card__save-button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={onSaveArticle}
        >
          <img className="news-card__save-icon" src={saveButton} alt="save" />
          {!isLoggedIn && isTooltipVisible && !isSmallScreen && (
            <span className="news-card__save-hover">
              Sign in to save articles
            </span>
          )}
        </button>
        <Link
          to={url}
          target="_blank"
          rel="noopener noreferrer"
          className="news-card-link"
        >
          <div className="news-card__info">
            <h2 className="news-card__date">{formatDate(publishedAt)}</h2>
            <h3 className="news-card__article-title">{title}</h3>
            <p className="news-card__description">{description}</p>
            <p className="news-card__publisher">{source.name}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default NewsCard;
