import { Project } from '@/types/project';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import NoImage from './NoImage';
import './ProjectModal.scss';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

/** 프로젝트 상세 모달 — ESC/바깥 클릭으로 닫히고, 열려 있는 동안 본문 스크롤을 잠근다 */
const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // 마운트 시 열림 애니메이션 시작 + 본문 스크롤 잠금 + ESC 로 닫기
  useEffect(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && handleClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** 닫힘 애니메이션(300ms) 후 부모에 닫기 알림 */
  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 300);
  };

  if (!project) return null;

  return createPortal(
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={handleClose}>
      <div className="modal-content" role="dialog" aria-modal="true" aria-label={project.title} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose} aria-label="Close modal">
          <X size={22} aria-hidden="true" />
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
          <div className="modal-image-placeholder">
             {project.image ? (
                <img src={project.image} alt={`${project.title} 화면`} />
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
