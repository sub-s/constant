import logoSymbol from '@/assets/logo-symbol.svg';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import './Navbar_theme.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle cross-page scrolling
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
        const sectionId = location.state.scrollTo;
        const element = document.getElementById(sectionId);
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 100); // Small delay to ensure render
        }
        // Clear state to avoid scrolling on subsequent refreshes (optional but good practice)
        window.history.replaceState({}, document.title);
    }
  }, [location]);

  const [theme, setTheme] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (!prefersDark) {
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);

    if (location.pathname === '/') {
        // If on home page, just scroll
        scrollToSection(id);
    } else {
        // If on subpage, navigate home with state
        navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <div className="logo-container">
          <img src={logoSymbol} alt="Constant" className="logo-symbol" />
          {/* <span className="logo-text">Constant</span> */}
        </div>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? (
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          ) : (
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          )}
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><button onClick={() => handleLinkClick('home')}>홈</button></li>
          <li><button onClick={() => handleLinkClick('about')}>소개</button></li>
          <li><button onClick={() => handleLinkClick('services')}>서비스</button></li>
          <li><button onClick={() => handleLinkClick('portfolio')}>포트폴리오</button></li>
          <li><button className="cta-button" onClick={() => handleLinkClick('contact')}>문의하기</button></li>
          <li>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
