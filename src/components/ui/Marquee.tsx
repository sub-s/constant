import './ui.scss';

interface MarqueeProps {
  items: string[];
  /** 한 바퀴 도는 시간(초) */
  duration?: number;
}

/**
 * 끊김 없이 흐르는 가로 마퀴 (Magic UI Marquee 스타일)
 * - 목록을 두 번 이어 붙이고 -50% 만큼 이동시켜 루프를 만든다
 * - 호버 시 일시정지, 동작 줄이기 설정에서는 정지 (CSS에서 처리)
 */
const Marquee = ({ items, duration = 45 }: MarqueeProps) => (
  <div className="marquee" aria-label="참여한 프로젝트의 고객사">
    <div className="marquee-track" style={{ animationDuration: `${duration}s` }}>
      {[...items, ...items].map((item, i) => (
        <span className="marquee-item" key={i} aria-hidden={i >= items.length}>
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
