import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Hero from '@/components/Hero/Hero';
import Navbar from '@/components/Layout/Navbar';
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
    </div>
  );
}

export default App;
