import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Hero from '@/components/Hero/Hero';
import Navbar from '@/components/Layout/Navbar';
import ScrollToTop from '@/components/Layout/ScrollToTop';
import Portfolio from '@/components/Portfolio/Portfolio';
import Services from '@/components/Services/Services';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
