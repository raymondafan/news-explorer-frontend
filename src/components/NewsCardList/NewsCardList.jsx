import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
const NewsCardList = ({ newsCardItems, isLoading, isNotFound }) => {
  return (
    <section className="news-card-list">
      {isLoading ? (
        <Preloader />
      ) : isNotFound ? (
        <NotFound />
      ) : (
        <>
          <h2 className="news-card-list__header"> Search results</h2>
          <div className="news-card-list__items">
            {newsCardItems.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
          <div className="news-card-list__button-container">
            <button className="news-card-list__button">Show more</button>
          </div>
        </>
      )}
    </section>
  );
};
export default NewsCardList;
