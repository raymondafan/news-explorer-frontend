import facebookLink from "../../assets/fb.svg";
import githubLink from "../../assets/github.svg";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = ({}) => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Supersite, Powered by News API
        </p>
        <ul className="footer__links">
          <NavLink to="/" className="footer__link-home">
            Home
          </NavLink>
          <li className="footer__link-tripleTen">TripleTen</li>
          <li className="footer__link-github">
            <img
              src={githubLink}
              alt="Github Logo"
              className="footer__link-icon"
            />
          </li>
          <li className="footer__link-facebook">
            <img
              src={facebookLink}
              alt="Facebook Logo"
              className="footer__link-icon"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
