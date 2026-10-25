import { ArrowUpRight } from 'lucide-react';
import './Footer.scss';

/** 사이트 하단 푸터 — 저작권(개인/사업자 브랜드) + 외부 링크 */
const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
      <div className="social-links">
        <a href="https://github.com/sub-s" target="_blank" rel="noopener noreferrer">
          GitHub <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
