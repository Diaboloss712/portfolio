import React from 'react';
import { Layers, Code2, Cpu } from 'lucide-react';

const AboutSection: React.FC = () => {
  const philosophies = [
    {
      icon: Layers,
      title: "Full Pipeline Experience",
      desc: "데이터 수집부터 모델 서빙, 모니터링까지 전 과정 주도",
      color: "blue"
    },
    {
      icon: Code2,
      title: "Architecture First",
      desc: "확장 가능한 백엔드 구조와 도메인 로직 설계 중시",
      color: "emerald"
    },
    {
      icon: Cpu,
      title: "Advanced AI Tech",
      desc: "LLM, RAG, MLOps 등 최신 기술 스택 적극 도입 및 실험",
      color: "indigo"
    }
  ];

  const aboutText = [
    "데이터와 시스템을 실제 서비스로 연결하는 것을 좋아합니다.",
    "모델 구현만이 아닌, 수집 → 전처리 → 학습 → 배포 → 모니터링으로 이어지는 전체 파이프라인을 직접 설계하고 구축합니다.",
    "HRV 기반 수면 단계 분류부터 IoT 디바이스 연동, LLM 에이전트 설계까지 폭넓은 경험을 보유하고 있습니다.",
    "모델 하나를 잘 만드는 것을 넘어, 모델이 실제로 동작할 인프라와 도메인 로직까지 함께 설계하는 엔지니어를 목표로 합니다."
  ];

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    emerald: "bg-emerald-100 text-emerald-600",
    indigo: "bg-indigo-100 text-indigo-600"
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            {aboutText.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-xl mb-6 text-slate-900">Engineering Philosophy</h3>
            <ul className="space-y-4">
              {philosophies.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${colorClasses[item.color as keyof typeof colorClasses]} mt-1`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <strong className="block text-slate-900">{item.title}</strong>
                      <span className="text-slate-600 text-sm">{item.desc}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
