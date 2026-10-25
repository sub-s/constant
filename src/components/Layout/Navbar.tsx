import logoSymbol from '@/assets/logo-symbol.svg';
import ScrollProgress from '@/components/ui/ScrollProgress';
import { useThemeStore } from '@/stores/useThemeStore';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.scss';

/** 홈 화면 안에서 스크롤 이동하는 섹션 메뉴 */
const SECTION_LINKS = [
  { id: 'about', label: '소개' },
  { id: 'services', label: '전문 영역' },
  { id: 'portfolio', label: '프로젝트' },
  { id: 'faq', label: 'FAQ' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const { theme, toggleTheme } = useThemeStore();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  // 스크롤 위치에 따라 네비게이션 배경(글래스) 활성화
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 다른 페이지에서 홈으로 넘어온 뒤 지정 섹션으로 스크롤
  useEffect(() => {
    const sectionId = location.state?.scrollTo;
    if (!sectionId) return;
    const timer = setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // 렌더 완료 대기
    // 새로고침 시 반복 스크롤 방지를 위해 state 제거
    window.history.replaceState({}, document.title);
    return () => clearTimeout(timer);
  }, [location]);

  // 홈에서 현재 화면 중앙에 걸린 섹션을 메뉴에 강조 표시
  useEffect(() => {
    if (!isHome) {
      setActiveId('');
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    [...SECTION_LINKS.map((l) => l.id), 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  // 모바일 메뉴가 열린 동안 본문 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  /** 메뉴 클릭 처리: 섹션으로 스크롤 (홈이 아니면 홈으로 이동 후 스크롤) */
  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);

    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <>
      <ScrollProgress />
      <nav aria-label="주요 메뉴" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-content">
          <button className="nav-logo" onClick={() => handleLinkClick('home')} aria-label="포트폴리오 홈">
            <img src={logoSymbol} alt="" className="logo-symbol" />
            <span className="logo-word">Portfolio</span>
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label="메뉴 열기/닫기"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            {SECTION_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  className={activeId === link.id ? 'current' : ''}
                  onClick={() => handleLinkClick(link.id)}
                  aria-current={activeId === link.id ? 'true' : undefined}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button className="cta-button" onClick={() => handleLinkClick('contact')}>
                연락하기
              </button>
            </li>
            <li>
              <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
