import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
const NewsCardList = ({}) => {
  return (
    <section className="news-card-list">
      Search results
      <div className="news-card__items">
        <NewsCard />
      </div>
    </section>
  );
};
export default NewsCardList;
