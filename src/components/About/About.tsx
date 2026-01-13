import { useState } from 'react';
import './About.css';
import AdvantageModal from './AdvantageModal';

interface AdvantageItem {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  details: string[];
}

const advantages: AdvantageItem[] = [
  {
    id: 'ownership',
    number: 'End-to-End',
    label: 'Full Ownership',
    title: 'End-to-End Ownership',
    description: '기획 단계부터 최종 배포 및 운영까지, 프로젝트의 전 과정을 책임지고 완수합니다.',
    details: [
      '단절 없는 프로젝트 히스토리 관리',
      '기술적 제약을 고려한 현실적인 기획',
      '책임감 있는 유지보수 및 운영 지원'
    ]
  },
  {
    id: 'communication',
    number: 'Direct',
    label: 'Communication',
    title: 'Direct Communication',
    description: '중간 관리자 없이 개발자와 직접 소통하여 의사결정 속도를 높이고 오해를 줄입니다.',
    details: [
      '불필요한 미팅 최소화',
      '즉각적인 피드백 반영',
      '기술적인 이슈에 대한 명확한 답변'
    ]
  },
  {
    id: 'agile',
    number: 'Agile',
    label: 'Development',
    title: 'Agile Development',
    description: '빠른 프로토타이핑과 반복적인 개선을 통해 비즈니스 목표에 가장 부합하는 결과물을 만듭니다.',
    details: [
      '핵심 기능 우선 구현 (MVP)',
      '사용자 피드백에 기반한 빠른 개선',
      '유연한 요구사항 수용'
    ]
  }
];

const About = () => {
  const [selectedAdvantage, setSelectedAdvantage] = useState<AdvantageItem | null>(null);

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">The Constant Advantage</h2>
        <div className="about-container">
          <div className="about-content">
            <h3 className="about-headline">흔들리지 않는 기술력,<br />일관된 퀄리티.</h3>
            <p>
              디지털 환경은 끊임없이 변화하지만, <strong>Constant</strong>가 추구하는 가치는 변하지 않습니다.  <br />
              사용자를 위한 직관적인 경험과 비즈니스를 위한 견고한 코드를 제공합니다.
            </p>
            <p>
              기획, 디자인, 개발의 경계를 허무는 웹 프론트엔드 스튜디오로서, <br />
              파트너님의 비전을 가장 빠르고 정확하게 현실로 구현합니다.
            </p>
          </div>
          
          <div className="about-stats-row">
            {advantages.map((item) => (
              <div 
                key={item.id} 
                className="stat-item clickable"
                onClick={() => setSelectedAdvantage(item)}
              >
                <span className="stat-number">{item.number}</span>
                <span className="stat-label">{item.label}</span>
                <span className="stat-hint">자세히 보기 &rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedAdvantage && (
        <AdvantageModal 
          item={selectedAdvantage} 
          onClose={() => setSelectedAdvantage(null)} 
        />
      )}
    </section>
  );
};

export default About;
