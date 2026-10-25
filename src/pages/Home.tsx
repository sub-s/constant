import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Faq from '@/components/Faq/Faq';
import Hero from '@/components/Hero/Hero';
import Portfolio from '@/components/Portfolio/Portfolio';
import Services from '@/components/Services/Services';

/** 메인 랜딩 페이지 — 섹션 순서: Hero → About → Services → Works → FAQ → Contact */
const Home = () => {
  return (
    <main id="main">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Faq />
      <Contact />
    </main>
  );
};

export default Home;
