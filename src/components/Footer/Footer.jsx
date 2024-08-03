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
          <div className="footer__link-group footer__link-group--main">
            <NavLink to="/" className="footer__link--home">
              Home
            </NavLink>
            <li className="footer__link-item">
              <a
                className="footer__link footer__link--tripleTen"
                href="https://tripleten.com/programs/main/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TripleTen
              </a>
            </li>
          </div>
          <div className="footer__link-group footer__link-group--social">
            <li className="footer__link-item footer__link-item--github">
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

            <li className="footer__link-item footer__link-item--facebook">
              <a
                className="footer__link footer__link--facebook"
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
          </div>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
