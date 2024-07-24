import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

const Main = ({
  isLoading,
  isNotFound,
  newsCardItems,
  isSearchInitiated,
  onSaveArticle,
}) => {
  return (
    <main className="main">
      {isSearchInitiated && (
        <NewsCardList
          newsCardItems={newsCardItems}
          isLoading={isLoading}
          isNotFound={isNotFound}
          onSaveArticle={onSaveArticle}
        />
      )}
      <About />
    </main>
  );
};
export default Main;
