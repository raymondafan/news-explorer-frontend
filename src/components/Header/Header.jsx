import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
const Header = ({}) => {
  return (
    <header className="header">
      <Navigation />
      <SearchForm />
    </header>
  );
};
export default Header;
