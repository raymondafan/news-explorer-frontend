import logoImage from "../../assets/whitelogo.svg";
import "./Header.css";
const Header = ({}) => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logoImage} alt="logo" />
      </div>
      <div className="header__user-container">
        <button className="header__button-home">Home</button>

        <button className="header__button-signin" type="text">
          Sign in
        </button>
      </div>
    </header>
  );
};
export default Header;
