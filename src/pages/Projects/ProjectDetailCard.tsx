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
      <CardHeader className="space-y-2 pb-3">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="text-xs">{project.category}</Badge>
              <span className={`flex h-2 w-2 rounded-full ${getStatusColor(project.status)}`} />
              <span className="text-xs font-medium text-slate-500">{project.status}</span>
            </div>
            <CardTitle className="text-lg mb-1">{project.title}</CardTitle>
            {project.role && (
              <p className="text-xs text-slate-600 font-medium mb-1">{project.role}</p>
            )}
            <CardDescription className="text-sm leading-snug">{project.desc}</CardDescription>
          </div>
          
          <div className="flex flex-col gap-1 shrink-0">
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Calendar size={11} />
              <span>{project.date}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3 pt-2">
        {project.details && project.details.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-slate-900 mb-2 uppercase tracking-wider">
              Key Highlights
            </h4>
            <ul className="space-y-1">
              {project.details.map((detail, idx) => (
                <li key={idx} className="flex items-start text-xs text-slate-600">
                  <span className="mr-2 mt-1 w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></span>
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h4 className="text-xs font-semibold text-slate-900 mb-2 uppercase tracking-wider">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map(tech => (
              <Badge 
                key={tech} 
                variant="outline" 
                className="text-xs font-normal text-slate-600 bg-slate-50 border-slate-300 px-2 py-0.5"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button 
            variant="default" 
            size="sm"
            className="flex-1 sm:flex-none text-xs h-8"
            onClick={() => onNavigate('project-detail', project.id)}
          >
            <ArrowRight size={14} />
            View Details
          </Button>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none"
            >
              <Button variant="outline" size="sm" className="w-full text-xs h-8">
                <ExternalLink size={14} />
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
