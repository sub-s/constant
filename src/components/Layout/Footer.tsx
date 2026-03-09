
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/sub-s">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
      </div>
      <p className="copyright">
        &copy; {new Date().getFullYear()} Constant. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
