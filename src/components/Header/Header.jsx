import "./Header.css";
import SearchForm from "../SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";

const Header = ({ onSigninModal, isLoggedIn, page, onProfileLogout }) => {
  return (
    <header
      className={`header ${page === "saved-news" ? "header_saved-news" : ""}`}
    >
      <Navigation
        onSigninModal={onSigninModal}
        isLoggedIn={isLoggedIn}
        page={page}
        onProfileLogout={onProfileLogout}
      />
      {page === "main" && <SearchForm />}
    </header>
  );
};
export default Header;
