import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** 등장 지연(초) — 여러 요소를 순차적으로 보여줄 때 사용 */
  delay?: number;
  /** 아래에서 올라오는 이동 거리(px) */
  y?: number;
}

/** 뷰포트에 들어오면 한 번만 페이드 + 상승하며 나타나는 래퍼 */
const Reveal = ({ children, className, delay = 0, y = 32 }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default Reveal;
