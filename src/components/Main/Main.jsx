import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader";

const Main = ({ isLoading, isNotFound, newsCardItems }) => {
  return (
    <main className="main">
      {!isLoading ? "" : <Preloader isLoading />}
      {!isNotFound ? "" : <NotFound />}

      <NewsCardList newsCardItems={newsCardItems} />

      <About />
    </main>
  );
};
export default Main;
