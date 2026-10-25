import { animate, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  to: number;
  /** 애니메이션 시간(초) */
  duration?: number;
}

/** 화면에 보이면 0부터 목표 숫자까지 올라가는 카운터 (React Bits 스타일) */
const CountUp = ({ to, duration = 1.8 }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return <span ref={ref}>{value}</span>;
};

export default CountUp;
