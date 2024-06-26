import "./Navigation.css";
import unionIcon from "../../assets/Union.svg";
import unionIconBlack from "../../assets/unionIconBlack.svg";
import { NavLink } from "react-router-dom";
const Navigation = ({ onSigninModal, isLoggedIn, page }) => {
  return (
    <nav className="nav">
      <div className="nav__header">
        <NavLink to="/" className="nav__logo">
          NewsExplorer
        </NavLink>

        <div className="nav__user-container">
          <NavLink to="/" className="nav__button-home">
            Home
          </NavLink>

          {!isLoggedIn ? (
            <button
              className="nav__button-signin"
              type="text"
              onClick={onSigninModal}
            >
              Sign in
            </button>
          ) : (
            <div className="nav__signin-container">
              <NavLink to="/saved-news" className="nav__saved-news">
                Saved articles
              </NavLink>
              <button
                className={`nav__profile ${
                  page === "saved-news" ? "nav__profile_saved-news" : ""
                }`}
              >
                Raymond
                <img
                  src={page === "saved-news" ? unionIconBlack : unionIcon}
                  alt="union"
                  className="nav__union-icon"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
