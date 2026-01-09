import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './AdvantageModal.css';

interface Message {
  title: string;
  description: string;
  details: string[];
}

interface AdvantageModalProps {
  item: Message;
  onClose: () => void;
}

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
      <div className="advantage-modal-content" onClick={e => e.stopPropagation()}>
        <button className="advantage-modal-close" onClick={onClose}>&times;</button>
        
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
