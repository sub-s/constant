import Navbar from '@/components/Layout/Navbar';
import ScrollToTop from '@/components/Layout/ScrollToTop';
import AIRequestPage from '@/pages/AIRequestPage';
import Home from '@/pages/Home';
import LoginPage from '@/pages/LoginPage';
import PortfolioArchive from '@/pages/PortfolioArchive';
import SignupPage from '@/pages/SignupPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioArchive />} />
        <Route path="/ai-request" element={<AIRequestPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <ScrollToTop />
    </div>
  );
}

export default App;
