import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react';
import { useEffect, useMemo } from 'react';

interface RidgeConfig {
  /** 능선 모양을 바꾸는 시드 값 */
  seed: number;
  /** 능선의 기준 높이 (viewBox 400 기준, 클수록 아래) */
  base: number;
  /** 능선 기복 크기 */
  amp: number;
  /** 기복 빈도 */
  freq: number;
  /** 스크롤에 따라 아래로 밀리는 비율 (뒤쪽일수록 크다 = 멀리 있는 느낌) */
  scrollSpeed: number;
  /** 마우스에 따라 좌우로 움직이는 거리(px) */
  mouseShift: number;
}

/** 뒤 → 앞 순서의 능선 4겹. 뒤쪽은 느리게, 앞쪽은 빠르게 움직여 깊이감을 만든다 */
const RIDGES: RidgeConfig[] = [
  { seed: 1.3, base: 150, amp: 60, freq: 0.0042, scrollSpeed: 0.34, mouseShift: 10 },
  { seed: 4.1, base: 210, amp: 55, freq: 0.0055, scrollSpeed: 0.24, mouseShift: 22 },
  { seed: 7.7, base: 275, amp: 45, freq: 0.0068, scrollSpeed: 0.15, mouseShift: 38 },
  { seed: 2.2, base: 340, amp: 32, freq: 0.0085, scrollSpeed: 0.06, mouseShift: 60 },
];

/** 사인파 여러 개를 합쳐 능선 SVG path 문자열을 만든다 (랜덤이 아니라 시드 기반이라 항상 같은 모양) */
const buildRidgePath = ({ seed, base, amp, freq }: RidgeConfig) => {
  const width = 1600;
  const height = 400;
  const y = (x: number) =>
    base +
    amp *
      (Math.sin(x * freq + seed) * 0.6 +
        Math.sin(x * freq * 2.3 + seed * 1.7) * 0.3 +
        Math.sin(x * freq * 5.1 + seed * 2.9) * 0.1);

  let d = `M0 ${height} L0 ${y(0).toFixed(1)}`;
  for (let x = 16; x <= width; x += 16) d += ` L${x} ${y(x).toFixed(1)}`;
  return `${d} L${width} ${height} Z`;
};

/**
 * 히어로 시네마틱 패럴랙스 배경 (ThreeUI 의 레이어드 능선 / Aceternity 의 Parallax Hero 참고)
 * - 스크롤: 레이어별로 다른 속도로 아래로 밀려 깊이감 생성
 * - 마우스: 앞쪽 레이어일수록 크게 좌우 이동
 * - 빛줄기(beam)는 CSS 애니메이션으로 천천히 흔들린다
 */
const HeroParallax = () => {
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20, mass: 0.6 });

  // 포인터 위치를 -1 ~ 1 로 정규화해 모든 레이어가 공유
  useEffect(() => {
    const onMove = (e: PointerEvent) => mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [mouseX]);

  const paths = useMemo(() => RIDGES.map(buildRidgePath), []);

  return (
    <div className="hero-parallax" aria-hidden="true">
      <div className="hero-sun" />
      <div className="hero-beam beam-a" />
      <div className="hero-beam beam-b" />

      {RIDGES.map((ridge, i) => (
        <RidgeLayer key={ridge.seed} index={i} ridge={ridge} path={paths[i]} scrollY={scrollY} smoothX={smoothX} />
      ))}
    </div>
  );
};

interface RidgeLayerProps {
  index: number;
  ridge: RidgeConfig;
  path: string;
  scrollY: ReturnType<typeof useScroll>['scrollY'];
  smoothX: ReturnType<typeof useSpring>;
}

/** 능선 한 겹 — 스크롤(y)과 마우스(x) 값을 각자의 계수로 변환해 적용 */
const RidgeLayer = ({ index, ridge, path, scrollY, smoothX }: RidgeLayerProps) => {
  const y = useTransform(scrollY, [0, 900], [0, 900 * ridge.scrollSpeed]);
  const x = useTransform(smoothX, [-1, 1], [-ridge.mouseShift, ridge.mouseShift]);

  return (
    <motion.svg
      className={`ridge ridge-${index + 1}`}
      viewBox="0 0 1600 400"
      preserveAspectRatio="none"
      style={{ x, y }}
    >
      <path d={path} />
    </motion.svg>
  );
};

export default HeroParallax;
