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
      <div className="w-full h-48 overflow-hidden bg-slate-100">
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
      <CardDescription className="text-sm leading-relaxed">
        {project.desc}
      </CardDescription>
    </CardHeader>

    <CardContent className="flex-1">
      <div className="flex flex-wrap gap-2">
        {project.tech.map(tech => (
          <Badge key={tech} variant="outline" className="text-xs border-slate-300">
            {tech}
          </Badge>
        ))}
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

export default ProjectCard;
