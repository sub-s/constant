import '@/components/Portfolio/Portfolio.css';
import ProjectModal from '@/components/Portfolio/ProjectModal';
import { projects } from '@/data/projects';
import { Project } from '@/types/project';
import { useEffect, useState } from 'react';
import NoImage from '@/components/Portfolio/NoImage';

const PortfolioArchive = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio-archive-page" style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h1 className="section-title">All Projects</h1>
            <p style={{ color: 'var(--text-secondary)', marginTop: '10px' }}>
                Constant가 진행한 {projects.length}개의 프로젝트 아카이브입니다.
            </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                {project.image ? (
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover'
                        }}
                    />
                ) : (
                    <NoImage />
                )}
                <div className="project-overlay">
                  <span>자세히 보기</span>
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
      </div>

      <div style={{ padding: '60px 0', textAlign: 'center', borderTop: '1px solid var(--border-subtle)', marginTop: '60px' }}>
          <footer className="footer">
            <p className="copyright">
                &copy; {new Date().getFullYear()} Constant. All rights reserved.
            </p>
          </footer>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default PortfolioArchive;
