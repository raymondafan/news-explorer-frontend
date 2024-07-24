import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

const Main = ({
  isLoading,
  isNotFound,
  newsCardItems,
  isSearchInitiated,
  onSaveArticle,
  isLoggedIn,
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
        />
      )}
      <About />
    </main>
  );
};
export default Main;
