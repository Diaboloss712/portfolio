import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Button from '@components/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@components/Card';
import Badge from '@components/Badge';
import { projectsData, Project } from '@utils/constants';
import { getStatusColor } from '@utils/helpers';

interface ProjectCardProps {
  project: Project;
  onNavigate: (tab: string, projectId?: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onNavigate }) => {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg hover:-translate-y-1 duration-300 group">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge 
            variant="secondary" 
            className="bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
          >
            {project.category}
          </Badge>
          <span className="text-xs text-slate-400 font-mono">{project.date}</span>
        </div>
        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription className="text-sm line-clamp-2 leading-relaxed">
          {project.desc}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map(tech => (
            <Badge key={tech} variant="outline" className="text-xs border-slate-300">
              {tech}
            </Badge>
          ))}
          {project.tech.length > 4 && (
            <Badge variant="outline" className="text-xs border-slate-300">
              +{project.tech.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${getStatusColor(project.status)}`} />
            <span className="text-xs font-medium text-slate-600">{project.status}</span>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => onNavigate('project-detail', project.id)}
            className="h-8 text-xs ml-auto hover:bg-white hover:shadow-sm"
          >
            View Details <ChevronRight size={14} className="ml-1" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

interface FeaturedSectionProps {
  onNavigate: (tab: string, projectId?: number) => void;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ onNavigate }) => {
  const featuredProjects = projectsData.slice(0, 3);
  
  return (
    <section>
      <div className="flex justify-between items-end mb-8 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            Recent Works
          </h2>
          <p className="text-slate-500 mt-2 text-sm">Featured projects and experiments</p>
        </div>
        <Button 
          variant="ghost" 
          onClick={() => onNavigate('portfolio')} 
          className="hidden sm:flex"
        >
          View All Projects <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map(project => (
          <ProjectCard key={project.id} project={project} onNavigate={onNavigate} />
        ))}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <Button variant="outline" onClick={() => onNavigate('portfolio')}>
          View All Projects <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default FeaturedSection;
