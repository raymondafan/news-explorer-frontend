import "./Navigation.css";
const Navigation = ({}) => {
  return (
    <nav className="nav">
      <div className="nav__logo">NewsExplorer</div>
      <div className="nav__user-container">
        <button className="nav__button-home">Home</button>

        <button className="nav__button-signin" type="text">
          Sign in
        </button>
      </div>
    </nav>
  );
};
export default Navigation;
