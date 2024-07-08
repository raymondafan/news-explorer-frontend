import "./NewsCard.css";
import saveButton from "../../assets/saveButton.svg";
import { Link } from "react-router-dom";
const NewsCard = ({ title, url, id, image }) => {
  return (
    <Link
      to={url}
      target="_blank"
      rel="noopener noreferrer"
      className="news-card-link"
    >
      <div className="news-card" key={id}>
        <div className="news-card__content">
          <img src={image} alt="Article image" className="news-card__image" />
          <button className="news-card__save-button">
            <img className="news-card__save-icon" src={saveButton} alt="save" />
          </button>
          <div className="news-card__description">
            <h2 className="news-card__date">September 17, 2024</h2>
            <h3 className="news-card__article-title">{title}</h3>
            <p className="news-card__summary">g5tgvtvg</p>
            <p className="news-card__publisher">National Geographic</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default NewsCard;
