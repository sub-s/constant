
import noImage from '@/assets/no-image.svg';
import { projects } from '@/data/projects';
import { Project } from '@/types/project';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';
import './Portfolio_loadmore.css';
import ProjectModal from './ProjectModal';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  const gridProjects = projects.slice(0, 6);

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
              <div className="project-image">
                <img 
                    src={project.image || noImage} 
                    alt={project.title} 
                    className={!project.image ? 'no-image' : ''}
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: project.image ? 'cover' : 'contain',
                        backgroundColor: project.image ? 'transparent' : '#1a1a1a',
                        padding: project.image ? 0 : '2rem'
                    }}
                />
                <div className="project-overlay">
                  <span>케이스 스터디 보기</span>
                  {/* <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.8 }}>Size: 1920 x 1080 (16:9)</span> */}
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
        
        {/* View All Button */}
        <div className="view-all-container" style={{ textAlign: 'center', marginTop: '60px' }}>
            <button 
                className="primary-btn" 
                onClick={() => navigate('/portfolio')}
                style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}
            >
                View All Projects ({projects.length})
            </button>
        </div>
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
