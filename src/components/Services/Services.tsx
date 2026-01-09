import './Services.css';

const services = [
  {
    title: 'Web Publishing',
    description: '구조와 스타일의 완벽한 조화. 시맨틱 마크업, 웹 접근성 준수, 그리고 반응형 레이아웃을 구현합니다.',
    icon: '🏗️'
  },
  {
    title: 'Frontend Development',
    description: 'React 기반의 동적인 사용자 경험. 확장 가능한 컴포넌트 아키텍처와 성능 최적화를 제공합니다.',
    icon: '⚡'
  },
  {
    title: 'Planning & Consulting',
    description: '초기 기획부터 기술적 타당성 검토까지. 성공적인 프로젝트를 위한 로드맵을 함께 그립니다.',
    icon: '🎯'
  }
];

const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
