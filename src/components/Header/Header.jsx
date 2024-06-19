import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
const Header = ({ onSigninModal }) => {
  return (
    <header className="header">
      <div className="header__nav-bar">
        <div className="header__logo">NewsExplorer</div>
        <div className="header__user-container">
          <button className="header__button-home">Home</button>
          <button
            className="header__button-signin"
            type="text"
            onClick={onSigninModal}
          >
            Sign in
          </button>
        </div>
      </div>
      <SearchForm />
    </header>
  );
};
export default Header;
