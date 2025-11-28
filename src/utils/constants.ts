export interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  github: string;
  intro: string;
  tagline?: string;
  philosophy?: string;
  goals?: {
    backend?: string;
    ai?: string;
  };
}

export interface Project {
  id: number;
  title: string;
  category: string;
  role?: string;
  desc: string;
  tech: string[];
  status: string;
  date: string;
  link?: string;
  image?: string;
  details?: string[];
  // 상세 페이지용 추가 필드
  projectType?: 'personal' | 'team';
  teamSize?: string;
  myRole?: string;
  overview?: string;
  techReason?: string[];
  issues?: { 
    title: string; 
    cause?: string;
    solution: string;
    result?: string;
    comparison?: string;
  }[];
  retrospect?: string[];
  images?: {
    overview?: string[];
    details?: string[];
    issues?: string[];
  };
}

export interface NavItem {
  id: string;
  label: string;
  path: string;
}

export interface Categories {
  portfolio: string[];
  til: string[];
}

export const personalInfo: PersonalInfo = {
  name: "여병규",
  role: "Backend & AI Engineer",
  email: "diaboloss217@gmail.com",
  github: "https://github.com/Diaboloss712",
  intro: "HRV 기반 수면 분석, IoT, AI/DevOps 파이프라인을 직접 설계·구현해 온 풀스택형 백엔드·AI 엔지니어 지망생",
  tagline: "사용자 경험과 성능을 최우선으로 하는 백엔드·AI 엔지니어",
  philosophy: "기능 구현을 목표로 하는 것만이 아닌, 사용자 편의성(UX)과 성능을 고려한 시스템 설계를 지향합니다.",
  goals: {
    backend: "IoT·AI 워크플로우를 연결하는 백엔드 시스템 설계 및 구현 경험",
    ai: "MLOps 전문 지식을 기반으로 파이프라인 구축, 모델 학습 경험을 통해 모델 성능 향상, 데이터 분석을 통한 인사이트 도출"
  }
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: "NapSync - PPG 데이터 기반 수면 단계 예측 서비스",
    category: "AI/MLOps",
    role: "ECG/PPG 신호 전처리부터 HRV 피처 추출, 모델링, 실험·데이터 버전 관리까지 전체 파이프라인 설계·구현",
    desc: "스마트워치의 PPG 데이터를 활용하여 수면 단계를 자동 분류하는 서비스",
    tech: ["Python", "CatBoost", "Mamba/LSTM", "MLflow", "DVC", "AWS S3", "NeuroKit2"],
    status: "Completed",
    date: "2025.10 ~ 2025.11",
    image: "/projects/hrv-sleep.png",
    projectType: "team",
    teamSize: "6명 (프론트 2명, 백엔드 1명, AI 3명)",
    myRole: `- MLflow를 통한 성능 분석 자동화 파이프라인 구축
- DVC와 S3를 활용하여 원본 데이터셋 및 전처리 데이터셋 관리
- ECG/PPG 신호에서 HRV 피처 추출 로직 구현
- CatBoost + Mamba 혼합 모델 설계 및 학습
- MLflow 실험 관리 및 DVC + AWS S3 데이터 버전 관리`,
    overview: `웨어러블 기기에서 수집한 생체 신호(PPG)를 활용하여 수면 단계를 자동 분류하는 서비스입니다.
PhysioNet 공개 데이터셋(ECG)을 활용하여 R-peak 검출, HRV 피처 추출, 분류 모델 학습, 시퀀스 보정까지 전체 과정을 구현하였습니다.
다양한 그래디언트 부스팅 모델과 시계열 모델들을 학습시킨 후에 성능을 비교한 결과, CatBoost와 XGBoost, LSTM, Mamba 모델을 선택하였습니다.
CatBoost로 1차 분류를 수행한 후, Mamba/LSTM 시퀀스 모델로 수면 단계 전이 구간의 오분류를 보정하는 2-stage 파이프라인을 설계하였습니다.
MLflow로 실험을 체계적으로 관리하고, DVC + AWS S3로 대용량 생체 신호 데이터를 버전 관리하였습니다.`,
    techReason: [
      "Python: 생체 신호 처리(NeuroKit2), 데이터 분석(Pandas/NumPy), 머신러닝(CatBoost/PyTorch)을 한 언어로 통합하여 End-to-End 파이프라인 구축에 최적이었습니다. Jupyter Notebook으로 실험 과정을 시각화하였습니다.",
      "CatBoost: Gradient Boosting 기반으로 정형 데이터(HRV 피처)에 강점을 가지며, HRV 시간/주파수/비선형 피처를 효과적으로 학습하였습니다. 하이퍼파라미터 튜닝 없이도 높은 성능을 보였으며, GPU 가속을 지원하였습니다.",
      "Mamba/LSTM: 수면 단계는 시간적 의존성이 존재 (예: REM → Light → Deep 순서)하므로 시퀀스 모델로 전이 구간 오분류를 보정하였습니다. Mamba는 LSTM 대비 긴 시퀀스 처리에 유리하여 30분 윈도우 분석이 가능하였습니다.",
      "MLflow: 실험별 하이퍼파라미터, 성능 지표, Confusion Matrix를 자동 로깅하여 여러개의 실험을 동시 비교 분석할 수 있었습니다. UI로 실험 결과를 시각화하여 최적 모델을 선택하였습니다.",
      "DVC + AWS S3: 생체 신호 EDF 파일(수 GB)을 Git으로 관리가 불가능하여 DVC로 데이터 버전 관리, AWS S3에 원격 저장하였습니다. 데이터셋 변경 이력 추적 및 재현 가능한 실험 환경을 구축하였습니다."
    ],
    details: [
      "PhysioNet EDF 신호를 25Hz→100Hz로 리샘플링 후 R-peak/PPG peak를 검출하였고, 30초 세그먼트 + 5분 윈도우(30초 stride) 구조로 시간·주파수·비선형 HRV 피처를 자동 추출하였습니다.",
      "전처리: 이상치 제거, 보간, 정규화 등 다양한 전처리 조합을 실험하였고, 최적 조합을 발견하여 성능을 개선하였습니다.",
      "모델 성능 개선: 시계열 모델 Accuracy 0.5634→0.6174 (9.6%↑), F1-macro 0.5293→0.5924 (11.9%↑) / Tumblr 모델 Accuracy 0.4776→0.5720 (19.8%↑), F1-macro 0.4653→0.5556 (19.4%↑)",
      "CatBoost 분류 + Mamba/LSTM 시퀀스 보정 모델로 수면 단계 전이 구간 오분류를 감소시켰고, GroupKFold(피험자 단위) 검증 전략으로 데이터 누수를 방지하였습니다.",
      "상용 웨어러블(PPG CSV) 적용: CatBoost+Mamba 모델이 삼성 헬스 대비 43.1% 일치도를 기록하였고, 실제 데이터 검증을 완료하였습니다."
    ],
    issues: [
      {
        title: "피험자 간 데이터 누수 문제",
        cause: "초기에는 단순 KFold를 사용하여 같은 피험자의 데이터가 train/test에 모두 포함되어 성능을 과대평가하였습니다. 한 피험자의 수면 패턴이 일관성이 있어, train에서 학습한 패턴이 test에서 그대로 나타나 일반화 성능이 아닌 특정 피험자에 과적합된 성능을 측정하게 되었습니다.",
        solution: "GroupKFold를 적용하여 피험자 단위로 데이터를 분할하였습니다. 특정 피험자의 데이터는 train 또는 test 중 한 곳에만 포함되도록 하여, 모델이 학습 중 본 적 없는 새로운 피험자의 데이터로 평가받도록 설계하였습니다.",
        result: "GroupKFold 적용 후 Accuracy가 0.72→0.62로 감소하였으나, 이는 실제 일반화 성능을 반영한 것입니다. 새로운 피험자에 대한 수면 단계 분류가 가능함을 확인하였고, 상용 웨어러블 데이터 검증 시 43.1% 일치율을 달성하였습니다.",
        comparison: "KFold(피험자 혼재) 대비 GroupKFold(피험자 분리)는 평가 성능은 낮아졌으나, 실제 서비스 적용 시 신뢰할 수 있는 성능 지표를 제공하였습니다."
      },
      {
        title: "수면 단계 전이 구간의 높은 오분류율",
        cause: "CatBoost 단독 사용 시 각 30초 세그먼트를 독립적으로 분류하여, 전이 구간(Light→Deep, Deep→REM 등)에서 시간적 맥락을 고려하지 못해 오분류가 빈번하였습니다. 실제 수면은 단계가 급격히 변하지 않으나 모델은 이를 학습하지 못했습니다.",
        solution: "CatBoost 1차 분류 후 Mamba/LSTM 시퀀스 모델로 2-stage 파이프라인을 구축하였습니다. Mamba/LSTM은 이전/이후 30초 세그먼트의 수면 단계를 참조하여 전이 구간의 오분류를 보정하였습니다. 윈도우 크기를 5분(10개 세그먼트)으로 설정하여 시간적 의존성을 학습하였습니다.",
        result: "2-stage 파이프라인 적용 후 F1-macro score가 0.5293→0.5924 (11.9% 향상)되었습니다. 특히 Light↔Deep 전이 구간의 오분류율이 23%→15%로 감소하였습니다.",
        comparison: "CatBoost 단독 모델 대비 2-stage 파이프라인은 F1-score 11.9% 향상, 전이 구간 오분류율 35% 감소 효과를 보였습니다."
      },
      {
        title: "대용량 EDF 파일의 Git 관리 어려움",
        cause: "생체 신호 EDF 파일이 피험자당 평균 500MB~1GB로, 전체 데이터셋이 수십 GB에 달해 Git에 올리기에는 용량 제한(100MB)을 초과하였습니다. Git LFS도 고려했으나 팀원 간 데이터 동기화 속도가 느려 비효율적이었습니다.",
        solution: "DVC(Data Version Control)로 데이터 버전 관리를 수행하고, AWS S3를 원격 저장소로 설정하였습니다. .dvc 파일(메타데이터)만 Git에 커밋하고, 실제 데이터는 S3에 저장하였습니다. `dvc pull` 명령으로 필요한 버전의 데이터를 S3에서 다운로드하는 워크플로우를 구축하였습니다.",
        result: "Git 저장소 크기를 10GB→50MB로 99.5% 감소시켰고, 팀원 간 데이터 동기화 시간이 20분→2분으로 단축되었습니다. 데이터 버전별 실험 재현이 가능해져 MLflow 실험 결과와 데이터 버전을 1:1 매칭할 수 있었습니다.",
        comparison: "Git LFS 대비 DVC+S3는 다운로드 속도 90% 향상, 저장소 크기 99.5% 감소 효과를 보였습니다."
      }
    ],
    retrospect: [
      "MLflow + DVC 조합으로 실험 재현성을 확보하는 과정에서 체계적인 실험 관리의 중요성을 학습하였습니다.",
      "CatBoost(정형 데이터) + Mamba/LSTM(시퀀스 보정) 하이브리드 모델 설계로 도메인 특성에 맞는 아키텍처 선택 능력을 향상시켰습니다.",
      "상용 웨어러블 데이터로 검증하며 연구 프로젝트를 실제 서비스에 적용하는 과정의 어려움과 중요성을 체감하였습니다."
    ],
    images: {
      details: [
        "/projects/CatB + Mamba Matrix.png",
        "/projects/CNN + LSTM Matrix.png",
        "/projects/XGB Matrix.png"
      ]
    }
  },
  {
    id: 2,
    title: "Moodrop – IoT 향수 제조·관리 플랫폼",
    category: "IoT/Backend",
    role: "향수 제조기와 백엔드를 연결하는 프로토콜 설계 및 향수 노트/레시피 관련 핵심 비즈니스 로직 구현",
    desc: "사용자 맞춤형 향수 제조를 위한 레시피 관리 및 하드웨어 제어 플랫폼",
    tech: ["Spring Boot", "JPA", "MySQL", "MQTT", "WebSocket"],
    status: "Completed",
    date: "2025.07 ~ 2025.08",
    image: "/projects/moodrop.png",
    projectType: "team",
    teamSize: "6명 (백엔드 2명, 프론트 1명, 임베디드 3명)",
    myRole: `백엔드 개발 및 IoT 디바이스 연동 담당
- 향수 제조 디바이스와 백엔드 서버 간 MQTT 통신 프로토콜 설계 및 구현
- 향수 레시피 도메인 모델링 및 비즈니스 로직 구현
- 향수 로그 관련 도메인 설계 담당
- WebSocket 기반 실시간 대시보드 연동`,
    overview: `Moodrop은 사용자가 원하는 분위기에 맞는 노트를 추천 및 제조하는 IoT 플랫폼입니다.
MQTT를 통한 디바이스 제어와 WebSocket을 통한 실시간 상태 모니터링을 구현하였습니다.
향수는 Top/Middle/Base 노트로 구성되며, 각 노트별 비율을 계산하여 사용자 맞춤 레시피를 생성하였습니다.
기기의 상태는 MQTT로 조회 및 로그로 관리하며, 제조 완료 시 WebSocket을 통해 클라이언트에 즉시 알림을 전송하였습니다.`,
    techReason: [
      "Spring Boot: 기존 백엔드 팀원이 Java 기반 프로젝트 경험만 보유하여 팀 협업 효율성을 위해 Spring Boot를 선택하였습니다. JPA를 통한 객체지향적 도메인 모델링으로 향수 노트/레시피 비즈니스 로직을 직관적으로 표현하였습니다.",
      "MySQL: 관계형 DB가 필요했으며, 시간이 촉박하여 팀원 모두 경험이 있는 MySQL을 선택하였습니다. 향수 레시피, 제조 이력, 사용자 데이터 간 명확한 관계를 스키마로 정의하여 데이터 무결성을 보장하였습니다.",
      "MQTT: 임베디드 디바이스와의 경량 통신이 필요하여 MQTT 프로토콜을 선택하였습니다.",
      "WebSocket: 제조 완료시 실시간 알람을 프론트엔드에 전달하기 위해 WebSocket을 선택하였습니다."
    ],
    details: [
      "향료 슬롯·용량·순서를 표현하는 PerfumeProtocol을 설계하였고, Spring Boot에서 제조 요청을 MQTT 메시지로 인코딩하여 제조기에 전송하는 로직을 구현하였습니다.",
      "Top/Middle/Base 노트별 최소 비율을 보장하며 전체 합 100% 계산 로직을 작성하였고, 노트 조합을 제조기 레시피로 매핑하는 서비스 계층을 설계하였습니다.",
      "임베디드 중복 응답 방어: putIfAbsent()로 동시 명령을 차단하고, remove()로 완료 신호 일회성 처리를 보장하였으며, timeout()으로 무응답 시 잠금을 자동 해제하는 In-flight 패턴을 구현하였습니다.",
      "제조 완료 시 MQTT 결과를 WebSocket으로 실시간 푸시하였고, 제조 진행 상태를 DB에 로깅하고 대시보드로 모니터링하였습니다.",
      "JUnit 기반 단위 테스트를 작성하였으며, 핵심 비즈니스 로직을 검증하였습니다."
    ],
    issues: [
      {
        title: "임베디드 디바이스의 중복 응답 처리 문제",
        cause: "MQTT로 디바이스에 명령을 전송할 때, 네트워크 지연이나 재전송으로 인해 동일한 응답이 여러 번 수신되는 상황이 발생하였습니다. CorrelationId 설정 없이 응답을 처리하다 보니, 같은 명령에 대해 중복 처리가 발생하여 DB에 동일한 제조 이력이 여러 번 저장되는 문제가 있었습니다.",
        solution: "ConcurrentHashMap 기반 In-flight 패턴을 구현하였습니다. 명령 전송 시 고유 ID를 생성하고 putIfAbsent()로 동일 ID의 동시 요청을 차단하였으며, 응답 수신 시 remove()로 완료 신호를 일회성으로 처리하도록 보장하였습니다. 또한 CompletableFuture.orTimeout()을 활용해 무응답 시 3초 후 자동으로 잠금을 해제하여 데드락을 방지하였습니다.",
        result: "중복 응답 처리가 완전히 차단되어 DB 무결성이 확보되었고, 타임아웃 처리로 무응답 시에도 시스템이 정상적으로 복구되는 것을 확인하였습니다.",
        comparison: "In-flight 패턴 적용 전에는 10회 테스트 중 3회 정도 중복 저장이 발생했으나, 적용 후 100회 이상 테스트에서 중복이 0회로 감소하였습니다."
      },
      {
        title: "향수 노트 비율 계산 로직의 복잡성",
        cause: "향수는 Top/Middle/Base 노트로 구성되며, 각 노트는 최소 비율(20%, 30%, 50%)을 보장해야 하는 비즈니스 규칙이 있었습니다. 사용자가 선택한 향료들을 이 규칙에 맞게 자동 배분하는 알고리즘이 복잡하여, 컨트롤러에서 직접 처리하면 코드 가독성과 테스트 가능성이 떨어지는 문제가 있었습니다.",
        solution: "비즈니스 로직을 서비스 계층으로 분리하고, RecipeCalculator 클래스로 캡슐화하였습니다. 각 노트별 최소 비율을 먼저 할당한 후 남은 비율을 사용자 선택에 따라 배분하는 알고리즘을 설계하고, JUnit 단위 테스트로 다양한 케이스(노트 부족, 최소 비율 위반 등)를 검증하였습니다.",
        result: "비즈니스 로직이 명확하게 분리되어 코드 가독성이 향상되었고, 단위 테스트 커버리지가 80% 이상으로 증가하여 안정성이 확보되었습니다."
      },
      {
        title: "크롤링 작업 지연으로 인한 일정 압박",
        cause: "프로젝트 초반에 향료 데이터 크롤링을 계획했으나, 웹사이트의 복잡한 구조와 동적 로딩으로 인해 예상보다 2주가 추가 소요되었습니다. 6주 프로젝트 중 2주가 크롤링에 소모되어 남은 4주 내에 핵심 기능 구현이 어려워지는 상황이 발생하였습니다.",
        solution: "팀 회의를 통해 필수 기능과 부가 기능을 재정의하고, 크롤링 데이터를 축소하여 MVP(Minimum Viable Product)에 집중하기로 결정하였습니다. 일부 향료 정보는 외부 API로 대체하고, 핵심 제조 기능과 IoT 연동에 우선순위를 두어 개발하였습니다.",
        result: "MVP를 기한 내에 완성하였고, 핵심 기능인 향수 제조와 MQTT 디바이스 제어가 정상적으로 동작하는 것을 확인하였습니다. 다만 초기 계획 대비 향료 데이터베이스 규모가 축소되었습니다.",
        comparison: "크롤링 완전 포기 시 외부 API 의존도가 100%가 되었을 것이나, 최소 크롤링으로 60%의 자체 데이터를 확보하여 서비스 안정성을 유지하였습니다."
      }
    ],
    retrospect: [
      "IoT 디바이스와 백엔드 서버를 MQTT로 연동하며 하드웨어-소프트웨어 통합 경험을 쌓았습니다.",
      "초반 프로토콜 설계에 미흡한 점이 있어 보완을 하다보니 메인 로직도 수정하는 경우가 많아 시간 소요가 많았습니다.",
      "기기 간 통신을 할 때 CorrelationId를 설정하지 않은 상태에 같은 응답이 여러번 오는 등의 문제를 마주하면서 문제를 어떻게 해결해야할지 고민하였고, 통신간 ID 설정의 중요성을 알 수 있었습니다.",
      "비즈니스 로직을 도메인 모델과 서비스 계층으로 분리하여 객체지향 설계 원칙을 실천. 향수 레시피 계산 로직을 테스트 가능한 형태로 구현하였습니다.",
      "일정 관리 실패 경험을 통해 초기 기획 단계에서 리스크 요소(크롤링 난이도, 외부 의존성 등)를 충분히 검토하는 것의 중요성 학습하였습니다.",
    ]
  },
  {
    id: 3,
    title: "Belcro – Bootstrap RAG 시스템",
    category: "AI/LLM",
    role: "Bootstrap 문서 기반 RAG 파이프라인 설계 및 대용량 문서 처리 성능 최적화",
    desc: "Bootstrap 문서 기반 RAG 시스템 구축 및 대용량 데이터 처리 최적화",
    tech: ["Python", "LangChain", "Pinecone", "FastAPI", "PyArrow", "Jenkins", "Docker"],
    status: "Refactoring",
    date: "2025.07 ~ 2025.08",
    link: "https://github.com/Diaboloss712/Belcro",
    image: "/projects/belcro.png",
    projectType: "personal",
    teamSize: "개인 프로젝트",
    myRole: `AI/백엔드 개발 및 성능 최적화 담당
- Bootstrap 공식 문서 크롤링 및 RAG 파이프라인 설계
- LangChain 기반 문서 파싱, Pinecone 벡터 인덱싱 구현
- Pandas → PyArrow 마이그레이션으로 데이터 로딩 성능 84% 개선
- Jenkins + Docker CI/CD 파이프라인 구축 및 보안 강화`,
    overview: `Belcro는 Bootstrap 공식 문서를 학습하여 사용자 질문에 답변하는 RAG(Retrieval-Augmented Generation) 시스템입니다.
크롤링한 문서를 섹션·컴포넌트 단위로 파싱하고, Pinecone 벡터 DB에 임베딩하여 유사도 기반 검색을 수행하였습니다.`,
    techReason: [
      "Python: 크롤링(BeautifulSoup) + AI(LangChain) + 데이터 처리(Pandas/PyArrow)를 한 언어로 통합하여 개발 생산성을 극대화하였습니다. 라이브러리 생태계가 풍부하여 RAG 파이프라인 구축에 최적이었습니다.",
      "FastAPI: Django보다 가볍고 비동기 처리가 최적화되어 있어 선택하게 되었습니다. Pydantic 기반 자동 검증으로 타입 안정성을 확보하였습니다.",
      "Pinecone: PostgreSQL + pgvector 대비 스키마 자유도가 높고 설정이 간편하여 벡터 인덱싱/검색 전용 솔루션으로 성능이 우수하였습니다. 네임스페이스 기능으로 문서 버전 관리가 용이하였습니다.",
      "PyArrow: Pandas 대비 I/O가 최적화되어 데이터 로딩 시간을 2.5초에서 0.4초로 84% 단축하였습니다. 필요한 컬럼만 읽어들여 메모리 사용량을 감소시켰습니다.",
      "Docker + Jenkins: 코드 푸시 시 자동 빌드·배포 파이프라인을 구축하여 수동 배포 시간을 절감하였습니다."
    ],
    details: [
      "Pandas → PyArrow 마이그레이션으로 데이터 로딩 시간을 84% 개선 (2.5초 → 0.4초)하였고, 필요 컴럼만 읽어 I/O를 최적화하여 쿼리 응답 시간을 단축하였습니다.",
      "FastAPI RAG 백엔드 API를 구현하였고, Jenkins + Docker 파이프라인을 구성하여 코드 푸시 시 자동 빌드·배포를 수행하였습니다.",
      "Jenkins 환경변수 스코프를 최소화하고 민감 정보는 Credential로 분리하여 파이프라인 보안을 강화하였습니다."
    ],
    issues: [
      {
        title: "저사양 인스턴스에서 데이터 로딩 성능 문제",
        cause: "AWS 프리티어 t2.micro 인스턴스(1GB RAM)에서 Pandas를 사용해 Bootstrap 문서 CSV 파일(200MB+)을 로딩할 때, 설치 자체가 실패하거나 로딩에 2.5초 이상 소요되었습니다. 메모리 부족으로 인해 서버 응답 시간이 지연되고, 일부 요청에서는 타임아웃이 발생하는 문제가 있었습니다.",
        solution: "Pandas를 PyArrow로 전환하였습니다. read_csv() 대신 PyArrow의 read_table()을 사용하고, 필요한 컬럼만 선택적으로 읽는 방식으로 메모리 사용량을 감소시켰습니다. 또한 Parquet 포맷으로 데이터를 저장하여 압축률과 I/O 성능을 최적화하였습니다.",
        result: "데이터 로딩 시간이 2.5초에서 0.4초로 84% 개선되었고, 저사양 인스턴스에서도 안정적으로 설치 및 실행되는 것을 확인하였습니다. 메모리 사용량이 약 60% 감소하여 서버 응답 시간이 1초 이내로 단축되었습니다.",
        comparison: "Pandas 사용 시 평균 응답 시간 3.2초, PyArrow 적용 후 0.6초로 81% 개선되었으며, 타임아웃 발생률이 15%에서 0%로 감소하였습니다."
      },
    ],
    retrospect: [
      "RAG 시스템 구축 전 과정(크롤링-파싱-임베딩-검색-생성)을 직접 설계하며 LLM 기반 서비스 아키텍처 이해도를 향상시켰습니다.",
      "성능 병목 지점을 프로파일링하고 PyArrow로 최적화하는 과정에서 데이터 I/O 최적화의 중요성을 학습하였습니다.",
    ]
  },
  {
    id: 4,
    title: "MCP 기반 Git 워크플로우 자동화",
    category: "AI/DevOps",
    role: "MCP 서버 구현 및 LLM이 Git 워크플로우를 단계별 툴로 호출할 수 있는 구조 설계",
    desc: "LLM이 코드 변경 사항을 이해하고 직접 Git 명령어를 실행하는 자동화 시스템",
    tech: ["FastAPI-MCP", "Ollama", "Python", "FastAPI"],
    status: "Prototype",
    date: "2025.04 ~ 2025.04",
    link: "https://github.com/Diaboloss712/MCP_Auto-GIt-Convention",
    image: "/projects/mcp-git.png",
    projectType: "personal",
    teamSize: "개인 프로젝트",
    myRole: `MCP 서버 설계 및 구현
- FastAPI-MCP 기반 MCP 프로토콜 서버 구현
- Ollama 로컬 LLM을 활용한 커밋 메시지 자동 생성 로직 구현
- Conventional Commit 형식 검증 및 자동 커밋 워크플로우 설계
- GitHub API 연동을 통한 일일 커밋 체크 기능 구현`,
    overview: `로컬 LLM(Ollama)을 활용하여 Git 변경사항을 분석하고 Conventional Commit 형식의 커밋 메시지를 자동 생성하는 MCP 서버입니다.
FastAPI-MCP를 사용하여 MCP 프로토콜을 구현하였고, 외부 클라이언트가 MCP 툴을 호출하여 Git 워크플로우를 자동화할 수 있도록 설계하였습니다.
Ollama의 Mistral 모델로 파일별 diff를 분석하여 커밋 메시지를 생성하고, Conventional Commit 규칙(feat, fix, docs 등)을 검증하여 규칙에 맞는 경우에만 커밋을 수행하였습니다.
GitHub API를 연동하여 일일 커밋 여부를 확인하고, 커밋이 없는 경우 자동으로 배치 커밋을 실행하는 기능을 구현하였습니다.`,
    techReason: [
      "FastAPI-MCP: 초기에 FastMCP 문서를 읽고 SSE 방식 구현에 어려움을 겪어 FastAPI-MCP 라이브러리를 선택하였습니다. FastAPI 기반으로 MCP 프로토콜을 쉽게 구현할 수 있었고, 웹 API와 MCP 툴을 동시에 제공할 수 있었습니다. 또한 fastapi-mcp는 fastapi가 제공하는 기능을 거의 그대로 사용할 수 있어 선택하였습니다.",
      "Ollama (Mistral): 외부 LLM(Claude, GPT 등)을 사용하는 대신 자체적으로 툴을 호출하고 사용하고 싶어 로컬 LLM을 선택하였습니다. Ollama의 Mistral 모델은 경량화되어 있으면서도 충분한 성능을 제공하여 커밋 메시지 생성에 적합하였습니다.",
      "Python: Git 명령어 실행(subprocess), HTTP 통신(httpx), 파일 I/O를 하나의 언어로 처리할 수 있어 선택하였습니다. FastAPI와의 통합이 자연스러웠고, MCP SDK도 Python을 지원하였습니다."
    ],
    details: [
      "FastAPI-MCP를 사용하여 MCP 프로토콜 서버를 구축하였고, Git diff 조회, 커밋 메시지 생성, Conventional Commit 검증, commit/push 실행 등을 툴로 분리하였습니다.",
      "Ollama Mistral 모델에 파일별 diff와 엄격한 프롬프트(타입 제한, 72자 제한, 소문자 규칙 등)를 제공하여 Conventional Commit 형식 준수율을 향상시켰습니다.",
      "생성된 커밋 메시지에서 마크다운 코드 블록(```)과 불필요한 따옴표를 제거하는 후처리 로직을 구현하여 형식 오류를 방지하였습니다.",
      "GitHub API를 활용하여 사용자의 일일 커밋 이벤트를 조회하고, 커밋이 없는 경우 자동으로 배치 커밋을 실행하는 스케줄링 기능을 구현하였습니다."
    ]
  },
  {
    id: 5,
    title: "Moodify – 스마트홈·로봇 IoT 시뮬레이션",
    category: "IoT/Simulation",
    role: "Unity 기반 스마트홈 시뮬레이터와 백엔드를 MQTT·WebSocket으로 연동",
    desc: "Unity 가상 환경에서 스마트홈 시나리오를 검증하는 시뮬레이션 플랫폼",
    tech: ["Unity", "FastAPI", "MQTT", "WebSocket", "SQLAlchemy", "PostgreSQL"],
    status: "Completed",
    date: "2025.08 ~ 2025.09",
    image: "/projects/moodify.png",
    projectType: "team",
    teamSize: "6명 (백엔드 2명, Unity 3명, 프론트 1명)",
    myRole: `백엔드 개발 및 IoT 통신 구조 설계
- FastAPI 기반 MQTT + WebSocket 양방향 통신 아키텍처 설계
- Capabilities 기반 동적 디바이스 제어 시스템 구현
- WebSocket 세션 관리 및 실시간 상태 브로드캠스트 기능 구현
- MQTT status 수신 시 Future 패턴을 활용한 비동기 응답 대기 메커니즘 구현`,
    overview: `Unity 가상 환경에서 스마트홈 디바이스를 시뮬레이션하고 제어하는 IoT 플랫폼입니다.
FastAPI 백엔드가 MQTT 브로커와 WebSocket 서버 역할을 동시에 수행하며, Unity 시뮬레이터와 웹 프론트엔드 간의 중간 계층 역할을 담당하였습니다.
디바이스 타입별 capabilities를 JSON으로 관리하여 동적으로 MQTT topic/payload를 생성하는 유연한 제어 시스템을 구축하였습니다.
Control 모드에서는 일반 메시지를 QoS 0으로 빠르게 전송하고, commit 메시지는 QoS 1로 전송하여 신뢰성을 확보하였습니다.
Future 패턴을 활용한 비동기 status 응답 대기 메커니즘으로 MQTT 제어 명령 후 3초 이내 status를 받지 못하면 타임아웃 처리하였습니다.`,
    techReason: [
      "FastAPI: AI 관련 API 호출이 예정되어 Python 기반이 적합하였고, 비동기 처리가 최적화되어 있어 MQTT/WebSocket 동시 처리에 적합하였습니다. uvicorn 비동기 서버로 고성능 실시간 통신을 구현하였습니다.",
      "MQTT: IoT 디바이스와의 경량 통신이 필요하여 선택하였습니다. QoS 레벨을 메시지 종류별로 차등화하여 실시간성과 신뢰성을 균형있게 확보하였습니다.",
      "WebSocket: 웹 프론트에 디바이스 상태 변화를 실시간으로 푸시하기 위해 선택하였습니다. 디바이스별로 WebSocket 세션을 관리하여 필요한 클라이언트에게만 브로드캠스트하였습니다.",
      "SQLAlchemy + PostgreSQL: 디바이스 메타데이터(capabilities, topics)와 reported status를 영구 저장하기 위해 선택하였습니다. 비동기 SQLAlchemy로 FastAPI와 원활하게 통합하였습니다."
    ],
    details: [
      "Unity↔MQTT↔FastAPI↔WebSocket↔웹 프론트 양방향 통신 아키텍처를 설계하여 Unity 시뮬레이터의 디바이스 상태를 웹 프론트에 실시간 동기화하였습니다.",
      "Capabilities 기반 동적 라우팅: 디바이스 타입별 controls/executes 규칙을 JSON으로 정의하고, 런타임에 {device_id}, {status} 등을 템플릿 치환하여 MQTT topic/payload를 생성하였습니다.",
      "WebSocket 세션 레지스트리: (device_type, device_id) 키로 WebSocket 세션 Set을 관리하고, MQTT status 수신 시 해당 디바이스에 연결된 모든 클라이언트에 브로드캠스트하였습니다.",
      "Future 패턴 비동기 응답 대기: _pending_status 딕셔너리에 Future 객체를 저장하고, MQTT 콜백에서 set_result()로 해제하여 비동기로 status 응답을 기다렸습니다. 3초 타임아웃 설정으로 무한 대기 방지하였습니다.",
      "MQTT QoS 차등화: phase!='commit' 메시지는 QoS 0(빠른 전송), phase='commit' 메시지는 QoS 1(신뢰성 보장)으로 전송하여 실시간성과 신뢰성을 균형있게 확보하였습니다."
    ],
    issues: [
      {
        title: "MQTT 콜백과 FastAPI 비동기 루프 분리 문제",
        cause: "MQTT 클라이언트(paho-mqtt)는 별도 쓰레드에서 동작하고, FastAPI는 asyncio 이벤트 루프에서 동작합니다. MQTT 콜백에서 SQLAlchemy 비동기 세션으로 DB를 직접 업데이트하려고 하면 'RuntimeError: Task attached to a different loop' 에러가 발생하며 세션 충돌이 발생하였습니다.",
        solution: "FastAPI 앱 시작 시 main_loop = asyncio.get_event_loop()로 이벤트 루프를 저장하고, MQTT 콜백에서 asyncio.run_coroutine_threadsafe(update_db(...), main_loop)로 코루틴을 FastAPI 루프에 제출하는 방식으로 구현하였습니다. 이를 통해 MQTT 쓰레드에서 FastAPI 루프의 비동기 함수를 안전하게 호출할 수 있게 하였습니다.",
        result: "MQTT 콜백에서 DB 업데이트가 안정적으로 동작하였고, 100+ 디바이스 상태 변경 테스트에서 세션 충돌이 0회 발생하였습니다.",
        comparison: "동기 세션 사용 시 충돌률 80% → 비동기 루프 제출 방식으로 0%로 감소하였습니다."
      },
      {
        title: "WebSocket 연결 끊김 감지 및 정리 문제",
        cause: "클라이언트가 브라우저를 닫거나 네트워크가 끊겼을 때, WebSocket 세션이 즉시 정리되지 않고 레지스트리에 남아있었습니다. 브로드캐스트 시 끊긴 연결에 메시지를 전송하려다 예외가 발생하고, 메모리 누수가 발생하는 문제가 있었습니다.",
        solution: "브로드캐스트 시 ws.send_json() 호출 중 예외가 발생하면 해당 WebSocket을 dead 리스트에 추가하고, 전송 완료 후 일괄적으로 레지스트리에서 제거하는 패턴을 구현하였습니다. 또한 unregister_ws()에서 Set이 비면 키 자체를 제거하여 메모리 누수를 방지하였습니다.",
        result: "WebSocket 연결 끊김이 즉시 감지되어 레지스트리가 깔끔하게 유지되었고, 메모리 누수가 해결되었습니다. 24시간 연속 운영 테스트에서 메모리 증가가 0MB로 안정적이었습니다.",
        comparison: "정리 로직 없을 때 1시간 운영 후 메모리 200MB 증가 → 정리 로직 적용 후 24시간 운영해도 메모리 증가 없음."
      },
      {
        title: "Capabilities 템플릿 파싱 오류 처리",
        cause: "Capabilities JSON에서 동적 라우팅 규칙을 정의할 때, requires 필드에 명시된 키가 실제 요청에 없거나, 템플릿 문자열 파싱 중 예외가 발생하면 서버가 500 에러를 반환하고 전체 요청이 실패하는 문제가 있었습니다.",
        solution: "requires 필드의 키가 없을 때는 ok=False로 표시하고 다음 규칙으로 넘어가는 fallback 로직을 구현하였습니다. 템플릿 파싱 예외는 try-except로 감싸고, {kind: 'error', code: 'TEMPLATE_ERROR', message: ...}로 클라이언트에 명확한 에러 응답을 전달하여 디버깅을 용이하게 하였습니다.",
        result: "템플릿 파싱 오류가 발생해도 서버가 안정적으로 동작하였고, 클라이언트가 명확한 에러 메시지를 받아 빠르게 대응할 수 있었습니다.",
        comparison: "오류 처리 전 템플릿 파싱 실패 시 서버 크래시 → 오류 처리 후 에러 응답으로 우아하게 처리."
      }
    ],
    retrospect: [
      "MQTT와 WebSocket을 동시에 다루며 실시간 양방향 통신 아키텍처 설계 경험을 쌓았습니다.",
      "Future 패턴으로 비동기 응답 대기 메커니즘을 구현하며 Python asyncio의 동시성 제어 기법을 학습하였습니다.",
      "Capabilities 기반 동적 라우팅으로 디바이스 타입 확장 시 코드 수정 없이 JSON 설정만 변경하는 유연한 설계를 경험하였습니다.",
      "MQTT 콜백 쓰레드와 FastAPI 이벤트 루프 분리 문제를 해결하며 멀티쓰레드 환경에서의 비동기 프로그래밍 노하우를 체등하였습니다."
    ]
  },
  {
    id: 6,
    title: "MCP 시험 플랫폼 백엔드",
    category: "Backend/AI",
    role: "유저 도메인 TDD 및 BDD 개발, Pinecone 벡터 DB 통합, 문제 도메인 Embedding 성능 테스트",
    desc: "FastAPI + SQLAlchemy + Pinecone 기반 시험 플랫폼 백엔드, 도메인 분리 및 벡터 검색 기능 통합",
    tech: ["FastAPI", "SQLAlchemy 2.0", "Pinecone", "Alembic", "PostgreSQL", "Docker"],
    status: "Refactoring",
    date: "2025.05 ~ 2025.08",
    link: "https://github.com/Diaboloss712/mcp-test-backend",
    image: "/projects/mcp-test.png",
    projectType: "team",
    teamSize: "2명 (백엔드 2명)",
    myRole: `백엔드 아키텍처 설계 및 TDD 개발
- FastAPI + SQLAlchemy 2.0 비동기 아키텍처 설계
- pytest 기반 TDD/BDD로 유저 도메인 구현
- Pinecone 벡터 DB 연동 및 임베딩 성능 테스트
- 도메인별 책임 분리 및 확장 가능한 구조 설계`,
    overview: `FastAPI + SQLAlchemy 2.0 + Pinecone 기반의 시험 플랫폼 백엔드로, TDD/BDD 방법론을 적용하여 개발하였습니다.
pytest로 단위 테스트를 먼저 작성하고 기능을 구현하는 TDD 방식으로 유저 도메인을 개발하였고, 향후 문제은행, 정답률 통계 등으로 확장 가능하도록 개방형 구조로 설계하였습니다.
인증(auth) 도메인을 유저(user)에서 분리하여 인증 로직 변경 시 유저 도메인 영향을 최소화하고, 각 도메인의 책임을 명확하게 분리하였습니다.
Pinecone 벡터 DB를 연동하여 문제 임베딩 유사도를 기반으로 유사 문제 추천 기능을 구현하였고, HyperClova, GPT-4o-mini, Ollama-mistral 임베딩을 비교하여 최적의 모델을 선택하였습니다.
SQLAlchemy 2.0 비동기 전환 과정에서 테스트 환경의 세션 충돌 문제를 NullPool과 scope='function'으로 격리하고, Alembic으로 DB 마이그레이션을 관리하였습니다.`,
    techReason: [
      "FastAPI: Python 기반으로 LLM API 호출과 백엔드 로직을 통합할 수 있고, 비동기 처리가 최적화되어 있어 선택하였습니다. Pydantic 기반 자동 검증으로 API 요청/응답 타입 안정성을 확보하였습니다.",
      "SQLAlchemy 2.0: 비동기 지원이 강화되어 FastAPI와 원활하게 통합할 수 있었고, 2.0 스타일의 명시적 쿠리 문법으로 코드 가독성을 향상시켰습니다. Alembic으로 DB 마이그레이션 버전 관리가 용이하였습니다.",
      "Pinecone: 벡터 검색 전용 DB로 PostgreSQL + pgvector 대비 설정이 간편하고 성능이 우수하여 선택하였습니다. 문제 임베딩 유사도 검색으로 유사 문제 추천 기능을 구현하였습니다.",
      "pytest: TDD/BDD 방법론을 적용하기 위해 선택하였습니다. fixture 기능으로 DB 세션을 테스트별로 격리하고, 파라미터화된 테스트로 다양한 케이스를 효율적으로 검증하였습니다."
    ],
    details: [
      "TDD/BDD 방법론 적용: pytest로 테스트 먼저 작성 → 기능 구현 → 리팩토링 순서로 개발하여 코드 품질과 테스트 커버리지를 확보하였습니다.",
      "도메인 분리: user, auth, question 도메인을 분리하여 repository-service-router 계층 구조로 설계하고, 각 도메인의 책임을 명확히 분리하여 유지보수성을 향상시켰습니다.",
      "SQLAlchemy 2.0 비동기 전환: 동기→비동기 전환 시 테스트 환경에서 Session.begin() 동시 호출로 충돌이 발생하여, pytest fixture에서 NullPool과 scope='function'으로 세션을 테스트별로 격리하였습니다.",
      "Pinecone 벡터 DB 연동: 문제 텍스트를 LLM으로 임베딩하여 Pinecone에 저장하고, 유사도 검색으로 유사 문제 추천 기능을 구현하였습니다.",
      "LLM 임베딩 성능 비교: HyperClova(0.77), GPT-4o-mini(0.73), Ollama-mistral(0.81) 임베딩 유사도를 비교하여 다양성이 높은 GPT-4o-mini를 선택하였습니다."
    ],
    issues: [
      {
        title: "pytest 테스트 환경에서 DB 세션 충돌",
        cause: "SQLAlchemy 1.4에서 2.0으로 비동기 전환 시, 동기 스타일의 Session.begin()을 비동기로 변경하는 과정에서 테스트 실행 시 세션 충돌이 발생하였습니다.",
        solution: "pytest fixture의 DB 세션 scope가 'module'로 설정되어 있어 여러 테스트가 동일한 세션을 공유하면서 Session.begin() 동시 호출로 충돌이 발생한다고 판단하였습니다. pytest fixture에서 의존성 오버라이드로 NullPool을 적용하고, scope='function'으로 변경하여 각 테스트마다 독립적인 세션을 생성하도록 수정하였습니다.",
        result: "각 테스트가 독립된 세션을 사용하여 세션 충돌이 해결되었고, 200+ 테스트가 안정적으로 통과하였습니다. 테스트 격리로 인해 실행 시간이 소폭 증가했으나, 안정성이 우선이므로 수용하였습니다."
      },
      {
        title: "Pinecone 임베딩 모델 선택 기준",
        cause: "문제 유사도 기반 추천 시스템 구축 시, HyperClova, GPT-4o-mini, Ollama-mistral 중 어떤 임베딩 모델을 사용할지 기준이 불명확하였습니다.",
        solution: "각 모델로 100개 문제를 임베딩한 후 코사인 유사도를 측정하여 평균 유사도를 비교하였습니다. 유사도가 낮을수록 문제 간 다양성이 높아 더 넓은 범위의 유사 문제를 추천할 수 있다고 판단하여, 유사도가 가장 낮은 모델을 선택하기로 결정하였습니다.",
        result: "HyperClova(0.77), GPT-4o-mini(0.73), Ollama-mistral(0.81) 순으로 측정되어, 다양성이 가장 높은 GPT-4o-mini를 최종 선택하였습니다. 실제 유사 문제 추천 시 중복성이 낮아지고 다양한 문제가 추천되는 것을 확인하였습니다.",
        comparison: "HyperClova 대비 GPT-4o-mini는 유사도 5.2% 낮음, Ollama-mistral 대비 9.9% 낮음으로, 문제 다양성에서 우위를 보였습니다."
      }
    ],
    retrospect: [
      "TDD/BDD 방법론을 실제 프로젝트에 적용하며 테스트 주도 개발의 장점을 체감하였습니다.",
      "SQLAlchemy 2.0 비동기 전환 과정에서 테스트 환경의 세션 격리 필요성을 학습하고, pytest fixture의 scope 설정이 테스트 안정성에 미치는 영향을 이해하였습니다.",
      "도메인 분리로 인증 로직 변경이 다른 도메인에 영향을 주지 않는 확장 가능한 구조를 설계하는 경험을 쌓았습니다.",
      "LLM 임베딩 모델 비교 실험을 통해 단순 정확도가 아닌 '다양성' 관점에서 모델을 선택하는 새로운 기준을 정립하였습니다."
    ]
  },
  {
    id: 7,
    title: "Personal Website",
    category: "Frontend",
    desc: "React + TypeScript + Supabase 기반 개인 포트폴리오 및 TIL 블로그. 실시간 데이터 동기화, 마크다운 지원.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vite"],
    status: "Live",
    date: "2025",
    image: "/projects/personal-website.png",
    projectType: "personal",
    teamSize: "개인 프로젝트"
  }
];

export const navigationItems: NavItem[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'til', label: 'TIL', path: '/til' },
  { id: 'pdf', label: '📄 PDF', path: '/pdf' }
];

export const categories: Categories = {
  portfolio: ["All", "AI", "Backend", "IoT", "LLM", "Frontend", "DevOps"],
  til: ["Backend", "Frontend", "AI/ML", "DevOps", "Database", "기타"]
};

export const statusColors: Record<string, string> = {
  'Completed': 'bg-blue-500',
  'Live': 'bg-emerald-500',
  'In Progress': 'bg-amber-500',
  'Refactoring': 'bg-orange-500',
  'Prototype': 'bg-purple-500',
  'Archived': 'bg-slate-400'
};
