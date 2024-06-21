import About from "../About/About";
import Header from "../Header/Header";
import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

const Main = ({ isLoading }) => {
  return (
    <main className="main">
      {!isLoading ? "" : <Preloader isLoading />}
      <NotFound />
      <About />
    </main>
  );
};
export default Main;
