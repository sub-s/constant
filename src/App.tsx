import Navbar from '@/components/Layout/Navbar';
import ScrollToTop from '@/components/Layout/ScrollToTop';
import AIRequestPage from '@/pages/AIRequestPage';
import Home from '@/pages/Home';
import PortfolioArchive from '@/pages/PortfolioArchive';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioArchive />} />
        <Route path="/ai-request" element={<AIRequestPage />} />
      </Routes>
      <ScrollToTop />
    </div>
  );
}

export default App;
