import React from 'react';
import { Server, Layers, ArrowRight, CpuIcon } from 'lucide-react';

interface PortfolioSectionProps {
  onNavigate: (tab: string, projectId?: number) => void;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onNavigate }) => {
  const portfolios = [
    {
      id: 'portfolio-backend',
      title: 'Backend Engineer',
      icon: Server,
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-600',
      description: '확장 가능한 백엔드 아키텍처 설계와 도메인 로직 구현',
      skills: ['Spring Boot', 'FastAPI', 'MySQL', 'Redis', 'MQTT', 'Docker']
    },
    {
      id: 'portfolio-fullstack',
      title: 'Full-stack Engineer',
      icon: Layers,
      color: 'indigo',
      gradient: 'from-indigo-500 to-purple-600',
      description: '프론트엔드부터 백엔드, 인프라까지 전체 스택 이해',
      skills: ['React', 'TypeScript', 'Spring Boot', 'WebSocket', 'Jenkins', 'Unity']
    },
    {
      id: 'portfolio-ai',
      title: 'AI Engineer',
      icon: CpuIcon,
      color: 'purple',
      gradient: 'from-purple-500 to-pink-600',
      description: '데이터 전처리부터 배포·모니터링까지 전체 파이프라인 설계',
      skills: ['Python', 'LangChain', 'MLflow', 'DVC', 'PyArrow', 'Pinecone']
    }
  ];

  const colorClasses = {
    'portfolio-backend': {
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      skillBg: 'bg-emerald-50',
      skillText: 'text-emerald-700'
    },
    'portfolio-fullstack': {
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      skillBg: 'bg-indigo-50',
      skillText: 'text-indigo-700'
    },
    'portfolio-ai': {
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      skillBg: 'bg-purple-50',
      skillText: 'text-purple-700'
    }
  };

  return (
    <section>
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Portfolio
        </h2>
        <p className="text-lg text-slate-600">
          역할에 따라 다른 소개와 프로젝트를 확인하세요
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {portfolios.map((portfolio) => {
          const Icon = portfolio.icon;
          const classes = colorClasses[portfolio.id as keyof typeof colorClasses];
          
          return (
            <button
              key={portfolio.id}
              onClick={() => onNavigate(`/portfolio/${portfolio.id.replace('portfolio-', '')}`)}
              className="group relative overflow-hidden bg-white rounded-2xl border-2 border-slate-200 p-8 text-left transition-all duration-300 hover:border-transparent hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${portfolio.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${classes.iconBg} group-hover:bg-white/20 transition-colors mb-6`}>
                  <Icon className={`w-8 h-8 ${classes.iconColor} group-hover:text-white transition-colors`} />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors mb-3">
                  {portfolio.title}
                </h3>
                
                <p className="text-sm text-slate-600 group-hover:text-white/90 transition-colors mb-6 leading-relaxed">
                  {portfolio.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {portfolio.skills.slice(0, 3).map(skill => (
                    <span 
                      key={skill}
                      className={`text-xs px-2 py-1 rounded-md ${classes.skillBg} ${classes.skillText} group-hover:bg-white/20 group-hover:text-white transition-colors`}
                    >
                      {skill}
                    </span>
                  ))}
                  <span className={`text-xs px-2 py-1 rounded-md ${classes.skillBg} ${classes.skillText} group-hover:bg-white/20 group-hover:text-white transition-colors`}>
                    +{portfolio.skills.length - 3}
                  </span>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-slate-700 group-hover:text-white font-medium">
                  <span className="text-sm">View Portfolio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioSection;
