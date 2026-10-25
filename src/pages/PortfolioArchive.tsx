import Footer from '@/components/Layout/Footer';
import '@/components/Portfolio/Portfolio.scss';
import ProjectCard from '@/components/Portfolio/ProjectCard';
import ProjectModal from '@/components/Portfolio/ProjectModal';
import BlurText from '@/components/ui/BlurText';
import { projects } from '@/data/projects';
import { Project } from '@/types/project';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/** 전체 프로젝트 아카이브 페이지 */
const PortfolioArchive = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  // 페이지 진입 시 항상 최상단에서 시작
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="main" className="portfolio-archive-page">
      <div className="container">
        <button className="text-link archive-back" onClick={() => navigate('/')}>
          <ArrowLeft size={16} aria-hidden="true" /> 홈으로
        </button>
        <header className="archive-header">
          <h1 className="section-title">
            <BlurText text="All projects" />
          </h1>
          <p>지금까지 참여한 {projects.length}개의 프로젝트 아카이브입니다.</p>
        </header>

        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} onSelect={setSelectedProject} />
          ))}
        </div>

        <Footer />
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </main>
  );
};

export default PortfolioArchive;
