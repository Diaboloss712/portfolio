import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@components/Card';
import Badge from '@components/Badge';
import Button from '@components/Button';
import { getStatusColor } from '@utils/helpers';
import { Project } from '@utils/constants';

interface ProjectCardProps {
  project: Project;
  onNavigate: (tab: string, projectId?: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onNavigate }) => (
  <Card className="flex flex-col h-full hover:shadow-lg hover:-translate-y-1 duration-300 group overflow-hidden">
    {project.image && (
      <div className="w-full h-32 overflow-hidden bg-slate-100">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
    )}
    <CardHeader className="pb-2">
      <div className="flex justify-between items-start mb-1.5">
        <Badge 
          variant="secondary" 
          className="bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors text-xs px-2 py-0.5"
        >
          {project.category}
        </Badge>
        <span className="text-xs text-slate-400 font-mono">{project.date}</span>
      </div>
      <CardTitle className="text-base group-hover:text-blue-600 transition-colors mb-1">
        {project.title}
      </CardTitle>
      <CardDescription className="text-xs leading-snug line-clamp-2">
        {project.desc}
      </CardDescription>
    </CardHeader>

    <CardContent className="flex-1 pt-2 pb-2">
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map(tech => (
          <Badge key={tech} variant="outline" className="text-xs border-slate-300 px-1.5 py-0.5">
            {tech}
          </Badge>
        ))}
      </div>
    </CardContent>

    <CardFooter className="pt-2">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className={`h-1.5 w-1.5 rounded-full ${getStatusColor(project.status)}`} />
          <span className="text-xs font-medium text-slate-600">{project.status}</span>
        </div>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => onNavigate('project-detail', project.id)}
          className="h-7 text-xs ml-auto hover:bg-white hover:shadow-sm px-2"
        >
          View Details <ChevronRight size={12} className="ml-1" />
        </Button>
      </div>
    </CardFooter>
  </Card>
);

export default ProjectCard;
