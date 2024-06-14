import "./Navigation.css";
const Navigation = ({ onSigninModal }) => {
  return (
    <nav className="nav">
      <div className="nav__logo">NewsExplorer</div>
      <div className="nav__user-container">
        <button className="nav__button-home">Home</button>

        <button
          className="nav__button-signin"
          type="text"
          onClick={onSigninModal}
        >
          Sign in
        </button>
      </div>
    </nav>
  );
};
export default Navigation;
