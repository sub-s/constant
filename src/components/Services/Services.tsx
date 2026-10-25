import Reveal from '@/components/ui/Reveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { Bot, Code2, LayoutTemplate } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import './Services.scss';

interface ServiceItem {
  title: string;
  tag: string;
  description: string;
  icon: LucideIcon;
}

/** 전문 영역 목록 */
const services: ServiceItem[] = [
  {
    title: 'Web Publishing',
    tag: 'Markup · A11y · Responsive',
    description: '구조와 스타일의 조화. 시맨틱 마크업, 웹 접근성, 반응형 레이아웃을 꼼꼼하게 구현합니다.',
    icon: LayoutTemplate,
  },
  {
    title: 'Frontend Development',
    tag: 'React · Next.js · TypeScript',
    description: 'React 기반의 동적인 사용자 경험. 확장 가능한 컴포넌트 구조와 성능 최적화를 중요하게 봅니다.',
    icon: Code2,
  },
  {
    title: 'Automation & Side Projects',
    tag: 'Content · Data · Tooling',
    description: '블로그 발행, 데이터 수집처럼 반복되는 일을 자동화하고, 직접 쓰는 도구와 서비스를 만들어 운영합니다.',
    icon: Bot,
  },
];

const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <Reveal className="section-head">
          <span className="index">02</span>
          <span>Expertise</span>
        </Reveal>
        <Reveal>
          <h2 className="section-title">잘하는 일, 그리고 관심 있는 일.</h2>
        </Reveal>

        <ul className="service-list">
          {services.map((service, index) => (
            <li key={service.title}>
              <Reveal delay={index * 0.1}>
                <SpotlightCard className="service-row">
                  <span className="service-no">0{index + 1}</span>
                  <span className="service-icon">
                    <service.icon size={26} aria-hidden="true" />
                  </span>
                  <h3 className="service-title">{service.title}</h3>
                  <div className="service-body">
                    <p className="service-desc">{service.description}</p>
                    <span className="service-tag">{service.tag}</span>
                  </div>
                </SpotlightCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
