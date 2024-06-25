import About from "../About/About";
import Header from "../Header/Header";
import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader";

const Main = ({ isLoading, isNotFound }) => {
  return (
    <main className="main">
      {!isLoading ? "" : <Preloader isLoading />}
      {!isNotFound ? "" : <NotFound />}
      <About />
    </main>
  );
};
export default Main;
