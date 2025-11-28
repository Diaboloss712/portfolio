import React from 'react';
import { ArrowLeft, Calendar, Users, Printer, ExternalLink } from 'lucide-react';
import { 
  SiPython, SiJavascript, SiTypescript, SiReact, SiVuedotjs, SiAngular,
  SiNodedotjs, SiExpress, SiNestjs, SiFastapi, SiFlask, SiDjango,
  SiSpring, SiMysql, SiPostgresql, SiMongodb, SiRedis, SiDocker,
  SiKubernetes, SiAmazon, SiGooglecloud,
  SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy,
  SiTailwindcss, SiBootstrap, SiMui, SiJest, SiCypress,
  SiGit, SiGithub, SiGitlab, SiJenkins, SiGithubactions,
  SiUnity, SiCplusplus, SiArduino, SiRaspberrypi,
  SiLangchain, SiOpenai, SiMqtt, SiSocketdotio, SiDvc
} from 'react-icons/si';
import { Card, CardHeader, CardTitle, CardContent } from '@components/Card';
import Badge from '@components/Badge';
import Button from '@components/Button';
import { getStatusColor } from '@utils/helpers';
import { Project } from '@utils/constants';

interface ProjectDetailPageProps {
  project: Project;
  onNavigate: (tab: string) => void;
}

// 기술 스택 아이콘 매핑
const techIconMap: Record<string, any> = {
  'Python': SiPython,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'React': SiReact,
  'Vue.js': SiVuedotjs,
  'Angular': SiAngular,
  'Node.js': SiNodedotjs,
  'Express': SiExpress,
  'NestJS': SiNestjs,
  'FastAPI': SiFastapi,
  'Flask': SiFlask,
  'Django': SiDjango,
  'Spring Boot': SiSpring,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'MongoDB': SiMongodb,
  'Redis': SiRedis,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'AWS': SiAmazon,
  'AWS S3': SiAmazon,
  'GCP': SiGooglecloud,
  'TensorFlow': SiTensorflow,
  'PyTorch': SiPytorch,
  'scikit-learn': SiScikitlearn,
  'Pandas': SiPandas,
  'NumPy': SiNumpy,
  'TailwindCSS': SiTailwindcss,
  'Bootstrap': SiBootstrap,
  'Material-UI': SiMui,
  'Jest': SiJest,
  'Cypress': SiCypress,
  'Git': SiGit,
  'GitHub': SiGithub,
  'GitLab': SiGitlab,
  'Jenkins': SiJenkins,
  'GitHub Actions': SiGithubactions,
  'Unity': SiUnity,
  'C++': SiCplusplus,
  'Arduino': SiArduino,
  'Raspberry Pi': SiRaspberrypi,
  'LangChain': SiLangchain,
  'OpenAI': SiOpenai,
  'MQTT': SiMqtt,
  'Socket.io': SiSocketdotio,
  'WebSocket': SiSocketdotio,
  'DVC': SiDvc
};

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, onNavigate }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header - 출력 시 숨김 */}
      <div className="flex items-center justify-between print:hidden">
        <Button 
          variant="ghost" 
          onClick={() => onNavigate('projects')}
          className="gap-2"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Button>
        <Button 
          variant="outline" 
          onClick={handlePrint}
          className="gap-2"
        >
          <Printer size={16} />
          출력하기
        </Button>
      </div>

      {/* Title Section - Projects 페이지 스타일 */}
      <Card className="print:shadow-none">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">{project.category}</Badge>
                <span className={`flex h-2 w-2 rounded-full ${getStatusColor(project.status)}`} />
                <span className="text-xs font-medium text-slate-500">{project.status}</span>
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                {project.title}
              </h1>
              <p className="text-slate-600 leading-relaxed">
                {project.desc}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono flex-shrink-0">
              <Calendar size={14} />
              <span>{project.date}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            {project.teamSize && (
              <div className="flex items-center gap-2 text-slate-600">
                <Users size={16} />
                <span>{project.teamSize}</span>
              </div>
            )}
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 print:hidden"
              >
                <ExternalLink size={16} />
                View Repository
              </a>
            )}
          </div>
        </CardHeader>
      </Card>

      {/* Main Image */}
      {project.image && (
        <div className="w-full rounded-xl overflow-hidden border border-slate-200">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full max-h-96 object-contain bg-slate-50"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}

      {/* Tech Stack */}
      <Card>
        <CardHeader>
          <CardTitle>기술 스택</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {project.tech.map(tech => {
              const Icon = techIconMap[tech];
              return (
                <Badge 
                  key={tech} 
                  variant="outline" 
                  className="font-normal text-slate-700 bg-slate-50 border-slate-300 text-sm px-3 py-1.5 flex items-center gap-2"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {tech}
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* 프로젝트 개요 */}
      {project.overview && (
        <Card>
          <CardHeader>
            <CardTitle>프로젝트 개요</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
              {project.overview}
            </p>
            {project.images?.overview && project.images.overview.length > 0 && (
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {project.images.overview.map((img, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden border border-slate-200 bg-white p-4">
                    <img 
                      src={img} 
                      alt={`${project.title} overview ${idx + 1}`}
                      className="w-full max-h-96 object-contain bg-white"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* 내 역할 */}
      {(project.myRole || project.role) && (
        <Card>
          <CardHeader>
            <CardTitle>내 역할</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
              {project.myRole || project.role}
            </p>
          </CardContent>
        </Card>
      )}

      {/* 기술 선택 이유 */}
      {project.techReason && project.techReason.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>기술 선택 이유</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {project.techReason.map((reason, idx) => (
                <li key={idx} className="flex items-start text-slate-700">
                  <span className="mr-3 mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <span className="leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}


      {/* Key Highlights (기존 details) */}
      {project.details && project.details.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>주요 성과</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              {project.details.map((detail, idx) => (
                <li key={idx} className="flex items-start text-slate-700">
                  <span className="mr-3 mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
            {project.images?.details && project.images.details.length > 0 && (
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {project.images.details.map((img, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden border border-slate-200 bg-white p-4">
                    <img 
                      src={img} 
                      alt={`${project.title} result ${idx + 1}`}
                      className="w-full max-h-96 object-contain bg-white"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* 이슈 또는 문제 해결 */}
      {project.issues && project.issues.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>이슈 또는 문제 해결</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-8">
              {project.issues.map((issue, idx) => (
                <div key={idx} className="space-y-3 pb-6 border-b border-slate-200 last:border-0">
                  <h4 className="font-bold text-lg text-slate-900">
                    {idx + 1}. {issue.title}
                  </h4>
                  
                  {issue.cause && (
                    <div className="pl-4">
                      <h5 className="font-semibold text-slate-800 mb-1">발생 상황</h5>
                      <p className="text-slate-700 leading-relaxed pl-3">{issue.cause}</p>
                    </div>
                  )}
                  
                  <div className="pl-4">
                    <h5 className="font-semibold text-slate-800 mb-1">대응책</h5>
                    <p className="text-slate-700 leading-relaxed pl-3">{issue.solution}</p>
                  </div>
                  
                  {issue.result && (
                    <div className="pl-4">
                      <h5 className="font-semibold text-slate-800 mb-1">결과</h5>
                      <p className="text-slate-700 leading-relaxed pl-3">{issue.result}</p>
                    </div>
                  )}
                  
                  {issue.comparison && (
                    <div className="pl-4">
                      <h5 className="font-semibold text-slate-800 mb-1">비교 분석</h5>
                      <p className="text-slate-700 leading-relaxed pl-3 bg-blue-50 p-3 rounded border-l-4 border-blue-500">{issue.comparison}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {project.images?.issues && project.images.issues.length > 0 && (
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {project.images.issues.map((img, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden border border-slate-200 bg-white p-4">
                    <img 
                      src={img} 
                      alt={`${project.title} issue ${idx + 1}`}
                      className="w-full max-h-96 object-contain bg-white"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* 회고 */}
      {project.retrospect && project.retrospect.length > 0 && (
        <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200">
          <CardHeader>
            <CardTitle>회고</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {project.retrospect.map((item, idx) => (
                <li key={idx} className="flex items-start text-slate-700">
                  <span className="mr-3 mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Footer - 출력 시 숨김 */}
      <div className="pt-8 border-t border-slate-200 print:hidden">
        <Button 
          variant="outline" 
          onClick={() => onNavigate('projects')}
          className="gap-2"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Button>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
