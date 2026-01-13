import Navbar from '@/components/Layout/Navbar';
import ScrollToTop from '@/components/Layout/ScrollToTop';
import Home from '@/pages/Home';
import PortfolioArchive from '@/pages/PortfolioArchive';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioArchive />} />
        </Routes>
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
