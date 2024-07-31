import "./Navigation.css";
import unionIcon from "../../assets/Union.svg";
import unionIconBlack from "../../assets/unionIconBlack.svg";
import hamburgerMenu from "../../assets/menu.svg";
import hamburgerMenuBlack from "../../assets/menublack.svg";
import closeButton from "../../assets/closebutton.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const Navigation = ({
  onSigninModal,
  isLoggedIn,
  page,
  onProfileLogout,
  onToggleMenu,
  onCloseMenu,
  isMenuOpen,
  isModalOpen,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 610);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 610);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleEscKey = (e) => {
    if (e.key === "Escape") {
      return onCloseMenu();
    }
  };
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains("modal")) {
        return onCloseMenu();
      }
    };
    if (!isModalOpen) {
      return;
    }
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  });

  return (
    <nav className="nav">
      <div
        className={`nav__header ${
          page === "saved-news" ? "nav__profile_saved-news" : ""
        } ${isMenuOpen && isSmallScreen ? "nav__header--menu-open" : ""}`}
      >
        <NavLink
          to="/"
          className={`${isModalOpen ? "nav__header--modal-open" : "nav__logo"}`}
        >
          NewsExplorer
        </NavLink>

        {isSmallScreen && !isMenuOpen ? (
          <img
            className={`${
              isModalOpen
                ? "nav__button-mobile__modal-menu"
                : "nav__button-mobile__menu"
            }`}
            onClick={onToggleMenu}
            src={
              page === "saved-news" && isLoggedIn
                ? hamburgerMenuBlack
                : hamburgerMenu
            }
          />
        ) : isSmallScreen && isMenuOpen ? (
          <img
            className="nav__button-mobile__menu-close"
            onClick={onToggleMenu}
            src={closeButton}
          />
        ) : (
          ""
        )}

        {!isSmallScreen && (
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
                  onClick={onProfileLogout}
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
        )}
      </div>
      {isMenuOpen && isSmallScreen && (
        <div className="nav__mobile-menu">
          <NavLink to="/" className="nav__button-home" onClick={onCloseMenu}>
            Home
          </NavLink>
          {!isLoggedIn ? (
            <div className="nav__button-signin__container">
              <button
                className="nav__button-signin"
                type="text"
                onClick={onSigninModal}
              >
                Sign in
              </button>
            </div>
          ) : (
            <div className="nav__signin-container">
              <NavLink
                to="/saved-news"
                className="nav__saved-news"
                onClick={onCloseMenu}
              >
                Saved articles
              </NavLink>
              <button
                onClick={onProfileLogout}
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
      )}
    </nav>
  );
};
export default Navigation;
