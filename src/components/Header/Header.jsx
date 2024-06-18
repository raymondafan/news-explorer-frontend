import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
const Header = ({ onSigninModal }) => {
  return (
    <header className="header">
      <Navigation onSigninModal={onSigninModal} />
      <SearchForm />
    </header>
  );
};
export default Header;
