import BlurText from '@/components/ui/BlurText';
import CountUp from '@/components/ui/CountUp';
import MagneticButton from '@/components/ui/MagneticButton';
import Marquee from '@/components/ui/Marquee';
import { projects } from '@/data/projects';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { lazy, Suspense } from 'react';
import HeroParallax from './HeroParallax';
import './Hero.scss';

// three.js 번들이 커서 히어로 3D 씬은 지연 로딩한다 (초기 텍스트 렌더를 막지 않음)
const HeroScene = lazy(() => import('./HeroScene'));

/** 마퀴에 노출할 참여 프로젝트 고객사 목록 (중복 제거) */
const clients = Array.from(new Set(projects.map((p) => p.client).filter(Boolean))) as string[];

/** 지정한 id 섹션으로 부드럽게 스크롤 */
const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const Hero = () => {
  // 스크롤하면 텍스트가 살짝 위로 밀리며 옅어진다 (배경보다 빠르게 움직여 깊이 차이 강조)
  const { scrollY } = useScroll();
  const copyY = useTransform(scrollY, [0, 600], [0, -70]);
  const copyOpacity = useTransform(scrollY, [0, 520], [1, 0.15]);

  return (
    <section className="hero" id="home">
      {/* 배경: 오로라 + 격자 + 3D 오브제 */}
      <div className="hero-bg" aria-hidden="true">
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        <div className="grid-lines" />
        <HeroParallax />
      </div>

      {/* 전체 배경을 덮는 3D 씬 (별가루 + 로고 막대) */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
      <div className="container hero-inner">
        <div className="hero-grid">
        <motion.div className="hero-copy" style={{ y: copyY, opacity: copyOpacity }}>
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="dot" aria-hidden="true" />
          Frontend developer · Portfolio
        </motion.p>

        <h1 className="hero-title">
          <span className="sr-only">프론트엔드 개발자 포트폴리오 | </span>
          <BlurText text={'견고한 인터페이스를\n만드는 개발자.'} delay={0.15} />
        </h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          프론트엔드 개발자입니다. 금융·엔터프라이즈 서비스의 화면을 React로 만들어 왔고,
          접근성과 유지보수성을 먼저 생각합니다.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          <MagneticButton onClick={() => scrollTo('portfolio')}>
            프로젝트 보기 <ArrowDown size={18} aria-hidden="true" />
          </MagneticButton>
          <MagneticButton variant="ghost" onClick={() => scrollTo('contact')}>
            연락하기 <ArrowRight size={18} aria-hidden="true" />
          </MagneticButton>
        </motion.div>
        </motion.div>

        {/* 오른쪽 칸은 3D 오브제가 비쳐 보이는 자리(배경 캔버스가 그린다) */}
        <div className="hero-visual" aria-hidden="true" />
        </div>

        <motion.dl
          className="hero-facts"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
        >
          <div>
            <dt>Projects</dt>
            <dd><CountUp to={projects.length} />+</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>React · Next.js · TypeScript</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>금융 · 엔터프라이즈 UI</dd>
          </div>
        </motion.dl>
      </div>

      <div className="hero-marquee">
        <Marquee items={clients} />
      </div>
    </section>
  );
};

export default Hero;
