import "./NewsCard.css";
import saveButton from "../../assets/savebutton.svg";
const NewsCard = ({}) => {
  return (
    <div className="news-card">
      <div className="news-card__content">
        <img src="" alt="Article image" className="news-card__image" />
        <button className="news-card__save-button">img.</button>
        <div className="news-card__description">
          <h2 className="news-card__date">11/11/11</h2>
          <h3 className="news-card__article-title">supd</h3>
          <p className="news-card__summary">g5tgvtvg</p>
          <p className="news-card__publisher">National Geographic</p>
        </div>
      </div>
      <button className="news-card__more-button">show more</button>
    </div>
  );
};
export default NewsCard;
