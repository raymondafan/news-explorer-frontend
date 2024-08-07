import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import { useEffect, useState } from "react";
const NewsCardList = ({
  newsCardItems,
  isLoading,
  isNotFound,
  onSaveArticle,
  isLoggedIn,
  shouldResetVisibleCount,
}) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const handleShowMore = () => {
    setVisibleCount((count) => {
      return count + 3;
    });
  };
  useEffect(() => {
    if (shouldResetVisibleCount) {
      setVisibleCount(3);
    }
  }, [shouldResetVisibleCount]);

  return (
    <section className="news-card-list">
      {isLoading ? (
        <Preloader />
      ) : isNotFound ? (
        <NotFound />
      ) : (
        <>
          <h2 className="news-card-list__header"> Search results</h2>
          <ul className="news-card-list__items">
            {newsCardItems.slice(0, visibleCount).map((article, index) => (
              <li className="news-card-list__item">
                <article>
                  <NewsCard
                    key={index}
                    article={article}
                    onSaveArticle={onSaveArticle}
                    isLoggedIn={isLoggedIn}
                  />
                </article>
              </li>
            ))}
          </ul>
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
