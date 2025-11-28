import React, { useState } from 'react';
import { Folder, Search, Printer } from 'lucide-react';
import Input from '@components/Input';
import Button from '@components/Button';
import ProjectDetailCard from './ProjectDetailCard';
import { projectsData } from '@utils/constants';

interface ProjectsPageProps {
  onNavigate: (tab: string, projectId?: number) => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handlePrint = () => {
    window.print();
  };

  const filtered = projectsData
    .filter(project => 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      // date 형식: "2025.10 ~ 2025.11" 또는 "2025.07 ~ 2025.08"
      const getStartDate = (dateStr: string) => {
        const start = dateStr.split('~')[0].trim();
        return start;
      };
      
      const dateA = getStartDate(a.date);
      const dateB = getStartDate(b.date);
      
      // 내림차순 정렬 (최신이 먼저)
      return dateB.localeCompare(dateA);
    });

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
            <Folder className="text-blue-600" size={32} />
            Project Docs
          </h1>
          <p className="text-slate-500 mt-2 text-lg">
            진행한 프로젝트에 대한 간략한 설명과 기술 스택을 확인할 수 있습니다.
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="relative group max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4 group-focus-within:text-blue-500 transition-colors" />
            <Input 
              placeholder="Search projects, tech stack..."
              className="pl-10 h-11 bg-white shadow-sm border-slate-200 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button 
            variant="outline" 
            onClick={handlePrint}
            className="gap-2 ml-4 print:hidden"
          >
            <Printer size={16} />
            출력하기
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-6 border-y border-slate-200">
        <div className="text-center">
          <div className="text-2xl font-bold text-slate-900">{projectsData.length}</div>
          <div className="text-sm text-slate-500">전체 프로젝트</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-emerald-600">
            {projectsData.filter(p => p.status === 'Live').length}
          </div>
          <div className="text-sm text-slate-500">Live</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">
            {projectsData.filter(p => p.status === 'Completed').length}
          </div>
          <div className="text-sm text-slate-500">Completed</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600">
            {projectsData.filter(p => p.status === 'Refactoring').length}
          </div>
          <div className="text-sm text-slate-500">Refactoring</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-amber-600">
            {projectsData.filter(p => p.status === 'In Progress').length}
          </div>
          <div className="text-sm text-slate-500">In Progress</div>
        </div>
      </div>

      <div className="space-y-6">
        {filtered.length > 0 ? (
          filtered.map(project => (
            <ProjectDetailCard key={project.id} project={project} onNavigate={onNavigate} />
          ))
        ) : (
          <div className="text-center py-20 text-slate-400 bg-slate-50 rounded-lg border border-dashed border-slate-300">
            <p className="text-lg">검색에 알맞은 프로젝트가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
