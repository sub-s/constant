
import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Hero from '@/components/Hero/Hero';
import Portfolio from '@/components/Portfolio/Portfolio';
import Services from '@/components/Services/Services';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
