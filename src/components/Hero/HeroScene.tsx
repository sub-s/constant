import { RoundedBox } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useReducedMotion } from 'motion/react';
import { useThemeStore } from '@/stores/useThemeStore';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { Group, Points } from 'three';

/** 로고 심볼(레드/오렌지/옐로우 3단 바)을 3D로 옮긴 막대 설정 */
const BARS = [
  { y: 1.1, x: 0.18, color: '#ff3d5a', speed: 1.1 },
  { y: 0, x: -0.18, color: '#ff8a3d', speed: 1.4 },
  { y: -1.1, x: 0.18, color: '#ffc83d', speed: 0.9 },
];

/** 시드 기반 의사 난수 (렌더마다 별 위치가 바뀌지 않도록) */
const seededRandom = (seed: number) => {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
};

interface StarfieldProps {
  count: number;
  /** 별이 퍼지는 z 깊이 범위 */
  depth: number;
  size: number;
  /** 마우스에 따른 이동량 (깊을수록 작게 → 시차) */
  parallax: number;
  seed: number;
  /** 테마별 별 색상 (다크: 밝은 크림 / 라이트: 따뜻한 갈색) */
  color: string;
  opacity: number;
}

/**
 * 별가루 층 — 깊이별로 서로 다른 시차로 움직인다 (ThreeUI 의 입자 배경 참고)
 * 가까운 층은 크고 많이 움직이고, 먼 층은 작고 거의 안 움직인다.
 */
const Starfield = ({ count, depth, size, parallax, seed, color, opacity }: StarfieldProps) => {
  const ref = useRef<Points>(null);
  const positions = useMemo(() => {
    const rand = seededRandom(seed);
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (rand() - 0.5) * 34;
      arr[i * 3 + 1] = (rand() - 0.5) * 20;
      arr[i * 3 + 2] = -rand() * depth - 2;
    }
    return arr;
  }, [count, depth, seed]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    const ease = Math.min(delta * 2, 1);
    ref.current.rotation.z += delta * 0.004 * parallax;
    ref.current.position.x += (state.pointer.x * parallax - ref.current.position.x) * ease;
    ref.current.position.y += (state.pointer.y * parallax * 0.6 - ref.current.position.y) * ease;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={size} color={color} sizeAttenuation transparent opacity={opacity} depthWrite={false} />
    </points>
  );
};

/**
 * 3단 막대 오브제
 * - 데스크톱: 오른쪽 칸에 배치 / 모바일: 중앙 상단
 * - 포인터 방향으로 회전하고, 스크롤하면 카메라가 물러나듯 작아지며 위로 올라간다 (스크롤 기반 3D)
 */
const LogoBars = ({ animated }: { animated: boolean }) => {
  const group = useRef<Group>(null);
  const bars = useRef<(Group | null)[]>([]);
  const viewport = useThree((state) => state.viewport);

  // 가로가 충분하면 오른쪽, 좁으면(모바일) 중앙 위쪽
  const isWide = viewport.width / viewport.height > 1.1;
  const baseX = isWide ? viewport.width * 0.21 : 0;
  const baseY = isWide ? 0.25 : viewport.height * 0.22;
  // 텍스트·정보 라인을 가리지 않도록 오브제를 작게 (모바일은 더 작게)
  const baseScale = isWide ? 0.58 : 0.5;

  useFrame((state, delta) => {
    if (!group.current || !animated) return;
    const t = state.clock.elapsedTime;
    const ease = Math.min(delta * 3, 1);
    const progress = Math.min(window.scrollY / window.innerHeight, 1);

    // 포인터 기반 회전 (살짝 흔들리는 기본 회전 포함)
    const targetY = state.pointer.x * 0.5 + Math.sin(t * 0.4) * 0.14 - 0.3 + progress * 0.9;
    const targetX = -state.pointer.y * 0.3 + 0.1 - progress * 0.3;
    group.current.rotation.y += (targetY - group.current.rotation.y) * ease;
    group.current.rotation.x += (targetX - group.current.rotation.x) * ease;

    // 스크롤 진행에 따라 멀어지는 연출
    group.current.scale.setScalar(baseScale * (1 - progress * 0.4));
    group.current.position.set(baseX, baseY + progress * 1.4, -progress * 2);

    // 막대별 부유 모션
    bars.current.forEach((bar, i) => {
      if (bar) bar.position.y = BARS[i].y + Math.sin(t * BARS[i].speed + i) * 0.08;
    });
  });

  // 모바일(세로 화면)에서는 막대가 텍스트와 겹쳐 가독성을 해치므로 그리지 않고 별가루·능선만 남긴다
  if (!isWide) return null;

  return (
    <group ref={group} position={[baseX, baseY, 0]} rotation={[0.1, -0.3, 0]}>
      {BARS.map((bar, i) => (
        <group key={bar.color} ref={(el) => (bars.current[i] = el)} position={[bar.x, bar.y, 0]}>
          <RoundedBox args={[3.4, 0.84, 0.84]} radius={0.4} smoothness={6}>
            <meshPhysicalMaterial
              color={bar.color}
              roughness={0.28}
              metalness={0.1}
              clearcoat={1}
              clearcoatRoughness={0.18}
              emissive={bar.color}
              emissiveIntensity={0.22}
            />
          </RoundedBox>
        </group>
      ))}
    </group>
  );
};

/**
 * 히어로 전체 배경을 덮는 3D 씬 (별가루 3겹 + 로고 막대)
 * - 마우스 좌표는 페이지 전체(document.body) 기준으로 읽어 텍스트 위에서도 시차가 유지된다
 * - 화면 밖이면 렌더 루프를 멈추고, 동작 줄이기 설정이면 정지 프레임만 그린다
 */
const HeroScene = () => {
  const reduced = useReducedMotion();
  const theme = useThemeStore((state) => state.theme);
  const starColor = theme === 'dark' ? '#ffeee1' : '#8a5a45';
  const starOpacity = theme === 'dark' ? 0.75 : 0.5;
  const wrapRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  // 뷰포트 가시성에 따라 렌더링 on/off
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hero-scene" ref={wrapRef} aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 9.5], fov: 32 }}
        gl={{ antialias: true, alpha: true }}
        frameloop={reduced ? 'demand' : visible ? 'always' : 'never'}
        eventSource={document.body}
        eventPrefix="client"
      >
        <hemisphereLight args={['#ffffff', '#3a1020', 1.1]} />
        <directionalLight position={[4, 5, 5]} intensity={2.4} />
        <pointLight position={[-5, -2, 3]} intensity={40} color="#ff3d5a" />
        <pointLight position={[5, -3, 2]} intensity={28} color="#ffc83d" />

        {/* 깊이별 별가루: 먼 층 → 가까운 층 */}
        <Starfield count={500} depth={26} size={0.028} parallax={0.15} seed={11} color={starColor} opacity={starOpacity} />
        <Starfield count={260} depth={16} size={0.045} parallax={0.45} seed={29} color={starColor} opacity={starOpacity} />
        <Starfield count={90} depth={8} size={0.07} parallax={0.9} seed={53} color={starColor} opacity={starOpacity} />

        <LogoBars animated={!reduced} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
