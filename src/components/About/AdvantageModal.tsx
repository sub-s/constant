import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import './AdvantageModal.scss';

interface Message {
  title: string;
  description: string;
  details: string[];
}

interface AdvantageModalProps {
  item: Message;
  onClose: () => void;
}

/** 강점 상세 모달 — ESC 로 닫기, 열려 있는 동안 본문 스크롤 잠금 */
const AdvantageModal: React.FC<AdvantageModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return createPortal(
    <div className="advantage-modal-overlay" onClick={onClose}>
      <div className="advantage-modal-content" role="dialog" aria-modal="true" aria-label={item.title} onClick={e => e.stopPropagation()}>
        <button className="advantage-modal-close" onClick={onClose} aria-label="닫기"><X size={22} aria-hidden="true" /></button>
        
        <h3 className="advantage-modal-title">{item.title}</h3>
        <p className="advantage-modal-description">{item.description}</p>
        
        <ul className="advantage-modal-list">
          {item.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>,
    document.body
  );
};

export default AdvantageModal;
