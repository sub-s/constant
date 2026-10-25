import Reveal from '@/components/ui/Reveal';
import { projects } from '@/data/projects';
import { Project } from '@/types/project';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Portfolio.scss';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

/** 홈 화면에 노출하는 대표 프로젝트 수 */
const FEATURED_COUNT = 6;

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  const gridProjects = projects.slice(0, FEATURED_COUNT);

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <Reveal className="section-head">
          <span className="index">03</span>
          <span>Selected projects</span>
        </Reveal>
        <Reveal>
          <h2 className="section-title">참여해 온 프로젝트.</h2>
        </Reveal>

        <div className="project-grid">
          {gridProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} onSelect={setSelectedProject} />
          ))}
        </div>

        <Reveal className="view-all-container">
          <button className="primary-btn" onClick={() => navigate('/portfolio')}>
            전체 프로젝트 {projects.length}개 보기 <ArrowRight size={18} aria-hidden="true" />
          </button>
        </Reveal>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Portfolio;
