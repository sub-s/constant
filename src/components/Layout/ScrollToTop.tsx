import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import './ScrollToTop.scss';

/** 일정 이상 스크롤하면 나타나는 맨 위로 이동 버튼 */
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 위치(300px 초과)에 따라 버튼 노출 여부 결정
  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  /** 페이지 최상단으로 부드럽게 이동 */
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="맨 위로 이동"
    >
      <ArrowUp size={18} />
    </button>
  );
};

export default ScrollToTop;
