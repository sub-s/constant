import BlurText from '@/components/ui/BlurText';
import Reveal from '@/components/ui/Reveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { Accessibility, ArrowUpRight, Blocks, MessagesSquare } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useState } from 'react';
import './About.scss';
import AdvantageModal from './AdvantageModal';

interface AdvantageItem {
  id: string;
  label: string;
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
}

/** 일하는 방식 3가지 — 클릭하면 상세 모달이 열린다 */
const advantages: AdvantageItem[] = [
  {
    id: 'accessible',
    label: 'Accessibility',
    title: 'Accessible by Default',
    description: '시맨틱 마크업과 키보드·스크린리더 사용을 처음부터 고려해, 누구나 쓸 수 있는 화면을 만듭니다.',
    details: [
      '시맨틱 HTML 기반의 구조 설계',
      '키보드 탐색과 포커스 흐름 점검',
      '한국형 웹 콘텐츠 접근성 지침 참고',
    ],
    icon: Accessibility,
  },
  {
    id: 'maintainable',
    label: 'Maintainability',
    title: 'Maintainable Code',
    description: '컴포넌트 단위로 나누고 타입으로 약속을 남겨, 시간이 지나도 고치기 쉬운 코드를 지향합니다.',
    details: ['재사용 가능한 컴포넌트 구조', 'TypeScript 기반의 명확한 인터페이스', '이해하기 쉬운 주석과 문서화'],
    icon: Blocks,
  },
  {
    id: 'communication',
    label: 'Communication',
    title: 'Direct Communication',
    description: '기획·디자인·백엔드와 직접 소통하며 오해를 줄이고, 이슈는 빠르고 명확하게 공유합니다.',
    details: ['불필요한 단계 없는 직접 소통', '즉각적인 피드백 반영', '기술 이슈에 대한 명확한 설명'],
    icon: MessagesSquare,
  },
];

const About = () => {
  const [selectedAdvantage, setSelectedAdvantage] = useState<AdvantageItem | null>(null);

  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal className="section-head">
          <span className="index">01</span>
          <span>About me</span>
        </Reveal>

        <div className="about-grid">
          <h2 className="about-headline">
            <BlurText text={'화면의 겉과\n속을 함께 만듭니다.'} />
          </h2>

          <Reveal className="about-content" delay={0.15}>
            <p>
              안녕하세요, 프론트엔드 개발자입니다. 하나은행, 기아, 삼성디스플레이 등
              금융·엔터프라이즈 서비스의 UI를 퍼블리싱하고 React로 개발해 왔습니다.
            </p>
            <p>
              현재는 1인 개인사업자(<strong>Constant</strong>)로서 개인 프로젝트와 콘텐츠 자동화 도구를 직접 만들고 운영하며,
              반복되는 일을 시스템으로 바꾸는 데 관심을 두고 있습니다.
            </p>
          </Reveal>
        </div>

        {/* 벤토 그리드: 첫 카드는 크게, 나머지는 작게 */}
        <div className="advantage-bento">
          {advantages.map((item, i) => (
            <Reveal key={item.id} className={`bento-cell cell-${i + 1}`} delay={i * 0.1}>
              <SpotlightCard
                as="button"
                className="advantage-card"
                onClick={() => setSelectedAdvantage(item)}
                aria-label={`${item.title} 자세히 보기`}
              >
                <span className="advantage-icon">
                  <item.icon size={22} aria-hidden="true" />
                </span>
                <span className="advantage-label">{item.label}</span>
                <h3 className="advantage-name">{item.title}</h3>
                <p className="advantage-desc">{item.description}</p>
                <ArrowUpRight className="advantage-arrow" size={20} aria-hidden="true" />
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>

      {selectedAdvantage && (
        <AdvantageModal item={selectedAdvantage} onClose={() => setSelectedAdvantage(null)} />
      )}
    </section>
  );
};

export default About;
