import { Project } from '@/types/project';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import NoImage from './NoImage';
import './ProjectModal.css';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 300);
  };

  if (!project) return null;

  return createPortal(
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="modal-header">
          <span className="modal-category">{project.category}</span>
          <h2 className="modal-title">{project.title}</h2>
          
          <div className="modal-meta">
            {project.client && (
                <div className="meta-item">
                    <span className="meta-label">Client</span>
                    <span className="meta-value">{project.client}</span>
                </div>
            )}
            {project.period && (
                <div className="meta-item">
                    <span className="meta-label">Period</span>
                    <span className="meta-value">{project.period}</span>
                </div>
            )}
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-image-placeholder" style={{ 
              background: 'none',
              border: 'none'
          }}>
             {project.image ? (
                <img 
                    src={project.image} 
                    alt={project.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 1
                    }} 
                />
             ) : (
                <NoImage />
             )}
          </div>
          
          <div className="modal-details">
            <div className="detail-section">
              <h3>프로젝트 개요</h3>
              <p className="modal-description">{project.overview || project.description}</p>
            </div>
            
            {project.stack && project.stack.length > 0 && (
                <div className="detail-section">
                <h3>사용 기술</h3>
                <div className="tech-tags">
                    {project.stack.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>
                </div>
            )}
          </div>
        </div>

        <div className="modal-footer">
          <button className="primary-btn full-width" onClick={handleClose}>닫기</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
