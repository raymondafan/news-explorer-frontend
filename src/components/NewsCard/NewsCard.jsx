import "./NewsCard.css";
import saveButton from "../../assets/saveButton.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
const NewsCard = ({ article }) => {
  const { title, url, id, urlToImage, description, date, source } = article;
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

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
        >
          <img className="news-card__save-icon" src={saveButton} alt="save" />
          {isTooltipVisible && (
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
            <h2 className="news-card__date">{date}</h2>
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
