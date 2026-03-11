import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-wave wave-1"></div>
        <div className="hero-wave wave-2"></div>
        <div className="hero-wave wave-3"></div>
        <div className="glow"></div>
      </div>
      <div className="container hero-content">
        <h1 className="hero-title">
          <span className="sr-only">웹 퍼블리싱 & 프론트엔드 스튜디오 | </span>
          Consistent Value<br />
          <span className="text-secondary">In a Changing World.</span>
        </h1>
        <p className="hero-subtitle">
          Constant는 변하지 않는 가치를 만드는 웹 프론트엔드 개발 스튜디오입니다.
          견고하고 접근성 높은, 최적화된 웹 인터페이스를 구축합니다.
        </p>
        <div className="hero-actions">
          <button className="primary-btn" onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}>포트폴리오 보기</button>
          <button className="secondary-btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>프로젝트 문의</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
