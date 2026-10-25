import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import type { MouseEvent, ReactNode } from 'react';
import './ui.scss';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * 마우스 위치에 따라 3D로 기울어지는 카드 (Aceternity 3D Card 스타일)
 * - 터치 기기는 마우스 이벤트가 없으므로 자연스럽게 정적 카드로 동작한다
 */
const TiltCard = ({ children, className = '' }: TiltCardProps) => {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 200, damping: 20 });
  const sy = useSpring(py, { stiffness: 200, damping: 20 });
  const rotateY = useTransform(sx, [0, 1], [-7, 7]);
  const rotateX = useTransform(sy, [0, 1], [7, -7]);

  /** 카드 내부 상대 좌표(0~1)를 갱신 */
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  /** 마우스가 떠나면 중앙(기울기 0)으로 복귀 */
  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      className={`tilt-card ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
