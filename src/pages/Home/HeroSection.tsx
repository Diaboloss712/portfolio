import React from 'react';
import { personalInfo } from '@utils/constants';

const HeroSection: React.FC = () => {
  return (
    <section className="text-center py-12 md:py-24 space-y-8 animate-in slide-in-from-bottom duration-700">      
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="block text-slate-900">데이터와 시스템을</span>
          <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            실제 서비스로 연결합니다
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          {personalInfo.intro}
        </p>
        
        <p className="text-sm text-slate-500 max-w-2xl mx-auto">
          수집 → 전처리 → 학습 → 배포 → 모니터링으로 이어지는 전체 파이프라인을 직접 만듭니다
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
