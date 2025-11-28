import React from 'react';
import { CpuIcon, Layers, TrendingUp, Database } from 'lucide-react';
import { SiPython, SiScikitlearn, SiFastapi, SiDvc, SiLangchain } from 'react-icons/si';
import ProjectCard from './ProjectCard';
import { projectsData } from '@utils/constants';

interface AIPortfolioProps {
  onNavigate: (tab: string, projectId?: number) => void;
}

const AIPortfolio: React.FC<AIPortfolioProps> = ({ onNavigate }) => {
  // AI 관련 프로젝트 필터링
  const aiProjects = projectsData.filter(p => 
    p.category.includes('AI') || p.category.includes('MLOps') || p.category.includes('LLM')
  );

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="text-center py-12 space-y-6">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-100 shadow-lg">
          <img 
            src="/profile.jpg" 
            alt="Profile"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.innerHTML = '<div class="w-full h-full bg-purple-100 flex items-center justify-center"><svg class="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div>';
              }
            }}
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          AI Engineer
        </h1>
        <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-['Pretendard']">
          모델을 만드는 것을 넘어, 데이터 전처리부터 배포·모니터링까지 전체 파이프라인을 설계합니다.
          생체 신호 처리, LLM 기반 RAG 시스템, MLOps 인프라 구축 경험을 보유하고 있습니다.
        </p>
      </section>

      {/* Experience & Awards */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-3">
          <CpuIcon className="w-6 h-6 text-purple-600" />
          Experience & Awards
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-purple-100">
            <div className="grid grid-cols-[140px_1fr] gap-4">
              <div className="text-sm font-mono text-purple-600">2025.01 ~ 2025.12</div>
              <div>
                <h3 className="font-bold text-slate-900">삼성청년SW·AI 아카데미 (SSAFY) for AI</h3>
                <p className="text-sm text-slate-600 mt-1">Python, Java, Spring Boot, SQL 학습 / 팀 프로젝트 3회 수행 / AI·백엔드 통합 실습</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-purple-100">
            <div className="grid grid-cols-[140px_1fr] gap-4">
              <div className="text-sm font-mono text-purple-600">2025.08</div>
              <div>
                <h3 className="font-bold text-slate-900">삼성청년SW·AI 아카데미 (SSAFY) 공통 프로젝트 수상</h3>
                <p className="text-sm text-slate-600 mt-1">IoT 사용자 맞춤 향수 제조 (Moodrop)</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-purple-100">
            <div className="grid grid-cols-[140px_1fr] gap-4">
              <div className="text-sm font-mono text-purple-600">2016.03 ~ 2022.02</div>
              <div>
                <h3 className="font-bold text-slate-900">부산대학교 광메카트로닉스공학과</h3>
                <p className="text-sm text-slate-600 mt-1">학사 졸업</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Proficiency */}
      <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-2xl font-bold mb-8 text-slate-900 flex items-center gap-3">
          <Layers className="w-6 h-6 text-purple-600" />
          AI/ML Tech Stack
        </h2>
        <div className="space-y-8">
          {[
            { 
              name: 'Python / Pandas / NumPy', 
              level: 3,
              icon: <SiPython className="w-5 h-5 text-blue-600" />,
              desc: ['NapSync 프로젝트에서 PhysioNet EDF 파일을 25Hz→100Hz로 리샘플링하고, R-peak 검출 후 30초 세그먼트로 시간·주파수·비선형 HRV 피처 55개를 자동 추출하였습니다.', 'Pandas DataFrame 연산 최적화(벡터화, apply 최소화)와 NumPy 배열 연산으로 대용량 생체 신호 전처리 파이프라인을 구축하였습니다.']
            },
            { 
              name: 'Scikit-learn / 머신러닝', 
              level: 3,
              icon: <SiScikitlearn className="w-5 h-5 text-orange-600" />,
              desc: ['NapSync에서 GroupKFold로 피험자 단위 데이터 분할하여 데이터 누수를 방지하고, CatBoost/XGBoost/RandomForest 분류 모델을 학습하였습니다.', 'GridSearchCV로 하이퍼파라미터 튜닝을 수행하고, Confusion Matrix와 F1-score로 모델 성능을 평가하여 최적 모델을 선정하였습니다.']
            },
            { 
              name: 'LangChain', 
              level: 3,
              icon: <SiLangchain className="w-5 h-5 text-purple-600" />,
              desc: ['Belcro 프로젝트에서 LangChain의 RecursiveCharacterTextSplitter로 Bootstrap 문서를 청크 단위로 분할하고, OpenAI 임베딩으로 벡터화하였습니다.', 'ConversationBufferMemory로 Stateful 대화 관리를 구현하여 이전 대화 맥락을 유지하며 코드 생성 결과의 일관성을 확보하였습니다.']
            },
            { 
              name: 'RAG (Retrieval-Augmented Generation)', 
              level: 3,
              icon: <Database className="w-5 h-5 text-indigo-600" />,
              desc: ['Belcro에서 Bootstrap 문서 크롤링 → 임베딩 → Pinecone 벡터 DB 저장 → 유사도 검색 → LLM 프롬프트 증강 파이프라인을 설계하고 구현하였습니다.', '사용자 질의와 유사한 상위 5개 문서를 검색하여 LLM에 컨텍스트로 제공하고, 문서 기반 코드 생성 정확도를 향상시켰습니다.']
            },
            { 
              name: 'Pinecone / Vector DB', 
              level: 3,
              icon: <Database className="w-5 h-5 text-teal-600" />,
              desc: ['Belcro 프로젝트에서 1536차원 OpenAI 임베딩을 Pinecone에 인덱싱하고, 네임스페이스로 Bootstrap 버전별 문서를 분리 관리하였습니다.', 'cosine 유사도 기반 Top-K 검색으로 질의와 관련된 문서를 추출하고, 메타데이터 필터링으로 검색 정확도를 개선하였습니다.']
            },
            { 
              name: 'MLflow', 
              level: 3,
              icon: <TrendingUp className="w-5 h-5 text-green-600" />,
              desc: ['NapSync에서 200+ 실험의 하이퍼파라미터(learning_rate, max_depth 등), 메트릭(accuracy, f1-macro), Confusion Matrix를 MLflow로 자동 로깅하였습니다.', 'MLflow UI로 실험 비교 분석을 수행하고, 최적 모델을 Model Registry에 등록하여 재현 가능한 실험 관리 워크플로우를 구축하였습니다.']
            },
            { 
              name: 'DVC (Data Version Control)', 
              level: 3,
              icon: <SiDvc className="w-5 h-5 text-cyan-600" />,
              desc: ['NapSync에서 수십 GB 생체 신호 데이터를 DVC로 관리하고, AWS S3를 원격 저장소로 설정하여 .dvc 메타데이터만 Git에 커밋하였습니다.', '데이터 버전과 코드 버전을 1:1 매칭하여 실험 재현성을 보장하고, `dvc pull`로 필요한 데이터만 선택적으로 다운로드하는 효율적인 협업 환경을 구축하였습니다.']
            },
            { 
              name: 'PyArrow', 
              level: 2,
              icon: <SiPython className="w-5 h-5 text-yellow-600" />,
              desc: ['Belcro에서 Pandas read_csv 대비 PyArrow read_table로 데이터 로딩 시간을 84% 단축(2.5초→0.4초)하고, 필요한 컬럼만 선택적으로 읽어 메모리 사용량을 감소시켰습니다.', 'Parquet 포맷으로 데이터를 저장하여 압축률과 I/O 성능을 최적화하고, 대용량 데이터셋 처리 파이프라인의 효율성을 개선하였습니다.']
            },
            { 
              name: 'FastAPI', 
              level: 3,
              icon: <SiFastapi className="w-5 h-5 text-rose-600" />,
              desc: ['Belcro에서 LangChain과 Pinecone을 연동한 RAG API 서버를 FastAPI로 구축하고, Pydantic 스키마로 요청/응답 데이터를 검증하였습니다.', '비동기 처리(async/await)로 벡터 검색과 LLM 호출을 병렬화하여 응답 속도를 개선하고, CORS 설정으로 프론트엔드와 안전하게 통신하였습니다.']
            }
          ].map(skill => (
            <div key={skill.name}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                </div>
                <span className="text-sm font-bold text-purple-600">Lv {skill.level}</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-3">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                  style={{ width: `${(skill.level / 5) * 100}%` }}
                />
              </div>
              <div className="space-y-2 mb-4">
                {skill.desc.map((line, idx) => (
                  <p key={idx} className="text-xs text-slate-600 leading-relaxed">• {line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Why AI?</h2>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <h3 className="text-lg font-semibold text-slate-900 mt-4">모델 성능만으로는 부족합니다</h3>
          <p>
            AI는 모델 성능을 높이는 것만으로 끝나지 않습니다. 
            실제 서비스로 만들려면 <strong className="text-slate-900">데이터 수집, 전처리, 특징 추출, 실험 관리, 배포, 모니터링</strong>까지 
            전체 파이프라인을 구축해야 합니다. 저는 이 전 과정을 직접 설계하고 구현하는 것에 관심이 많습니다.
          </p>
          
          <h3 className="text-lg font-semibold text-slate-900 mt-6">HRV 수면 단계 분류: End-to-End MLOps</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>신호 처리:</strong> PhysioNet EDF 데이터 25Hz→100Hz 리샘플링, NeuroKit2로 R-peak/PPG peak 검출</li>
            <li><strong>피처 추출:</strong> 30초 세그먼트 + 5분 윈도우 구조로 시간·주파수·비선형 HRV 피처 자동 추출</li>
            <li><strong>하이브리드 모델:</strong> CatBoost 분류 + Mamba/LSTM 시퀀스 보정으로 전이 구간 오분류 감소 → F1-score 11.9% 향상</li>
            <li><strong>검증 전략:</strong> GroupKFold(피험자 단위)로 데이터 누수 방지, 실제 일반화 성능 확인</li>
            <li><strong>실험 관리:</strong> MLflow로 100개 이상 실험 자동 로깅 및 비교, DVC + AWS S3로 대용량 생체 신호 데이터 버전 관리</li>
            <li><strong>실제 검증:</strong> 상용 웨어러블(삼성 헬스) 데이터로 43.1% 일치도 기록</li>
          </ul>

          <h3 className="text-lg font-semibold text-slate-900 mt-6">Belcro: RAG 시스템 구축 및 성능 최적화</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>RAG 파이프라인:</strong> Bootstrap 문서 크롤링 → LangChain 파싱 → Pinecone 임베딩 → 세션 기반 대화 맥락 관리</li>
            <li><strong>성능 최적화:</strong> Pandas → PyArrow 마이그레이션으로 데이터 로딩 시간 84% 개선 (2.5초 → 0.4초)</li>
            <li><strong>CI/CD:</strong> Jenkins + Docker 자동 빌드·배포 파이프라인 구축, 환경변수 보안 강화</li>
          </ul>

          <h3 className="text-lg font-semibold text-slate-900 mt-6">MCP Git 자동화: LLM 실무 도구 통합</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>MCP 서버 구축:</strong> FastMCP 기반으로 Git 기능을 툴로 분리 (diff 조회, 커밋 메시지 생성, 컨벤션 검증, commit/push 등)</li>
            <li><strong>LLM 통합:</strong> Ollama 로컬 LLM이 자연어 프롬프트로 적절한 툴 선택 및 순차 실행</li>
            <li><strong>워크플로우:</strong> 'diff 분석 → 메시지 생성 → 규칙 검증 → commit/push' 자동화</li>
          </ul>

          <h3 className="text-lg font-semibold text-slate-900 mt-6">MCP Test 플랫폼: 벡터 DB 통합</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>벡터 검색:</strong> Pinecone 연동으로 유사 문제 추천 시스템 구축</li>
            <li><strong>임베딩 모델 비교:</strong> 문제 다양성을 높이기 위해 유사도가 낮은 모델 선택</li>
          </ul>
          
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse border border-slate-300 bg-white">
              <thead>
                <tr className="bg-purple-50">
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold">임베딩 모델</th>
                  <th className="border border-slate-300 px-4 py-2 text-center font-semibold">평균 유사도</th>
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold">특징</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 px-4 py-2">HyperClova</td>
                  <td className="border border-slate-300 px-4 py-2 text-center font-mono">0.77</td>
                  <td className="border border-slate-300 px-4 py-2 text-sm">한국어 특화, 중간 다양성</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-slate-300 px-4 py-2 font-semibold">GPT-4o-mini</td>
                  <td className="border border-slate-300 px-4 py-2 text-center font-mono font-semibold">0.73</td>
                  <td className="border border-slate-300 px-4 py-2 text-sm font-semibold">최고 다양성, 다양한 유사 문제 추천 가능 (최종 선택)</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-4 py-2">Ollama-mistral</td>
                  <td className="border border-slate-300 px-4 py-2 text-center font-mono">0.81</td>
                  <td className="border border-slate-300 px-4 py-2 text-sm">로컬 실행 가능, 낮은 다양성</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-slate-500 mt-2">* 유사도가 낮을수록 문제 간 다양성이 높아 더 넓은 범위의 유사 문제 추천 가능</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-slate-900">AI / MLOps Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {aiProjects.map(project => (
            <ProjectCard key={project.id} project={project} onNavigate={onNavigate} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AIPortfolio;
