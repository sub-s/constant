import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 300); // Wait for animation
  };

  if (!project) return null;

  return createPortal(
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>&times;</button>
        
        <div className="modal-header">
          <span className="modal-category">{project.category}</span>
          <h2 className="modal-title">{project.title}</h2>
        </div>

        <div className="modal-body">
          <div className="modal-image-placeholder" style={{ background: project.color }}>
            {/* Future: <img src={project.image} alt={project.title} /> */}
          </div>
          
          <div className="modal-details">
            <div className="detail-section">
              <h3>프로젝트 개요</h3>
              <p>{project.description}</p>
            </div>
            
            {/* Added mock details for checking visual structure */}
            <div className="detail-section">
              <h3>주요 기능</h3>
              <ul>
                <li>직관적인 사용자 인터페이스 (UI)</li>
                <li>반응형 디자인 및 모바일 최적화</li>
                <li>고성능 렌더링 최적화</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>사용 기술</h3>
              <div className="tech-tags">
                <span>React</span>
                <span>Vite</span>
                <span>CSS Modules</span>
              </div>
            </div>
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
