import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { personalInfo, projectsData } from '@utils/constants';
import './PDFPortfolio.css';

interface PDFPortfolioProps {
  portfolioType?: 'backend' | 'fullstack' | 'ai' | 'all';
  onNavigate?: (tab: string) => void;
}

const PDFPortfolio: React.FC<PDFPortfolioProps> = ({ portfolioType = 'all', onNavigate }) => {
  // 카테고리별 프로젝트 필터링
  const backendProjects = projectsData.filter(p => 
    p.category.includes('Backend') || p.category.includes('IoT')
  );
  const fullstackProjects = projectsData.filter(p => 
    p.category.includes('IoT') || p.category.includes('Frontend')
  );
  const aiProjects = projectsData.filter(p => 
    p.category.includes('AI') || p.category.includes('MLOps') || p.category.includes('LLM')
  );

  const shouldShowBackend = portfolioType === 'all' || portfolioType === 'backend';
  const shouldShowFullstack = portfolioType === 'all' || portfolioType === 'fullstack';
  const shouldShowAI = portfolioType === 'all' || portfolioType === 'ai';

  return (
    <div className="pdf-container bg-white text-black">
      {/* 뒤로가기 버튼 - 출력 시 숨김 */}
      {onNavigate && (
        <div className="fixed top-4 left-4 z-50 print:hidden">
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-lg hover:bg-slate-50 transition-colors border border-slate-200"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">뒤로가기</span>
          </button>
        </div>
      )}

      {/* Backend 포트폴리오 페이지 */}
      {shouldShowBackend && (
      <section className="pdf-page pdf-page--cover">
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-emerald-200">
            <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Backend Engineer</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-emerald-600 pb-2">가치관</h2>
            <div className="space-y-3">
              <p className="text-gray-700 leading-relaxed">{personalInfo.philosophy}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>사용자 중심 개발:</strong> 기술은 수단이지 목적이 아니며, 최종 사용자의 경험을 개선하는 것이 목표입니다.</li>
                <li><strong>코드 품질:</strong> 유지보수 가능한 코드, 테스트 커버리지, 문서화를 통해 협업 효율을 높입니다.</li>
                <li><strong>지속적 학습:</strong> 기술 트렌드를 파악하고, 새로운 도구와 방법론을 프로젝트에 적용합니다.</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-emerald-600 pb-2">Backend Tech Stack</h2>
            <div className="space-y-4">
              {[
                { name: 'Spring Boot / JPA', level: 4, desc: '복잡한 도메인 로직 격리 및 트랜잭션/동시성 제어 아키텍처 구현' },
                { name: 'FastAPI / Django', level: 4, desc: 'Async-Sync Bridge 기반 고성능 비동기 API 설계' },
                { name: 'PostgreSQL / MySQL', level: 3, desc: '데이터 무결성 보장을 위한 스키마 설계 및 쿼리 최적화' },
                { name: 'WebSocket / MQTT', level: 3, desc: 'IoT 디바이스 제어를 위한 실시간 메시징 프로토콜 설계' },
                { name: 'Docker / Jenkins', level: 3, desc: '자동화된 배포 파이프라인 구축 및 빌드/배포 환경 최적화' }
              ].map(skill => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-gray-700">{skill.name}</span>
                    <span className="text-xs font-bold text-emerald-600">Lv {skill.level}</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-1">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-emerald-600 pb-2">목표</h2>
            <div className="space-y-3">
              <p className="text-gray-700 text-sm leading-relaxed">{personalInfo.goals?.backend}</p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
                <li>IoT/시뮬레이션 백엔드: MQTT·WebSocket·HTTP를 결합해 Unity 기반 스마트홈 시뮬레이터와 서버를 연동하는 백엔드 설계 및 구현(Moodify)</li>
                <li>도메인 중심 API 설계: Spring Boot·FastAPI 기반으로 향수 제조(노트/레시피·디바이스 제어)와 HRV 분석, Git 워크플로우 자동화 등의 도메인 모델·RESTful API 설계 및 구현(Moodrop, HRV 파이프라인, MCP Git 툴)</li>
                <li>시스템·워크플로우 자동화: Jenkins·Docker·MLflow·DVC·MCP 등을 활용해 모델 실험 관리, 데이터 파이프라인, Git 커밋/푸시 자동화 등 백엔드 작업 흐름을 자동화하는 시스템 구축</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-emerald-600 pb-2">연락처</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> {personalInfo.email}</p>
              <p><strong>GitHub:</strong> {personalInfo.github}</p>
            </div>
          </div>

          <div className="experience-section">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-emerald-600 pb-2">Experience & Awards</h2>
            <div className="mt-6 space-y-4">
              <div className="border-l-4 border-emerald-500 pl-4 py-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">삼성청년SW·AI 아카데미 (SSAFY) for AI</h3>
                  <span className="text-sm text-gray-600">2025.01 ~ 2025.12</span>
                </div>
                <p className="text-sm text-gray-700">Python, Java, Spring Boot, SQL 학습 / 팀 프로젝트 3회 수행 / AI·백엔드 통합 실습</p>
              </div>
              <div className="border-l-4 border-emerald-500 pl-4 py-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">삼성청년SW·AI 아카데미 (SSAFY) 공통 프로젝트 수상</h3>
                  <span className="text-sm text-gray-600">2025.08</span>
                </div>
                <p className="text-sm text-gray-700">IoT 향수 제조 플랫폼 (Moodrop)</p>
              </div>
              <div className="border-l-4 border-emerald-500 pl-4 py-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">부산대학교 광메카트로닉스공학과</h3>
                  <span className="text-sm text-gray-600">2016.03 ~ 2022.02</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Backend 프로젝트 페이지 */}
      {shouldShowBackend && (
      <section className="pdf-page">
        <h1 className="text-3xl font-bold mb-8 text-center border-b-2 border-emerald-600 pb-4">
          Backend Projects
        </h1>
        <div className="space-y-6">
          {backendProjects.map((project, index) => (
            <div key={project.id} className="project-section">
              <div className="mb-4">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span className="bg-emerald-100 px-3 py-1 rounded">{project.category}</span>
                  <span>{project.date}</span>
                  <span className="bg-blue-100 px-3 py-1 rounded">{project.status}</span>
                </div>
                {project.role && (
                  <p className="text-sm text-gray-700 italic mb-2">
                    <strong>역할:</strong> {project.role}
                  </p>
                )}
                <p className="text-sm text-gray-700 mb-3 leading-loose">{project.desc}</p>
              </div>

              <div className="mb-3">
                <h3 className="text-base font-bold mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 6).map(t => (
                    <span key={t} className="px-2 py-0.5 bg-gray-100 border border-gray-300 rounded text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {(project.pdfDetails || project.details) && (project.pdfDetails || project.details)!.length > 0 && (
                <div className="mb-3">
                  <h3 className="text-base font-bold mb-2">Key Highlights</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-700 leading-loose">
                    {(project.pdfDetails || project.details?.slice(0, 3) || []).map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.issues && project.issues.length > 0 && (
                <div className="mb-3">
                  <h3 className="text-base font-bold mb-2">Problem Solving</h3>
                  <div className="text-xs bg-gray-50 p-3 rounded space-y-2">
                    <p className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-1">
                      {project.issues[0].title}
                    </p>
                    
                    <div>
                      <span className="font-bold text-gray-700 block mb-0.5">Cause (Why)</span>
                      <p className="text-gray-600 leading-relaxed mb-1.5">{project.issues[0].cause}</p>
                    </div>

                    <div>
                      <span className="font-bold text-gray-700 block mb-0.5">Solution (How)</span>
                      <p className="text-gray-600 leading-relaxed mb-1.5">{project.issues[0].solution}</p>
                    </div>

                    <div>
                      <span className="font-bold text-gray-700 block mb-0.5">Result (Effect)</span>
                      <p className="text-gray-600 leading-relaxed">{project.issues[0].result}</p>
                    </div>
                  </div>
                </div>
              )}

              {index < backendProjects.length - 1 && (
                <div className="my-6 border-b-2 border-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </section>
      )}

      {/* Full-stack 포트폴리오 페이지 */}
      {shouldShowFullstack && (
      <section className="pdf-page">
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-indigo-200">
            <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Full-stack Engineer</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            프론트엔드부터 백엔드, 인프라까지 전체 스택을 이해하고 연결합니다.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-indigo-600 pb-2">Full-stack Tech Stack</h2>
            <div className="space-y-4">
              {[
                { name: 'React / TypeScript', level: 3, desc: 'React Hooks, 상태 관리, TypeScript 타입 안정성, Tailwind CSS 스타일링' },
                { name: 'Spring Boot / FastAPI', level: 3, desc: 'RESTful API 설계, JPA/SQLAlchemy ORM, 비동기 처리' },
                { name: 'MySQL / PostgreSQL', level: 3, desc: 'DB 스키마 설계, 트랜잭션 관리, 쿼리 최적화' },
                { name: 'Unity / IoT', level: 2, desc: 'Unity 시뮬레이터 연동, MQTT 프로토콜 통신, 실시간 상태 동기화' },
                { name: 'Docker / CI/CD', level: 3, desc: 'Docker 컨테이너화, Jenkins 파이프라인, AWS 배포' }
              ].map(skill => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-gray-700">{skill.name}</span>
                    <span className="text-xs font-bold text-indigo-600">Lv {skill.level}</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-1">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-indigo-600 pb-2">Why Full-stack?</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              서비스의 전체 흐름을 이해하면, 더 나은 설계 결정을 내릴 수 있습니다. 
              프론트엔드에서 어떤 데이터가 필요한지 알면 백엔드 API를 효율적으로 설계할 수 있고, 
              백엔드의 제약을 이해하면 프론트엔드에서 적절한 캐싱과 상태 관리를 할 수 있습니다.
            </p>
          </div>

          <div className="experience-section">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-indigo-600 pb-2">Experience & Awards</h2>
            <div className="mt-6 space-y-4">
              <div className="border-l-4 border-indigo-500 pl-4 py-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">삼성청년SW·AI 아카데미 (SSAFY) for AI</h3>
                  <span className="text-sm text-gray-600">2025.01 ~ 2025.12</span>
                </div>
                <p className="text-sm text-gray-700">Python, Java, Spring Boot, SQL 학습 / 팀 프로젝트 3회 수행 / AI·백엔드 통합 실습</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4 py-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">삼성청년SW·AI 아카데미 (SSAFY) 공통 프로젝트 수상</h3>
                  <span className="text-sm text-gray-600">2025.08</span>
                </div>
                <p className="text-sm text-gray-700">IoT 향수 제조 플랫폼 (Moodrop)</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4 py-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">부산대학교 광메카트로닉스공학과</h3>
                  <span className="text-sm text-gray-600">2016.03 ~ 2022.02</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Full-stack 프로젝트 페이지 */}
      {shouldShowFullstack && (
      <section className="pdf-page">
        <h1 className="text-3xl font-bold mb-8 text-center border-b-2 border-indigo-600 pb-4">
          Full-stack Projects
        </h1>
        <div className="space-y-6">
          {fullstackProjects.map((project, index) => (
            <div key={project.id} className="project-section">
              <div className="mb-4">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span className="bg-indigo-100 px-3 py-1 rounded">{project.category}</span>
                  <span>{project.date}</span>
                  <span className="bg-blue-100 px-3 py-1 rounded">{project.status}</span>
                </div>
                {project.role && (
                  <p className="text-sm text-gray-700 italic mb-2">
                    <strong>역할:</strong> {project.role}
                  </p>
                )}
                <p className="text-sm text-gray-700 mb-3 leading-loose">{project.desc}</p>
              </div>

              <div className="mb-3">
                <h3 className="text-base font-bold mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 6).map(t => (
                    <span key={t} className="px-2 py-0.5 bg-gray-100 border border-gray-300 rounded text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {(project.pdfDetails || project.details) && (project.pdfDetails || project.details)!.length > 0 && (
                <div className="mb-3">
                  <h3 className="text-base font-bold mb-2">Key Highlights</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-700 leading-loose">
                    {(project.pdfDetails || project.details?.slice(0, 3) || []).map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.issues && project.issues.length > 0 && (
                <div className="mb-3">
                  <h3 className="text-base font-bold mb-2">Problem Solving</h3>
                  <div className="text-xs bg-gray-50 p-3 rounded space-y-2">
                    <p className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-1">
                      {project.issues[0].title}
                    </p>
                    
                    <div>
                      <span className="font-bold text-gray-700 block mb-0.5">Cause (Why)</span>
                      <p className="text-gray-600 leading-relaxed mb-1.5">{project.issues[0].cause}</p>
                    </div>

                    <div>
                      <span className="font-bold text-gray-700 block mb-0.5">Solution (How)</span>
                      <p className="text-gray-600 leading-relaxed mb-1.5">{project.issues[0].solution}</p>
                    </div>

                    <div>
                      <span className="font-bold text-gray-700 block mb-0.5">Result (Effect)</span>
                      <p className="text-gray-600 leading-relaxed">{project.issues[0].result}</p>
                    </div>
                  </div>
                </div>
              )}

              {index < fullstackProjects.length - 1 && (
                <div className="my-6 border-b-2 border-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </section>
      )}

      {/* AI 포트폴리오 페이지 */}
      {shouldShowAI && (
      <section className="pdf-page">
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-200">
            <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-5xl font-bold mb-4">AI Engineer</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            모델을 만드는 것을 넘어, 데이터 전처리부터 배포·모니터링까지 전체 파이프라인을 설계합니다.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-purple-600 pb-2">AI/ML Tech Stack</h2>
            <div className="space-y-4">
              {[
                { name: 'Python / Pandas / NumPy', level: 4, desc: '대용량 데이터 전처리 및 분석 파이프라인 최적화' },
                { name: 'Scikit-learn / ML', level: 4, desc: '계층적 이진 분류 모델 학습 및 성능 평가 프로세스 구축' },
                { name: 'LangChain', level: 4, desc: 'LLM 애플리케이션 개발 및 컨텍스트 관리 구현' },
                { name: 'RAG', level: 4, desc: '벡터 DB 기반 검색 증강 생성 시스템 아키텍처 설계' },
                { name: 'MLflow', level: 3, desc: '실험 추적 및 모델 생명주기(Lifecycle) 관리' },
                { name: 'DVC', level: 3, desc: '대용량 데이터셋 버전 관리 및 실험 재현성 확보' },
                { name: 'PyArrow', level: 3, desc: '고성능 데이터 I/O 처리 및 메모리 효율화' },
                { name: 'FastAPI', level: 4, desc: 'AI 모델 서빙을 위한 고성능 비동기 API 서버 개발' }
              ].map(skill => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-gray-700">{skill.name}</span>
                    <span className="text-xs font-bold text-purple-600">Lv {skill.level}</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-1">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-purple-600 pb-2">Why AI?</h2>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <p className="font-semibold text-gray-900">모델 성능만으로는 부족합니다</p>
              <p>
                AI는 모델 성능을 높이는 것만으로 끝나지 않습니다. 
                실제 서비스로 만들려면 데이터 수집, 전처리, 특징 추출, 실험 관리, 배포, 모니터링까지 
                전체 파이프라인을 구축해야 합니다.
              </p>
              <p className="font-semibold text-gray-900 mt-3">저의 강점: End-to-End 파이프라인 구축</p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>NapSync: 생체 신호 전처리 → HRV 피처 추출 → 모델 학습 → MLflow 실험 관리 → DVC 데이터 버전 관리</li>
                <li>Belcro: 문서 크롤링 → LangChain 파싱 → Pinecone 임베딩 → RAG API → Jenkins CI/CD</li>
              </ul>
            </div>
          </div>

          <div className="experience-section">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-purple-600 pb-2">Experience & Awards</h2>
            <div className="mt-6 space-y-4">
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">삼성청년SW·AI 아카데미 (SSAFY) for AI</h3>
                  <span className="text-sm text-gray-600">2025.01 ~ 2025.12</span>
                </div>
                <p className="text-sm text-gray-700">Python, Java, Spring Boot, SQL 학습 / 팀 프로젝트 3회 수행 / AI·백엔드 통합 실습</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">삼성청년SW·AI 아카데미 (SSAFY) 공통 프로젝트 수상</h3>
                  <span className="text-sm text-gray-600">2025.08</span>
                </div>
                <p className="text-sm text-gray-700">IoT 향수 제조 플랫폼 (Moodrop)</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">부산대학교 광메카트로닉스공학과</h3>
                  <span className="text-sm text-gray-600">2016.03 ~ 2022.02</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* AI 프로젝트 페이지 */}
      {shouldShowAI && (
      <section className="pdf-page">
        <h1 className="text-3xl font-bold mb-8 text-center border-b-2 border-purple-600 pb-4">
          AI / MLOps Projects
        </h1>
        <div className="space-y-6">
          {aiProjects.map((project, index) => (
            <div key={project.id} className="project-section">
              <div className="mb-4">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span className="bg-purple-100 px-3 py-1 rounded">{project.category}</span>
                  <span>{project.date}</span>
                  <span className="bg-blue-100 px-3 py-1 rounded">{project.status}</span>
                </div>
                {project.role && (
                  <p className="text-sm text-gray-700 italic mb-2">
                    <strong>역할:</strong> {project.role}
                  </p>
                )}
                <p className="text-sm text-gray-700 mb-3 leading-loose">{project.desc}</p>
              </div>

              <div className="mb-3">
                <h3 className="text-base font-bold mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 6).map(t => (
                    <span key={t} className="px-2 py-0.5 bg-gray-100 border border-gray-300 rounded text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {(project.pdfDetails || project.details) && (project.pdfDetails || project.details)!.length > 0 && (
                <div className="mb-3">
                  <h3 className="text-base font-bold mb-2">Key Highlights</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-700 leading-loose">
                    {(project.pdfDetails || project.details?.slice(0, 3) || []).map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.issues && project.issues.length > 0 && (
                <div className="mb-3">
                  <h3 className="text-base font-bold mb-2">Problem Solving</h3>
                  <div className="text-xs bg-gray-50 p-3 rounded space-y-2">
                    <p className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-1">
                      {project.issues[0].title}
                    </p>
                    
                    <div>
                      <span className="font-bold text-gray-700 block mb-0.5">Cause (Why)</span>
                      <p className="text-gray-600 leading-relaxed mb-1.5">{project.issues[0].cause}</p>
                    </div>

                    <div>
                      <span className="font-bold text-gray-700 block mb-0.5">Solution (How)</span>
                      <p className="text-gray-600 leading-relaxed mb-1.5">{project.issues[0].solution}</p>
                    </div>

                    <div>
                      <span className="font-bold text-gray-700 block mb-0.5">Result (Effect)</span>
                      <p className="text-gray-600 leading-relaxed">{project.issues[0].result}</p>
                    </div>
                  </div>
                </div>
              )}

              {index < aiProjects.length - 1 && (
                <div className="my-6 border-b-2 border-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </section>
      )}
    </div>
  );
};

export default PDFPortfolio;
