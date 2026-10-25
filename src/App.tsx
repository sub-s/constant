import Navbar from '@/components/Layout/Navbar';
import ScrollToTop from '@/components/Layout/ScrollToTop';
import Home from '@/pages/Home';
import PortfolioArchive from '@/pages/PortfolioArchive';
import { Navigate, Route, Routes } from 'react-router-dom';

/** 앱 라우팅 루트 — 공통 네비게이션/맨 위로 버튼 + 페이지 라우트 (홈, 전체 프로젝트) */
function App() {
  return (
    <div className="app">
      <a href="#main" className="skip-link">본문 바로가기</a>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioArchive />} />
        {/* 존재하지 않는 경로는 홈으로 이동 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ScrollToTop />
    </div>
  );
}

export default App;
