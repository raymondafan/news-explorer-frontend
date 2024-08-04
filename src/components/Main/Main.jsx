import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

const Main = ({
  isLoading,
  isNotFound,
  newsCardItems,
  isSearchInitiated,
  onSaveArticle,
  isLoggedIn,
  shouldResetVisibleCount,
}) => {
  return (
    <main className="main">
      {isSearchInitiated && (
        <NewsCardList
          newsCardItems={newsCardItems}
          isLoading={isLoading}
          isNotFound={isNotFound}
          onSaveArticle={onSaveArticle}
          isLoggedIn={isLoggedIn}
          shouldResetVisibleCount={shouldResetVisibleCount}
        />
      )}
      <About />
    </main>
  );
};
export default Main;
