import { Project } from '@/types/project';
import { useState } from 'react';
import './Portfolio.css';
import './Portfolio_loadmore.css';
import ProjectModal from './ProjectModal';

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: '프론트엔드 개발',
    description: 'Next.js와 Shopify로 구축한 헤드리스 커머스 솔루션.',
    color: '#1a1a1a'
  },
  {
    id: 2,
    title: 'Corporate Dashboard',
    category: '웹 퍼블리싱',
    description: '핀테크 스타트업을 위한 웹 접근성 준수 어드민 패널.',
    color: '#1a1a1a'
  },
  {
    id: 3,
    title: 'Startup Landing Page',
    category: '디자인 & 개발',
    description: '3D 인터랙션이 포함된 고효율 랜딩 페이지.',
    color: '#1a1a1a'
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    category: 'React Native',
    description: '크로스 플랫폼 모바일 뱅킹 애플리케이션.',
    color: '#1a1a1a'
  },
  {
    id: 5,
    title: 'Real Estate Platform',
    category: '풀스택 개발',
    description: '지도 기반 매물 검색 및 예약 시스템.',
    color: '#1a1a1a'
  },
  {
    id: 6,
    title: 'Interactive Portfolio',
    category: 'Creative Dev',
    description: 'WebGL을 활용한 인터랙티브 경험.',
    color: '#1a1a1a'
  },
  {
    id: 7,
    title: 'Healthcare App',
    category: 'Mobile App',
    description: '환자 데이터 관리 및 예약 시스템.',
    color: '#1a1a1a'
  },
  {
    id: 8,
    title: 'Fashion Brand Identity',
    category: 'Branding',
    description: '현대적인 패션 브랜드를 위한 아이덴티티 디자인.',
    color: '#1a1a1a'
  },
  {
    id: 9,
    title: 'Social Media Campaign',
    category: 'Marketing',
    description: 'MZ세대를 타겟으로 한 소셜 미디어 캠페인.',
    color: '#1a1a1a'
  },
  {
    id: 10,
    title: 'Educational Platform',
    category: 'Web App',
    description: '온라인 학습 및 평가 관리 시스템.',
    color: '#1a1a1a'
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const gridProjects = projects.slice(0, 6);
  const carouselProjects = projects.slice(6);

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <h2 className="section-title">Selected Works</h2>
        
        {/* Initial 6 Items Grid */}
        <div className="project-grid">
          {gridProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image" style={{ background: project.color }}>
                {/* Placeholder for project image */}
                <div className="project-overlay">
                  <span>케이스 스터디 보기</span>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Remaining Items Carousel */}
        {carouselProjects.length > 0 && (
          <div className="carousel-section">
            <h3 className="carousel-title">More Projects</h3>
            <div className="carousel-container">
              <div className="carousel-track">
                {carouselProjects.map((project) => (
                  <div
                    key={project.id}
                    className="carousel-item"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="project-card compact">
                      <div className="project-image" style={{ background: project.color }}>
                         <div className="project-overlay">
                          <span>보기</span>
                        </div>
                      </div>
                      <div className="project-info">
                        <span className="project-category">{project.category}</span>
                        <h3 className="project-title">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;
