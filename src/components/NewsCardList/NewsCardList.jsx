import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import { useState } from "react";
const NewsCardList = ({ newsCardItems, isLoading, isNotFound }) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const handleShowMore = () => {
    setVisibleCount((count) => {
      return count + 3;
    });
  };
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
            {newsCardItems.slice(0, visibleCount).map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
          {visibleCount < newsCardItems.length && (
            <div className="news-card-list__button-container">
              <button
                className="news-card-list__button"
                onClick={handleShowMore}
              >
                Show more
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};
export default NewsCardList;
