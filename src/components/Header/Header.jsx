import { NavLink } from "react-router-dom";
import "./Header.css";
import unionIcon from "../../assets/Union.svg";
import SearchForm from "../SearchForm/SearchForm";

const Header = ({ onSigninModal, isLoggedIn }) => {
  return (
    <header className="header">
      <div className="header__nav-bar">
        <div className="header__logo">NewsExplorer</div>
        <div className="header__user-container">
          <NavLink to="/" className="header__button-home">
            Home
          </NavLink>
          {!isLoggedIn ? (
            <button
              className="header__button-signin"
              type="text"
              onClick={onSigninModal}
            >
              Sign in
            </button>
          ) : (
            <div className="header__signin-container">
              <NavLink to="/articles" className="header__saved-articles">
                Saved articles
              </NavLink>
              <button className="header__profile">
                Raymond
                <img
                  src={unionIcon}
                  alt="union"
                  className="header__union-icon"
                />
              </button>
            </div>
          )}
        </div>
      </div>
      <SearchForm />
    </header>
  );
};
export default Header;
