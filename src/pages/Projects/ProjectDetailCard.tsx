import React from 'react';
import { ExternalLink, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@components/Card';
import Badge from '@components/Badge';
import Button from '@components/Button';
import { getStatusColor } from '@utils/helpers';
import { Project } from '@utils/constants';

interface ProjectDetailCardProps {
  project: Project;
  onNavigate: (tab: string, projectId?: number) => void;
}

const ProjectDetailCard: React.FC<ProjectDetailCardProps> = ({ project, onNavigate }) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary">{project.category}</Badge>
              <span className={`flex h-2 w-2 rounded-full ${getStatusColor(project.status)}`} />
              <span className="text-xs font-medium text-slate-500">{project.status}</span>
            </div>
            <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
            {project.role && (
              <p className="text-sm text-slate-600 font-medium mb-2">{project.role}</p>
            )}
            <CardDescription className="text-base">{project.desc}</CardDescription>
          </div>
          
          <div className="flex flex-col gap-2 shrink-0">
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Calendar size={12} />
              <span>{project.date}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {project.details && project.details.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wider">
              Key Highlights
            </h4>
            <ul className="space-y-2">
              {project.details.map((detail, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-600">
                  <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wider">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map(tech => (
              <Badge 
                key={tech} 
                variant="outline" 
                className="font-normal text-slate-600 bg-slate-50 border-slate-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <Button 
            variant="default" 
            className="flex-1 sm:flex-none"
            onClick={() => onNavigate('project-detail', project.id)}
          >
            <ArrowRight size={16} />
            View Details
          </Button>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none"
            >
              <Button variant="outline" className="w-full">
                <ExternalLink size={16} />
                Repository
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectDetailCard;
