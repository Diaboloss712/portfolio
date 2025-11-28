import React from 'react';
import { Server, Layers, Printer, ArrowLeft } from 'lucide-react';
import { SiSpring, SiFastapi, SiPostgresql, SiMqtt, SiDocker } from 'react-icons/si';
import Button from '@components/Button';
import ProjectCard from './ProjectCard';
import { projectsData } from '@utils/constants';

interface BackendPortfolioProps {
  onNavigate: (tab: string, projectId?: number) => void;
}

const BackendPortfolio: React.FC<BackendPortfolioProps> = ({ onNavigate }) => {
  const backendProjects = projectsData.filter(p => 
    p.category.includes('Backend') || p.category.includes('IoT')
  );

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* \ub4a4\ub85c\uac00\uae30 & PDF \ucd9c\ub825 \ubc84\ud2bc */}
      <div className="flex justify-between items-center print:hidden">
        <Button 
          variant="ghost" 
          onClick={() => onNavigate('/portfolio')}
          className="gap-2"
        >
          <ArrowLeft size={16} />
          포트폴리오 목록
        </Button>
        <Button 
          variant="outline" 
          onClick={() => window.print()}
          className="gap-2"
        >
          <Printer size={16} />
          출력하기
        </Button>
      </div>

      {/* Hero Section */}
      <section className="text-center py-12 space-y-6">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-emerald-100 shadow-lg">
          <img 
            src="/profile.jpg" 
            alt="Profile"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.innerHTML = '<div class="w-full h-full bg-emerald-100 flex items-center justify-center"><svg class="w-16 h-16 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div>';
              }
            }}
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Backend Engineer
        </h1>
        <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-['Pretendard']">
          확장 가능한 백엔드 아키텍처 설계와 도메인 로직 구현에 집중합니다.
          <br></br>
          SpringBoot와 FastAPI를 활용한 RESTful API와 MQTT 기반 IoT 디바이스 연동 경험이 있습니다.
        </p>
      </section>

      {/* Experience & Awards */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-200">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-3">
          <Layers className="w-6 h-6 text-emerald-600" />
          Experience & Awards
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-emerald-100">
            <div className="grid grid-cols-[140px_1fr] gap-4">
              <div className="text-sm font-mono text-emerald-600">2025.01 ~ 2025.12</div>
              <div>
                <h3 className="font-bold text-slate-900">삼성청년SW·AI 아카데미 (SSAFY) for AI</h3>
                <p className="text-sm text-slate-600 mt-1">Python, Java, Spring Boot, SQL 학습 / 팀 프로젝트 3회 수행 / AI·백엔드 통합 실습</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-emerald-100">
            <div className="grid grid-cols-[140px_1fr] gap-4">
              <div className="text-sm font-mono text-emerald-600">2025.08</div>
              <div>
                <h3 className="font-bold text-slate-900">삼성청년SW·AI 아카데미 (SSAFY) 공통 프로젝트 수상</h3>
                <p className="text-sm text-slate-600 mt-1">IoT 향수 제조 플랫폼 (Moodrop)</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-emerald-100">
            <div className="grid grid-cols-[140px_1fr] gap-4">
              <div className="text-sm font-mono text-emerald-600">2016.03 ~ 2022.02</div>
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
          <Server className="w-6 h-6 text-emerald-600" />
          Backend Tech Stack
        </h2>
        <div className="space-y-8">
          {[
            { 
              name: 'Spring Boot / JPA', 
              level: 3,
              icon: <SiSpring className="w-5 h-5 text-green-600" />,
              desc: ['Moodrop 프로젝트에서 향수 노트(Top/Middle/Base) 구성 규칙을 JPA 엔티티로 모델링하고, 비율 검증 로직을 서비스 레이어에 구현하였습니다.', 'MQTT 디바이스 제어 시 CompletableFuture를 활용한 비동기 응답 대기 및 타임아웃 처리를 구현하여 실시간성을 확보하였습니다.']
            },
            { 
              name: 'FastAPI / Django', 
              level: 3,
              icon: <SiFastapi className="w-5 h-5 text-teal-600" />,
              desc: ['Belcro 프로젝트에서 LangChain과 Pinecone을 연동한 RAG API 서버를 FastAPI로 구축하여 Bootstrap 문서 기반 코드 생성 기능을 구현하였습니다.', 'Moodify 프로젝트에서 MQTT 브로커와 WebSocket 서버를 FastAPI에 통합하여 Unity 시뮬레이터와 웹 프론트 간 실시간 양방향 통신을 구현하였습니다.']
            },
            { 
              name: 'PostgreSQL / MySQL', 
              level: 3,
              icon: <SiPostgresql className="w-5 h-5 text-blue-600" />,
              desc: ['Moodrop 프로젝트에서 향수 레시피, 사용자, 제조 이력 간 관계를 ER 다이어그램으로 설계하고 외래키 제약조건으로 데이터 무결성을 보장하였습니다.', '인덱스를 적절히 설정하여 조회 성능을 최적화하고, 트랜잭션 격리 수준을 이해하여 동시성 제어를 구현하였습니다.']
            },
            { 
              name: 'WebSocket / Mqtt', 
              level: 3,
              icon: <SiMqtt className="w-5 h-5 text-purple-600" />,
              desc: ['Moodify 프로젝트에서 MQTT QoS 레벨을 메시지 종류별로 차등화(일반 메시지 QoS 0, commit 메시지 QoS 1)하여 실시간성과 신뢰성을 균형있게 확보하였습니다.', 'WebSocket 세션을 (device_type, device_id) 키로 관리하여 특정 디바이스 상태 변화 시 해당 클라이언트에만 선택적으로 브로드캐스트하였습니다.']
            },
            { 
              name: 'Docker / Jenkins', 
              level: 3,
              icon: <SiDocker className="w-5 h-5 text-sky-600" />,
              desc: ['Belcro 프로젝트에서 Jenkins 파이프라인을 구축하여 Git Push 시 자동으로 Docker 이미지를 빌드하고 배포하는 CI/CD 워크플로우를 구현하였습니다.', 'Dockerfile 다단계 빌드와 환경변수 스코프를 stage 내부로 최소화하여 보안을 강화하고, Credential 플러그인으로 민감 정보를 안전하게 관리하였습니다.']
            }
          ].map(skill => (
            <div key={skill.name}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                </div>
                <span className="text-sm font-bold text-emerald-600">Lv {skill.level}</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-3">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-1000"
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
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Why Backend?</h2>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <h3 className="text-lg font-semibold text-slate-900 mt-4">서비스의 핵심, 비즈니스 로직</h3>
          <p>
            백엔드는 서비스의 핵심 비즈니스 로직이 구현되는 곳입니다.
            <br></br>
            안정적인 서비스 유지의 중요성을 알고 있으며, 새로운 기술을 도입할 때 트레이드오프를 고려하는 것을 중요하게 생각합니다.
          </p>
          
          <h3 className="text-lg font-semibold text-slate-900 mt-6">Moodrop: 도메인 모델링과 IoT 연동</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>비즈니스 로직 캡슐화:</strong> 향수 노트(Top/Middle/Base) 구성 규칙을 JPA 엔티티와 서비스 레이어로 캡슐화. Top 20%, Middle 30%, Base 50% 최소 비율 보장 로직 구현</li>
            <li><strong>MQTT 프로토콜 설계:</strong> 향료 슬롯·용량·순서를 표현하는 PerfumeProtocol 설계, 제조 명령을 MQTT 메시지로 인코딩</li>
            <li><strong>동시성 제어:</strong> In-flight 패턴으로 중복 요청 방지 (putIfAbsent/remove/timeout 조합)</li>
            <li><strong>실시간 모니터링:</strong> 제조 완료 시 MQTT 결과를 WebSocket으로 푸시, 대시보드에서 진행 상황 실시간 추적</li>
          </ul>

          <h3 className="text-lg font-semibold text-slate-900 mt-6">Moodify: MQTT QoS 최적화</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>문제 인식:</strong> QoS 1로 모든 메시지 전송 → ACK 대기로 인한 통신 지연 발생</li>
            <li><strong>해결 전략:</strong> 일반 제어 메시지는 QoS 0으로 빠르게 전송, 마지막(commit) 메시지만 QoS 1로 전송하여 최종 상태 확실히 전달</li>
            <li><strong>결과:</strong> 실시간성과 신뢰성을 모두 확보하는 통신 전략 구현</li>
          </ul>

          <h3 className="text-lg font-semibold text-slate-900 mt-6">MCP Test 플랫폼: 확장 가능한 아키텍처</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>TDD/BDD 개발:</strong> 테스트 주도로 문제은행 기능 구현 → 유저 기능 추가 → 정답률 통계 확장 가능한 개방형 구조 설계</li>
            <li><strong>도메인 분리:</strong> 인증(auth) 도메인을 유저(user)에서 분리 → 인증 로직 변경이 유저 도메인에 영향 최소화</li>
            <li><strong>비동기 전환:</strong> 동기→비동기 전환 시 Session Race Condition 해결 (의존성 오버라이드, NullPool, scope='function')</li>
          </ul>

          <h3 className="text-lg font-semibold text-slate-900 mt-6">Belcro: DevOps 관점의 인프라 개선</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Jenkins 파이프라인 보안:</strong> 환경변수 스코프를 stage 내부로 최소화, 민감 정보는 Credential로 분리</li>
            <li><strong>성능 최적화:</strong> Pandas → PyArrow 마이그레이션으로 데이터 로딩 시간 84% 개선 (2.5초 → 0.4초)</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Backend Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {backendProjects.map(project => (
            <ProjectCard key={project.id} project={project} onNavigate={onNavigate} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BackendPortfolio;
