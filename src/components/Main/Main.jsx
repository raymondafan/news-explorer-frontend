import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

const Main = ({ isLoading, isNotFound, newsCardItems }) => {
  return (
    <main className="main">
      {isLoading ||
        isNotFound ||
        (newsCardItems.length > 0 && (
          <NewsCardList
            newsCardItems={newsCardItems}
            isLoading={isLoading}
            isNotFound={isNotFound}
          />
        ))}
      <About />
    </main>
  );
};
export default Main;
