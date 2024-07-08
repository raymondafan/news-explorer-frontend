import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

const NewsCardList = ({ newsCardItems }) => {
  return (
    <section className="news-card-list">
      <h2 className="news-card-list__header"> Search results</h2>
      <div className="news-card-list__items">
        {newsCardItems.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
      <div className="news-card-list__button-container">
        <button className="news-card-list__button">Show more</button>
      </div>
    </section>
  );
};
export default NewsCardList;
