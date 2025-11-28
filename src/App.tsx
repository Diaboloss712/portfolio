import React, { useState, useEffect } from 'react';
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
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const handleNavigate = (tab: string, projectId?: number) => {
    setActiveTab(tab);
    if (projectId !== undefined) {
      setSelectedProjectId(projectId);
    } else {
      setSelectedProjectId(null);
    }
    scrollToTop();
  };

  useEffect(() => {
    scrollToTop();
  }, [activeTab]);

  const renderContent = () => {
    // 프로젝트 상세 페이지
    if (activeTab === 'project-detail' && selectedProjectId !== null) {
      const project = projectsData.find(p => p.id === selectedProjectId);
      if (project) {
        return <ProjectDetailPage project={project} onNavigate={handleNavigate} />;
      }
    }

    switch(activeTab) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'portfolio':
        return <PortfolioPage onNavigate={handleNavigate} />;
      case 'portfolio-backend':
        return <BackendPortfolio onNavigate={handleNavigate} />;
      case 'portfolio-fullstack':
        return <FullstackPortfolio onNavigate={handleNavigate} />;
      case 'portfolio-ai':
        return <AIPortfolio onNavigate={handleNavigate} />;
      case 'pdf':
        return <PDFPortfolio />;
      case 'til':
        return <TilPage />;
      case 'projects':
        return <ProjectsPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  // PDF 페이지는 레이아웃 없이 렌더링
  if (activeTab === 'pdf') {
    return <PDFPortfolio />;
  }

  return (
    <MainLayout activeTab={activeTab} onNavigate={handleNavigate}>
      {renderContent()}
    </MainLayout>
  );
}

export default App;
