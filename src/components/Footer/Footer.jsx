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
          <li className="footer__link--tripleTen">
            <a
              className="footer__link--tripleTen"
              href="https://tripleten.com/programs/main/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TripleTen
            </a>
          </li>
          <li className="footer__link--github">
            <a
              href="https://github.com/raymondafan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubLink}
                alt="Github Logo"
                className="footer__link-icon"
              />
            </a>
          </li>
          <li className="footer__link--facebook">
            <a
              className="footer__link--facebook"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookLink}
                alt="Facebook Logo"
                className="footer__link-icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
