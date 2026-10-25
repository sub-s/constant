import { motion, useMotionValue, useSpring } from 'motion/react';
import type { MouseEvent, ReactNode } from 'react';
import './ui.scss';

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  /** primary: 채움 / ghost: 글래스 */
  variant?: 'primary' | 'ghost';
  className?: string;
}

/**
 * 커서에 끌려오듯 움직이는 마그네틱 버튼 (Hover.dev 스타일)
 * - 버튼 중심과 커서 거리의 일부만큼 이동하고, 스프링으로 부드럽게 복귀한다
 */
const MagneticButton = ({ children, onClick, variant = 'primary', className = '' }: MagneticButtonProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  /** 커서와 버튼 중심의 차이를 계산해 이동 값으로 반영 */
  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.28);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.28);
  };

  /** 커서가 벗어나면 원위치 */
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      className={`magnetic-btn ${variant} ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
    >
      <span className="magnetic-label">{children}</span>
    </motion.button>
  );
};

export default MagneticButton;
