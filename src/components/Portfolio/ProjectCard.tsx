import Reveal from '@/components/ui/Reveal';
import TiltCard from '@/components/ui/TiltCard';
import { Project } from '@/types/project';
import { ArrowUpRight } from 'lucide-react';
import NoImage from './NoImage';

interface ProjectCardProps {
  project: Project;
  /** 목록 내 순서 (번호 표기 및 등장 지연에 사용) */
  index: number;
  onSelect: (project: Project) => void;
}

/**
 * 포트폴리오 카드 — 홈 그리드와 아카이브 페이지에서 공유
 * - 3D 틸트 + 이미지 줌 + 카테고리 칩
 * - 접근성을 위해 카드 전체를 하나의 버튼으로 구성
 */
const ProjectCard = ({ project, index, onSelect }: ProjectCardProps) => (
  <Reveal delay={(index % 3) * 0.08}>
    <TiltCard>
      <button className="project-card" onClick={() => onSelect(project)} aria-label={`${project.title} 자세히 보기`}>
        <div className="project-image">
          {project.image ? (
            <img src={project.image} alt={`${project.title} 화면`} loading="lazy" />
          ) : (
            <NoImage />
          )}
          <span className="project-chip">{project.category}</span>
          <span className="project-open" aria-hidden="true">
            <ArrowUpRight size={18} />
          </span>
        </div>
        <div className="project-info">
          <span className="project-no">{String(index + 1).padStart(2, '0')}</span>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>
        </div>
      </button>
    </TiltCard>
  </Reveal>
);

export default ProjectCard;
