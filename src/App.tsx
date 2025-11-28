import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom';
import MainLayout from '@layout/MainLayout';
import HomePage from '@pages/Home/HomePage';
import PortfolioPage from '@pages/Portfolio/PortfolioPage';
import BackendPortfolio from '@pages/Portfolio/BackendPortfolio';
import FullstackPortfolio from '@pages/Portfolio/FullstackPortfolio';
import AIPortfolio from '@pages/Portfolio/AIPortfolio';
import PDFPortfolio from '@pages/PDFPortfolio';
import TilPage from '@pages/TIL/TilPage';
import ProjectsPage from '@pages/Projects/ProjectsPage';
import ProjectDetailPage from '@pages/ProjectDetail/ProjectDetailPage';
import { scrollToTop } from '@utils/helpers';
import { projectsData } from '@utils/constants';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  const handleNavigate = (path: string, projectId?: number) => {
    if (projectId !== undefined) {
      navigate(`/projects/${projectId}`);
    } else {
      navigate(path.startsWith('/') ? path : `/${path}`);
    }
  };

  // PDF 페이지는 레이아웃 없이 렌더링
  if (location.pathname.startsWith('/pdf')) {
    return (
      <Routes>
        <Route path="/pdf" element={<PDFPortfolio onNavigate={handleNavigate} />} />
        <Route path="/pdf/backend" element={<PDFPortfolio portfolioType="backend" onNavigate={handleNavigate} />} />
        <Route path="/pdf/fullstack" element={<PDFPortfolio portfolioType="fullstack" onNavigate={handleNavigate} />} />
        <Route path="/pdf/ai" element={<PDFPortfolio portfolioType="ai" onNavigate={handleNavigate} />} />
      </Routes>
    );
  }

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
        <Route path="/portfolio" element={<PortfolioPage onNavigate={handleNavigate} />} />
        <Route path="/portfolio/backend" element={<BackendPortfolio onNavigate={handleNavigate} />} />
        <Route path="/portfolio/fullstack" element={<FullstackPortfolio onNavigate={handleNavigate} />} />
        <Route path="/portfolio/ai" element={<AIPortfolio onNavigate={handleNavigate} />} />
        <Route path="/til" element={<TilPage />} />
        <Route path="/projects" element={<ProjectsPage onNavigate={handleNavigate} />} />
        <Route path="/projects/:id" element={<ProjectDetailPageWrapper />} />
      </Routes>
    </MainLayout>
  );
}

// 프로젝트 상세 페이지 래퍼
function ProjectDetailPageWrapper() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === Number(id));

  const handleNavigate = (path: string) => {
    navigate(path.startsWith('/') ? path : `/${path}`);
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetailPage project={project} onNavigate={handleNavigate} />;
}

export default App;
