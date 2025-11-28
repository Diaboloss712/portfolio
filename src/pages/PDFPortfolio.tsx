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
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-emerald-600 pb-2">목표</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-emerald-500 pl-4 py-2">
                <h3 className="text-lg font-bold mb-2 text-emerald-700">Backend Engineer</h3>
                <p className="text-gray-700 mb-2">{personalInfo.goals?.backend}</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    <li>IoT/시뮬레이션 백엔드: MQTT·WebSocket·HTTP를 결합해 Unity 기반 스마트홈 시뮬레이터와 서버를 연동하는 백엔드 설계 및 구현(Moodify)</li>
                    <li>도메인 중심 API 설계: Spring Boot·FastAPI 기반으로 향수 제조(노트/레시피·디바이스 제어)와 HRV 분석, Git 워크플로우 자동화 등의 도메인 모델·RESTful API 설계 및 구현(Moodrop, HRV 파이프라인, MCP Git 툴)</li>
                    <li>시스템·워크플로우 자동화: Jenkins·Docker·MLflow·DVC·MCP 등을 활용해 모델 실험 관리, 데이터 파이프라인, Git 커밋/푸시 자동화 등 백엔드 작업 흐름을 자동화하는 시스템 구축</li>
                </ul>
              </div>
              {/* <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="text-lg font-bold mb-2 text-purple-700">AI/MLOps Engineer</h3>
                <p className="text-gray-700 mb-2">{personalInfo.goals?.ai}</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  <li>모델 학습 파이프라인 자동화 (DVC, MLflow)</li>
                  <li>모델 배포 및 모니터링 시스템 구축</li>
                  <li>데이터 분석을 통한 비즈니스 인사이트 도출</li>
                </ul>
              </div> */}
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
                <p className="text-gray-700 mb-3">{project.desc}</p>
              </div>

              <div className="mb-3">
                <h3 className="text-lg font-bold mb-2">기술 스택</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.details && project.details.length > 0 && (
                <div className="mb-3">
                  <h3 className="text-lg font-bold mb-2">주요 내용</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.issues && project.issues.length > 0 && (
                <div className="mb-3">
                  <h3 className="text-lg font-bold mb-2">문제 해결</h3>
                  <div className="space-y-3">
                    {project.issues.map((issue, i) => (
                      <div key={i} className="text-sm">
                        <p className="font-semibold text-gray-800 mb-1">{i + 1}. {issue.title}</p>
                        {issue.cause && <p className="text-gray-700 pl-4 mb-1"><strong>원인:</strong> {issue.cause}</p>}
                        <p className="text-gray-700 pl-4 mb-1"><strong>해결:</strong> {issue.solution}</p>
                        {issue.result && <p className="text-gray-700 pl-4"><strong>결과:</strong> {issue.result}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.retrospect && project.retrospect.length > 0 && (
                <div className="mb-3">
                  <h3 className="text-lg font-bold mb-2">회고</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
                    {project.retrospect.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
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
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-indigo-600 pb-2">Why Full-stack?</h2>
            <p className="text-gray-700 leading-relaxed">
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
                <p className="text-gray-700 mb-3">{project.desc}</p>
              </div>

              <div className="mb-3">
                <h3 className="text-lg font-bold mb-2">기술 스택</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.details && project.details.length > 0 && (
                <div className="mb-3">
                  <h3 className="text-lg font-bold mb-2">주요 내용</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.issues && project.issues.length > 0 && (
                <div className="mb-3">
                  <h3 className="text-lg font-bold mb-2">문제 해결</h3>
                  <div className="space-y-3">
                    {project.issues.map((issue, i) => (
                      <div key={i} className="text-sm">
                        <p className="font-semibold text-gray-800 mb-1">{i + 1}. {issue.title}</p>
                        {issue.cause && <p className="text-gray-700 pl-4 mb-1"><strong>원인:</strong> {issue.cause}</p>}
                        <p className="text-gray-700 pl-4 mb-1"><strong>해결:</strong> {issue.solution}</p>
                        {issue.result && <p className="text-gray-700 pl-4"><strong>결과:</strong> {issue.result}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.retrospect && project.retrospect.length > 0 && (
                <div className="mb-3">
                  <h3 className="text-lg font-bold mb-2">회고</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
                    {project.retrospect.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
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
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-purple-600 pb-2">Why AI?</h2>
            <p className="text-gray-700 leading-relaxed">
              AI는 모델 성능을 높이는 것만으로 끝나지 않습니다. 
              실제 서비스로 만들려면 데이터 수집, 전처리, 특징 추출, 실험 관리, 배포, 모니터링까지 
              전체 파이프라인을 구축해야 합니다. 저는 이 전 과정을 직접 설계하고 구현하는 것에 관심이 많습니다.
            </p>
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
                <p className="text-gray-700 mb-3">{project.desc}</p>
              </div>

              <div className="mb-3">
                <h3 className="text-lg font-bold mb-2">기술 스택</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.details && project.details.length > 0 && (
                <div className="mb-3">
                  <h3 className="text-lg font-bold mb-2">주요 내용</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.issues && project.issues.length > 0 && (
                <div className="mb-3">
                  <h3 className="text-lg font-bold mb-2">문제 해결</h3>
                  <div className="space-y-3">
                    {project.issues.map((issue, i) => (
                      <div key={i} className="text-sm">
                        <p className="font-semibold text-gray-800 mb-1">{i + 1}. {issue.title}</p>
                        {issue.cause && <p className="text-gray-700 pl-4 mb-1"><strong>원인:</strong> {issue.cause}</p>}
                        <p className="text-gray-700 pl-4 mb-1"><strong>해결:</strong> {issue.solution}</p>
                        {issue.result && <p className="text-gray-700 pl-4"><strong>결과:</strong> {issue.result}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.retrospect && project.retrospect.length > 0 && (
                <div className="mb-3">
                  <h3 className="text-lg font-bold mb-2">회고</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
                    {project.retrospect.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
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
