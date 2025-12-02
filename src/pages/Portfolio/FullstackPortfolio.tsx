import React from 'react';
import { Globe, Layers, Server, Printer, ArrowLeft } from 'lucide-react';
import { SiReact, SiTypescript, SiTailwindcss, SiPostgresql, SiMysql, SiSpring, SiFastapi, SiDjango, SiMqtt } from 'react-icons/si';
import Button from '@components/Button';
import ProjectCard from './ProjectCard';
import { projectsData } from '@utils/constants';

interface FullstackPortfolioProps {
  onNavigate: (tab: string, projectId?: number) => void;
}

const FullstackPortfolio: React.FC<FullstackPortfolioProps> = ({ onNavigate }) => {
  const fullstackProjects = projectsData.filter(p => 
    p.category.includes('IoT') || p.category.includes('Frontend')
  );

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* 뒤로가기 & 출력 버튼 */}
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
        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg">
          <img 
            src="/profile.jpg" 
            alt="Profile"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.innerHTML = '<div class="w-full h-full bg-indigo-100 flex items-center justify-center"><svg class="w-16 h-16 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div>';
              }
            }}
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Full-stack Engineer
        </h1>
        <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-['Pretendard']">
          프론트엔드부터 백엔드, 인프라까지 전체 스택을 이해하고 연결합니다.
          React 기반 UI 구현과 Spring Boot API 서버 설계를 모두 경험하며, 사용자 경험과 서버 로직을 함께 고민합니다.
        </p>
      </section>

      {/* Experience & Awards */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-200">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-3">
          <Layers className="w-6 h-6 text-indigo-600" />
          Experience & Awards
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-teal-100">
            <div className="grid grid-cols-[140px_1fr] gap-4">
              <div className="text-sm font-mono text-teal-600">2025.01 ~ 2025.12</div>
              <div>
                <h3 className="font-bold text-slate-900">삼성청년SW·AI 아카데미 (SSAFY) for AI</h3>
                <p className="text-sm text-slate-600 mt-1">Python, Java, Spring Boot, SQL 학습 / 팀 프로젝트 3회 수행 / AI·백엔드 통합 실습</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-indigo-100">
            <div className="grid grid-cols-[140px_1fr] gap-4">
              <div className="text-sm font-mono text-indigo-600">2025.08</div>
              <div>
                <h3 className="font-bold text-slate-900">삼성청년SW·AI 아카데미 (SSAFY) 공통 프로젝트 수상</h3>
                <p className="text-sm text-slate-600 mt-1">IoT 향수 제조 플랫폼 (Moodrop)</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-indigo-100">
            <div className="grid grid-cols-[140px_1fr] gap-4">
              <div className="text-sm font-mono text-indigo-600">2016.03 ~ 2022.02</div>
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
          <Layers className="w-6 h-6 text-indigo-600" />
          Full-stack Tech Stack
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-6 flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Frontend
            </h3>
            <div className="space-y-6">
              {[
                { 
                  name: 'React / TypeScript', 
                  level: 2,
                  icon: (
                    <div className="flex gap-1">
                      <SiReact className="w-5 h-5 text-blue-500" />
                      <span className="text-slate-400">/</span>
                      <SiTypescript className="w-5 h-5 text-blue-600" />
                    </div>
                  ),
                  desc: ['현재 포트폴리오 사이트를 React + TypeScript + Vite로 구축하여 컴포넌트 기반 설계와 상태 관리 패턴을 학습하였습니다.', 'useState, useEffect 등 기본 Hooks를 활용한 상태 관리와 props drilling 최소화를 위한 컴포넌트 구조를 설계하였습니다.']
                },
                { 
                  name: 'Tailwind CSS', 
                  level: 3,
                  icon: <SiTailwindcss className="w-5 h-5 text-cyan-500" />,
                  desc: ['유틸리티 클래스를 활용한 반응형 디자인(md:, lg: 등)과 다크모드 대응 스타일링을 구현하였습니다.', 'Tailwind의 커스텀 테마 설정과 @apply 지시어를 활용한 재사용 가능한 컴포넌트 스타일링을 학습하였습니다.']
                }
              ].map(skill => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {skill.icon}
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                    </div>
                    <span className="text-sm font-bold text-indigo-600">Lv {skill.level}</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-3">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
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
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-6 flex items-center gap-2">
              <Server className="w-4 h-4" />
              Backend
            </h3>
            <div className="space-y-6">
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
                  icon: (
                    <div className="flex gap-1">
                      <SiFastapi className="w-5 h-5 text-teal-600" />
                      <span className="text-slate-400">/</span>
                      <SiDjango className="w-5 h-5 text-green-700" />
                    </div>
                  ),
                  desc: ['Moodify 프로젝트에서 MQTT 브로커와 WebSocket 서버를 FastAPI에 통합하여 Unity 시뮬레이터와 웹 프론트 간 실시간 양방향 통신을 구현하였습니다.', 'Capabilities 기반 동적 라우팅으로 디바이스 타입 확장 시 코드 수정 없이 JSON 설정만 변경하는 유연한 아키텍처를 설계하였습니다.']
                },
                { 
                  name: 'PostgreSQL / MySQL', 
                  level: 3,
                  icon: (
                    <div className="flex gap-1">
                      <SiPostgresql className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-400">/</span>
                      <SiMysql className="w-5 h-5 text-blue-500" />
                    </div>
                  ),
                  desc: ['Moodrop 프로젝트에서 향수 레시피, 사용자, 제조 이력 간 관계를 ER 다이어그램으로 설계하고 외래키 제약조건으로 데이터 무결성을 보장하였습니다.', '인덱스를 적절히 설정하여 조회 성능을 최적화하고, 트랜잭션 격리 수준을 이해하여 동시성 제어를 구현하였습니다.']
                },
                { 
                  name: 'WebSocket / Mqtt', 
                  level: 3,
                  icon: <SiMqtt className="w-5 h-5 text-purple-600" />,
                  desc: ['Moodify 프로젝트에서 Unity 시뮬레이터와 MQTT로 연동하고, WebSocket으로 웹 프론트에 실시간 상태를 전송하는 양방향 통신 구조를 설계하였습니다.', 'MQTT QoS 레벨을 메시지 종류별로 차등화하여 실시간성과 신뢰성을 균형있게 확보하고, Future 패턴으로 비동기 응답 대기를 구현하였습니다.']
                }
              ].map(skill => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {skill.icon}
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                    </div>
                    <span className="text-sm font-bold text-indigo-600">Lv {skill.level}</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-3">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
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
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">프론트엔드와 백엔드 모두 경험한 프로젝트</h2>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <h3 className="text-lg font-semibold text-slate-900 mt-4">전체 흐름을 이해하는 개발</h3>
          <p>
            백엔드 중심으로 개발하지만, 프론트엔드에서 어떤 데이터가 필요한지 이해하면 더 효율적인 API를 설계할 수 있습니다.
            <br></br>
            아래 프로젝트들은 백엔드 개발을 주도하면서도 프론트엔드와의 연동, 실시간 통신, IoT 디바이스 통합 등을 경험한 프로젝트입니다.
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

          <h3 className="text-lg font-semibold text-slate-900 mt-6">Personal Website: React + TypeScript + Supabase</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>컴포넌트 기반 설계:</strong> 재사용 가능한 UI 컴포넌트로 구조화하고, props drilling을 최소화한 상태 관리 구현</li>
            <li><strong>실시간 데이터 동기화:</strong> Supabase Realtime을 활용하여 TIL 게시글 작성 시 즉시 반영</li>
            <li><strong>마크다운 지원:</strong> react-markdown으로 TIL 블로그 콘텐츠 렌더링</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Full-stack Projects</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {fullstackProjects.map(project => (
            <ProjectCard key={project.id} project={project} onNavigate={onNavigate} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FullstackPortfolio;
