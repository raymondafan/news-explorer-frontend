import "./Header.css";
import SearchForm from "../SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";

const Header = ({
  onSigninModal,
  isLoggedIn,
  page,
  onProfileLogout,
  onSearch,
  onToggleMenu,
  onCloseMenu,
  isMenuOpen,
  isModalOpen,
}) => {
  return (
    <header
      className={`header ${page === "saved-news" ? "header_saved-news" : ""}`}
    >
      <Navigation
        onSigninModal={onSigninModal}
        isLoggedIn={isLoggedIn}
        page={page}
        onProfileLogout={onProfileLogout}
        onToggleMenu={onToggleMenu}
        onCloseMenu={onCloseMenu}
        isMenuOpen={isMenuOpen}
        isModalOpen={isModalOpen}
      />
      {page === "main" && <SearchForm onSearch={onSearch} />}
    </header>
  );
};
export default Header;
