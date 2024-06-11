const Footer = ({}) => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Raymond Afan
        </p>
      </div>
    </footer>
  );
};
export default Footer;
