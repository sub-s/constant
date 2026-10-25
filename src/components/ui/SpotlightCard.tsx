import type { ElementType, MouseEvent, ReactNode } from 'react';
import './ui.scss';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** 렌더링할 태그 (버튼/링크로도 사용 가능) */
  as?: ElementType;
  [key: string]: unknown;
}

/**
 * 마우스 위치를 따라 빛이 번지는 카드 (Aceternity / Magic UI 의 Spotlight Card 스타일)
 * - 마우스 좌표를 CSS 변수(--mx, --my)로 전달해 ::before 그라데이션이 따라가게 한다
 */
const SpotlightCard = ({ children, className = '', as: Tag = 'div', ...rest }: SpotlightCardProps) => {
  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <Tag className={`spotlight-card ${className}`} onMouseMove={handleMouseMove} {...rest}>
      {children}
    </Tag>
  );
};

export default SpotlightCard;
