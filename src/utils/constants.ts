export interface PersonalInfo {
  name: string;
  role: string;
  phone: string;
  birthDate: string;
  email: string;
  address: string;
  github: string;
  portfolio: string;
  intro: string;
  tagline?: string;
  philosophy?: string;
  goals?: {
    backend?: string;
    ai?: string;
  };
}

export interface Education {
  id: number;
  period: string;
  school: string;
  major: string;
}

export interface Training {
  id: number;
  name: string;
  institution: string;
  period: string;
  content: string[];
}

export interface Activity {
  id: number;
  name: string;
  institution: string;
  period: string;
  content: string;
}

export interface Award {
  id: number;
  name: string;
  institution: string;
  date: string;
}

export interface Certificate {
  id: number;
  name: string;
  institution: string;
  date: string;
  issuer?: string;
}

export interface Language {
  id: number;
  name: string;
  testName: string;
  score: string;
  date: string;
}

export interface SWSkill {
  name: string;
  description: string;
}

export interface SelfIntro {
  id: number;
  question: string;
  answer: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  showInBackend?: boolean;
  role?: string;
  desc: string;
  tech: string[];
  status: string;
  date: string;
  link?: string;
  image?: string;
  details?: string[];
  pdfDetails?: string[]; // PDF 출력용 짧은 버전
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
  // New fields
  participation?: string;
  techEnv?: string;
  assignedRole?: string;
  performance?: string;
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
  role: "Backend Developer",
  phone: "010-3273-2756",
  birthDate: "1997.02.17",
  email: "diaboloss217@gmail.com",
  address: "서울특별시 관악구 남부순환로247나길 41 105호",
  github: "https://github.com/Diaboloss712",
  portfolio: "https://portfolio-lyart-rho-29.vercel.app",
  intro: "생체 신호 분석부터 인공지능 서비스 개발까지, 다양한 기술을 직접 연결하고 구현해 본 백엔드 개발자입니다.",
  tagline: "사용자가 편하게 쓸 수 있는 서비스를 만드는 백엔드 개발자",
  philosophy: "기능만 만드는 것이 아니라, 쓰는 사람이 편하고 성능도 좋은 시스템을 만들려고 노력합니다.",
  goals: {
    backend: "인공지능과 사물인터넷을 연결하는 튼튼한 서버 시스템을 만드는 것",
    ai: "데이터를 분석하여 더 똑똑한 인공지능 모델을 만들고, 이를 실제 서비스에 적용하는 것"
  }
};

export interface ResumeData {
  education: Education[];
  training: Training[];
  activities: Activity[];
  awards: Award[];
  certificates: Certificate[];
  languages: Language[];
  swSkills: SWSkill[];
  selfIntro: SelfIntro[];
  selectedProjectIds: number[];
}

export const resumeData: ResumeData = {
  education: [
    {
      id: 1,
      period: "2016.03 ~ 2022.02",
      school: "부산대학교",
      major: "광메카트로닉스공학"
    }
  ],
  training: [
    {
      id: 1,
      name: "삼성청년SW·AI 아카데미",
      institution: "삼성청년SW·AI 아카데미",
      period: "2025.01 ~ 2025.12",
      content: [
        "Python 심화 및 알고리즘 문제 해결 능력 함양",
        "Django를 활용한 웹 서버 개발 및 데이터베이스 설계",
        "이미지 처리 및 최신 인공지능 기술 학습과 실습",
        "Vue.js를 활용한 웹 화면 개발 경험",
        "Git과 Jira를 활용한 팀 협업 및 코드 리뷰 진행"
      ]
    },
    {
      id: 2,
      name: "패스트캠퍼스 핀테크 백엔드 과정",
      institution: "패스트캠퍼스",
      period: "2022.03 ~ 2022.10",
      content: [
        "Java, Spring Boot, JPA 기반 백엔드 개발 학습",
        "OpenAPI 활용 상품 추천 서비스, 쇼핑몰(오늘상점) 리뉴얼 프로젝트 수행"
      ]
    }
  ],
  activities: [
    {
      id: 1,
      name: "CS 스터디",
      institution: "삼성청년SW·AI 아카데미 (SSAFY)",
      period: "2025.02 ~ 2025.06",
      content: "컴퓨터의 기본 원리를 공부하고 서로 가르쳐주는 모임"
    },
    {
      id: 2,
      name: "BEE Track",
      institution: "부산대학교 공학교육혁신센터",
      period: "2020.06 ~ 2020.06",
      content: `3D 모델링 도구 사용법을 익히고 3D 프린터로 제작
아두이노를 활용한 신호 제어`
    }
  ],
  awards: [
    {
      id: 1,
      name: "SSAFY 13기 우수상: 사용자 맞춤 향수 제조 프로젝트",
      institution: "삼성청년SW·AI 아카데미",
      date: "2025.08"
    }
  ],
  certificates: [
    {
      id: 1,
      name: "운전면허증",
      institution: "도로교통공단",
      date: "2017.08"
    },
    {
      id: 2,
      name: "정보처리기사",
      institution: "한국산업인력공단",
      date: "2025.12"
    }
  ],
  languages: [
    {
      id: 1,
      name: "영어",
      testName: "TOEIC",
      score: "895",
      date: "2024.09"
    }
  ],
  swSkills: [
    {
      name: "Python 비동기 백엔드 & 성능 최적화",
      description: "FastAPI 기반 비동기 서버 개발과 성능 병목 분석 경험이 있습니다. PyArrow 지연 로딩으로 서버 메모리 93.5% 절감(114.8→7.49MB), httpx 비동기 전환으로 배치 처리 속도 5.5배 향상(11s→2s) 등 수치 기반 최적화를 실천합니다."
    },
    {
      name: "LLM 에이전트 & RAG 파이프라인",
      description: "LangGraph 멀티 에이전트(Supervisor-RAG-Context7-Code) 워크플로우 설계, A2A 프로토콜 기반 Agent Card Discovery와 Task/Artifact 구현, Pinecone 벡터 검색 및 confidence 산출, MCP 프로토콜 도구 서버 구축 등 LLM 서비스 전 과정을 경험했습니다."
    },
    {
      name: "AI 모델링 & MLOps",
      description: "시계열 생체 신호 기반 CatBoost 계층적 분류 모델을 설계하여 정확도를 51.4%→75.3%로 개선했습니다. MLflow 실험 관리, DVC 데이터 버전 관리, StratifiedGroupKFold 교차 검증 등 체계적 실험 환경을 구축합니다."
    },
    {
      name: "Java/Spring Boot & IoT 통신",
      description: "Spring Boot + MQTT 기반 IoT 기기 제어 서버를 구축하고, 중복 완료 신호 문제를 식별자 소거 방식으로 해결하여 데이터 중복 0건을 달성했습니다. WebSocket 실시간 상태 전달과 이벤트 루프 간 동시성 충돌 해결 경험이 있습니다."
    },
    {
      name: "테스트 주도 개발 & 품질 관리",
      description: "pytest fixture 기반 비동기 세션 격리 테스트 인프라를 설계하고, 14개 이상의 API/서비스 테스트 케이스를 작성했습니다. 3종 LLM(HyperClova/GPT-4o-mini/Mistral) 생성 품질 비교 실험으로 중복 회피 임계값을 정량적으로 수립한 경험이 있습니다."
    }
  ],
  selfIntro: [
    {
      id: 1,
      question: "1. 직무(기업) 지원 동기 및 입사 후 계획",
      answer: `[AI 서비스의 안정적 운영을 위한 백엔드 지원]
   스타트업의 백엔드 개발자는 AI 모델이 실제 서비스 환경에서 효율적으로 작동하도록 돕는 역할이라고 생각합니다. 귀사는 제조 현장의 데이터를 분석해 공정 효율을 높이는 솔루션을 제공하고 있습니다. 저는 NapSync와 MCP 프로젝트에서 AI 모델을 실제 기능으로 연결해보며, 복잡한 계산을 처리할 때 사용자가 기다리지 않게 하는 것이 얼마나 중요한지 배웠습니다. 귀사에서도 AI 모델이 끊김 없이 서비스될 수 있도록 튼튼한 백엔드 환경을 지원하고 싶어 지원했습니다.

   입사 직후에는 기존 코드에 테스트 기능을 더해 에러를 줄이고, 문서를 정리하여 팀 전체의 개발 속도를 높이는 데 집중하겠습니다. 이후에는 Python 서버의 성능을 개선하여 AI 모델의 응답 속도를 높이고, 배포 환경을 관리하며 인프라 운영 업무까지 돕겠습니다.`
    },
    {
      id: 2,
      question: "2. 스스로 높은 수준의 목표를 설정하고 열정적으로 달성한 경험",
      answer: `[계층적 분류 방식 도입으로 예측 성능 개선]
시계열 데이터 분석 프로젝트 NapSync를 진행할 때, 정해진 시간 안에 수면 단계 예측 정확도를 높여야 하는 과제가 있었습니다. 처음 만든 모델은 4가지 수면 단계를 한 번에 맞추려고 하다 보니, 비슷한 단계끼리 헷갈려서 정확도가 40%대에 머물렀습니다. 설정을 조금씩 바꾸는 것만으로는 기한 내에 목표를 달성하기 어렵다고 판단했습니다.

저는 모델이 문제를 푸는 순서를 바꿔보았습니다. 4가지를 한 번에 고르는 대신, 먼저 깨어있는지를 판단하고, 그 다음 REM 상태인지, 마지막으로 깊은 수면 상태인지를 순서대로 판별하였습니다. 이렇게 단계를 나누자 모델이 각 상황의 특징을 더 잘 찾아냈습니다. 그 결과 큰 수정 없이도 예측 성능을 유의미하게 개선할 수 있었습니다. 문제를 바라보는 관점을 조금만 바꿔도 좋은 결과를 낼 수 있다는 점을 배웠습니다.`
    },
    {
      id: 3,
      question: "3. 협업을 통해 공동의 목표를 달성한 경험",
      answer: `[기능 구현 범위 조정을 통한 프로젝트 마감 준수]
IoT 향수 제조 프로젝트 마감을 앞두고, 어디까지 개발할지를 두고 팀원과 의견이 달랐던 적이 있습니다. 백엔드 팀원은 완성도를 높이겠다며 사용자 리뷰 기능을 추가하려고 2주 동안 데이터를 모았지만, 예상치 못한 문제로 개발이 늦어지고 있었습니다. 저는 이대로 가다가는 정해진 날짜에 프로젝트를 보여주지 못할 것 같아 계획을 수정해야 한다고 생각했습니다.

저는 팀원에게 MVP 기능인 향수 제조 관련 기능을 가장 우선적으로 구현해야 한다고 설득했습니다. 불확실한 기능에 시간을 쓰기보다, 지금 불안한 기기 연결 문제를 해결해서 시연을 성공적으로 마치는 게 우선이라고 말했습니다.

팀원도 이에 동의하여 리뷰 기능을 빼고, 남은 시간을 기기 연결을 안정화하는 데 썼습니다. 덕분에 데모 데이에서 핵심 기능인 향수 제조가 멈춤 없이 작동하여 좋은 평가를 받았습니다. 시간이 부족할 때는 가장 중요한 핵심 기능에 집중하는 것이 프로젝트를 성공시키는 방법임을 깨달았습니다.`
    },
    {
      id: 4,
      question: "4. 직무 강점 및 관련 경험",
      answer: `[AI 협업에 특화된 Python 개발 및 인프라 역량]
여러 프로젝트를 거치며 팀에 바로 기여할 수 있는 세 가지 경험을 쌓았습니다.

첫째, AI 모델을 서비스로 만드는 경험입니다. NapSync와 MCP 프로젝트를 통해 AI 모델을 직접 학습시켜보고, 이를 다른 사람들이 사용할 수 있도록 연결해 본 적이 있습니다. 입력 데이터가 어떻게 생겼는지, 결과가 나올 때까지 얼마나 걸리는지 잘 알고 있어서, AI 팀이 원하는 것을 빠르게 만들어낼 수 있습니다.

둘째, 멈추지 않는 서버 개발 경험입니다. Moodrop 프로젝트에서 Java와 Spring Boot 기반으로 응답 지연이 있는 IoT 기기 제어 요청을 비동기 처리와 상태 추적으로 안정적으로 처리했습니다. 이는 계산량이 많은 AI 모델을 서비스할 때 서버가 멈추지 않게 하는 데 꼭 필요한 기술입니다.

셋째, 안정적인 운영을 위한 기본기입니다. 코드를 작성할 때 미리 테스트 코드를 짜서 에러를 예방하는 습관이 있으며, Docker를 사용해 개발 환경을 똑같이 구성할 수 있습니다. 입사 후 배포 환경을 세팅하거나 운영 중에 생기는 문제를 해결하는 데 앞장서겠습니다.`
    }
  ],
  selectedProjectIds: [1, 2, 3, 4]
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: "[기업 연계] NapSync - 시계열 생체 신호 기반 상태 예측 AI",
    category: "AI/MLOps",
    role: "AI 모델링 및 MLOps 파이프라인 구축",
    desc: "스마트워치 센서 데이터를 분석하여 수면 단계(Wake/REM/Light/Deep)를 예측하는 AI 모델 개발",
    tech: ["Python", "CatBoost", "MLflow", "StratifiedGroupKFold", "Mamba", "DVC", "NeuroKit2"],
    status: "Completed",
    date: "2025.10 ~ 2025.11",
    image: "/projects/hrv-sleep.png",
    projectType: "team",
    teamSize: "6명",
    participation: "6인",
    techEnv: "Python, Pandas, NumPy, Scikit-learn, CatBoost, PyTorch, MLflow, Mamba",
    assignedRole: "AI 모델링 및 MLOps 파이프라인 구축",
    performance: "단일 4-class 분류의 한계를 재정의해 Sleep/Wake → REM/NREM → N3/N1N2의 3단계 계층형 분류와 temporal correction 구조로 전환했고, 정확도를 51.4%에서 75.3%로 개선했습니다. 같은 방법을 반복하는 것보다 오류가 집중되는 구간을 기준으로 문제 구조를 다시 정의하는 것이 더 큰 성과를 만든다는 점을 배웠습니다.",
    link: "https://portfolio-lyart-rho-29.vercel.app/projects/1",
    overview: "기업 연계로 진행한 수면 단계 예측 AI 프로젝트입니다. per-epoch tabular feature를 기반으로 Wake/REM/N1N2/N3 4단계를 직접 분류하는 대신, Sleep/Wake, REM/NREM, N3/N1N2의 3단계 CatBoost 분류기로 문제를 재구성했습니다. 이후 Mamba 기반 temporal corrector로 시퀀스 확률을 보정했고, StratifiedGroupKFold와 group_zscore 전처리로 사용자 누수를 줄였습니다. 또한 MLflow로 전처리·모델 조합과 지표를 기록해 반복 실험과 결과 비교가 가능한 파이프라인을 운영했습니다.",
    techReason: [
      "Python/Pandas/NumPy: 생체 신호 데이터의 tabular feature 추출과 전처리를 효율적으로 처리했습니다.",
      "CatBoost: per-epoch tabular feature 기반 분류에 적합하며, 하이퍼파라미터 튜닝 없이도 높은 성능을 보였습니다.",
      "PyTorch/Mamba: 시퀀스 확률 보정을 위한 temporal corrector 구현에 활용했습니다.",
      "StratifiedGroupKFold: 피험자 기반 그룹 분할과 클래스 균형을 동시에 유지하여 일반화 성능을 확보했습니다.",
      "MLflow: 전처리 조합과 모델별 성능 지표를 체계적으로 기록해 실험 재현성을 확보했습니다."
    ],
    details: [
      "3단계 계층형 분류: Sleep/Wake → REM/NREM → N3/N1N2 순환적 이진 분류 구조",
      "Temporal correction: Mamba 기반 시퀀스 확률 보정으로 전이 구간 오분류 개선",
      "일반화 성능 확보: StratifiedGroupKFold와 group_zscore로 피험자 누수 차단",
      "실험 관리: MLflow 기반 전처리·모델 조합별 성능 추적"
    ],
    pdfDetails: [
      "3단계 분류 구조 설계로 수면 예측 정확도 24pp 향상 (51% → 75.3%)",
      "사용자별 데이터 분리 검증으로 새로운 사용자에도 적용 가능한 모델 확보",
      "ECG·PPG 이기종 센서 데이터 100Hz 규격 통일 및 전처리 파이프라인 구축"
    ],
    issues: [
      {
        title: "수면 단계 다중 분류의 정확도 한계",
        cause: "4가지 수면 단계를 한 번에 분류하려다 보니, 특징이 모호한 경계 구간에서 오분류가 빈번하게 발생했습니다.",
        solution: "'Wake/Sleep → REM/Non-REM → Light/Deep' 순서로 판별하는 3단계 계층적 이진 분류 모델을 설계하고, 10분 윈도우를 적용했습니다.",
        result: "단일 4-class 모델(51.4%) 대비 계층적 구조로 전환한 결과, 최종 정확도 75.3%를 달성하여 약 24pp 향상시켰습니다. (MLflow 실험 기록 기준)"
      },
      {
        title: "데이터 규격 불일치 및 실험 관리의 복잡성",
        cause: "학습 데이터(ECG)와 실측 데이터(PPG)의 주파수가 달라 모델 입력이 불가능했고, 수많은 전처리 조합을 관리하기 어려웠습니다.",
        solution: "모든 신호를 100Hz로 재샘플링하여 규격을 맞추고, MLflow와 DVC를 도입해 수십 번의 실험과 데이터 버전을 체계적으로 관리했습니다.",
        result: "이기종 데이터 간의 호환성을 확보하고, MLflow 실험 비교 기능으로 전처리 조합별 성능 차이를 정량 비교하여 최적 파이프라인을 선정할 수 있었습니다."
      }
    ],
    retrospect: [
      "MLflow + DVC 조합으로 실험 및 데이터 재현성을 확보하는 과정에서 체계적인 실험 관리의 중요성을 학습하였습니다.",
      "CatBoost + Mamba/LSTM 하이브리드 모델 설계로 도메인 특성에 맞는 아키텍처 선택 능력을 향상시켰습니다.",
      "상용 웨어러블 데이터로 검증하며 연구 프로젝트를 실제 서비스에 적용하는 과정의 어려움과 중요성을 체감하였습니다."
    ],
    images: {
      details: [
        "/projects/catb-mamba-matrix.png",
        "/projects/cnn-lstm-matrix.png",
        "/projects/xgb-matrix.png"
      ]
    }
  },
  {
    id: 2,
    title: "Moodrop - IoT 기반 향수 제조 및 레시피 공유 플랫폼",
    category: "IoT/Backend",
    role: "IoT 통신 서버 구축 및 백엔드 개발",
    desc: "사용자가 만든 향수 레시피를 임베디드 제조 기기로 전송하고 제조 과정을 제어하는 IoT 플랫폼",
    tech: ["Java", "Spring Boot", "MQTT", "MySQL", "WebSocket"],
    status: "Completed",
    date: "2025.07 ~ 2025.08",
    image: "/projects/moodrop.png",
    projectType: "team",
    teamSize: "6명",
    participation: "6인",
    techEnv: "Java, Spring Boot, MQTT, MySQL, WebSocket",
    assignedRole: "IoT 통신 서버 구축 및 백엔드 개발",
    performance: "비동기 처리와 상태 확인 로직으로 데이터 유실과 중복 없는 제어 환경 구축",
    link: "https://portfolio-lyart-rho-29.vercel.app/projects/2",
    overview: "사용자가 웹에서 보낸 레시피대로 향수를 제조하는 기기를 제어하는 IoT 서비스입니다. 응답 지연이 있는 기기 통신 환경에서 요청-응답 매핑을 구현해 제어 결과를 추적할 수 있도록 구성했습니다. 또한 데이터베이스 저장 이후 명령을 전송하는 순서를 적용해 서버 데이터와 기기 상태 불일치를 줄였습니다.",
    techReason: [
      "Spring Boot: 백엔드 팀원들이 가장 익숙한 도구여서 협업 효율을 높이기 위해 선택했습니다.",
      "MySQL: 관계형 데이터베이스가 필요했고, 팀원 모두가 사용해본 경험이 있어 선택했습니다.",
      "MQTT: 경량 메시징 프로토콜로 IoT 디바이스 제어/상태 전송 채널에 적합해 채택했습니다.",
      "WebSocket: 향수 제조가 끝났을 때 웹페이지에 바로 알림을 띄워주기 위해 사용했습니다."
    ],
    details: [
      "IoT 향수 제조 규격 정의: 어떤 기기든 호환되도록 명령어를 표준화함",
      "신뢰성 있는 제어 시스템: 네트워크 오류 상황에서 재시도 로직을 적용해 제어 실패를 완화",
      "실시간 상태 모니터링: 제조 진행 상황과 완료 여부를 실시간으로 화면에 표시"
    ],
    pdfDetails: [
      "향수 제조 기기 상태를 웹에 실시간 연동하는 MQTT/WebSocket 통신 구현",
      "작업별 고유 식별자 기반 중복 신호 차단으로 데이터 중복 0건 달성",
      "WebSocket 기반 제조 진행률 실시간 알림 시스템 구축"
    ],
    issues: [
      {
        title: "임베디드 기기 로직 문제로 인한 중복 신호 해결",
        cause: "임베디드 기기 내부 로직 문제로 인해 기기에서 '제조 완료' 신호를 중복으로 보내는 현상이 발생했습니다. 이로 인해 사용자에게 반복적으로 제조 완료 알림을 주는 문제가 발생하였습니다.",
        solution: "각 작업 요청마다 고유한 작업 번호를 부여하고, 요청이 들어오면 작업 상태를 관리했습니다. 처리가 완료되면 해당 작업 번호를 제거하는 방식으로 중복 처리를 방지했습니다.",
        result: "중복 신호가 도착해도 이미 소거된 작업 번호이므로 무시되어, 사용자에게 제조 완료 알림이 한 번만 전달되고 DB에도 단일 기록만 남게 되었습니다."
      },
      {
        title: "초기 크롤링 계획 실패와 일정 지연",
        cause: "향료 정보를 모으기 위해 데이터를 자동으로 긁어오려 했으나, 사이트 구조가 복잡해서 예상보다 2배 이상 시간이 걸렸습니다. 이대로는 가장 중요한 'IoT 기기 연동' 기능을 개발할 시간이 부족했습니다.",
        solution: "과감하게 '많은 데이터'보다 '서비스의 완성도'를 선택했습니다. 크롤링 대상을 꼭 필요한 향료로 줄이고, 부족한 정보는 외부에서 빌려오는 방식으로 바꿨습니다. 여기서 아낀 시간을 기기 연동과 안정성 테스트에 투자했습니다.",
        result: "일정 내 기기 연동과 웹 기능을 포함한 시연 가능한 버전을 완료했고, 범위 조정으로 핵심 기능 안정성 검증 시간을 확보했습니다."
      },
      {
        title: "향수 데이터셋 노트명 불일치 문제 해결",
        cause: "향수 추천에 사용할 원본 데이터셋에서 동일한 향 재료가 여러 이름으로 존재했습니다. 지역 접두어(Indian jasmine, Sicilian lemon 등), 라틴어/관용명 혼용, 브랜드 고유 향료명, 오타 등이 섞여 있어 같은 노트가 별개 항목으로 집계되었고, 이로 인해 빈도 분석과 어코드-노트 동시출현 행렬의 정확도가 떨어지는 상황이었습니다.",
        solution: "전체 노트를 빈도순으로 추출한 뒤 종류별로 분류하고 일일이 원본과 대조하여 정규화 규칙을 수립했습니다. 오타 교정(sandalowood→sandalwood), 지역 접두어 제거(Italian lemon→lemon), 색상 접두어 통합(pink rose→rose), 라틴어 변형 통일, 브랜드 고유명사 판별 후 제거 또는 대표 노트로 매핑하는 458건 이상의 규칙을 작성했습니다. 또한 빈도 5 미만의 희귀 어코드를 포함한 향수를 필터링하여 노이즈를 제거했습니다.",
        result: "정제된 데이터를 기반으로 어코드-노트 동시출현 행렬을 구축하고, Bayesian smoothing + ALS/SVD 앙상블 스코어링을 적용한 노트 추천 엔진이 일관된 결과를 산출할 수 있게 되었습니다. 이 데이터가 향수 제조 시 Top/Middle/Base 노트 선정 및 비율 계산의 기반이 되었습니다."
      }
    ],
    retrospect: [
      "IoT 디바이스와 백엔드 서버를 MQTT로 연동하며 하드웨어-소프트웨어 통합 경험을 쌓았습니다.",
      "초반 프로토콜 설계에 미흡한 점이 있어 보완을 하다보니 메인 로직도 수정하는 경우가 많아 시간 소요가 많았습니다.",
      "임베디드 기기의 중복 완료 신호 문제를 작업 컨텍스트 소거 방식으로 해결하면서, 분산 시스템에서의 중복 처리 패턴과 트랜잭션 동기화의 중요성을 알게 되었습니다.",
      "비즈니스 로직을 도메인 모델과 서비스 계층으로 분리하여 객체지향 설계 원칙을 실천. 향수 레시피 계산 로직을 테스트 가능한 형태로 구현하였습니다.",
      "일정 관리 실패 경험을 통해 초기 기획 단계에서 리스크 요소를 충분히 검토하는 것의 중요성을 학습하였습니다.",
    ]
  },
  {
    id: 3,
    title: "Belcro - 멀티 프레임워크 문서 기반 RAG 코드 어시스턴트",
    category: "AI/LLM",
    showInBackend: true,
    role: "RAG 파이프라인 및 LangGraph 멀티 에이전트 워크플로우 설계",
    desc: "Bootstrap/React/Tailwind 문서를 기반으로 코드를 생성하고, 라이브 프리뷰까지 제공하는 RAG 코드 어시스턴트",
    tech: ["Python", "LangChain", "LangGraph", "Pinecone", "FastAPI", "PyArrow", "OpenAI Embeddings", "A2A Protocol", "Jenkins", "Docker"],
    status: "Completed",
    date: "2025.07 ~ 2025.12",
    link: "https://github.com/Diaboloss712/Belcro-next",
    image: "/projects/belcro.png",
    projectType: "personal",
    teamSize: "개인 프로젝트",
    participation: "1인",
    techEnv: "Python, LangChain, LangGraph, Pinecone, FastAPI, PyArrow, OpenAI Embeddings",
    assignedRole: "RAG 파이프라인 및 LangGraph 멀티 에이전트 워크플로우 설계",
    performance: "PyArrow memory_map 기반 지연 로딩으로 서버 대기 메모리를 114.8MB에서 7.49MB로 줄여 93.5% 절감",
    overview: "Bootstrap·React·Tailwind 공식 문서를 통합 검색해 코드 생성을 지원하는 RAG 서비스를 개발하며, FastAPI 백엔드와 라이브 프리뷰 UI를 분리 구성했습니다. 또한 Google A2A (Agent-to-Agent) 프로토콜 표준을 준수하여 Agent Card 기반 Discovery와 Task/Artifact 메시지 구조를 구현하고, Pinecone 유사도를 confidence로 산출하여 검색 품질 메타데이터를 관리했습니다. 데이터 처리 계층은 PyArrow와 memory map 기반으로 최적화해 서버 기동 직후 메모리 점유량을 크게 줄였습니다.",
    techReason: [
      "Python: 크롤링, 검색, 코드 생성 파이프라인을 한 언어에서 일관되게 구현하기 위해 선택했습니다.",
      "A2A Protocol: Agent Card 기반 Discovery와 Task/Artifact 메시지 구조로 에이전트 간 협업 인터페이스를 구현하기 위해 적용했습니다.",
      "LangGraph: Supervisor 기반으로 RAG/Context7/Code Agent 실행 흐름을 제어하기 위해 도입했습니다.",
      "Pinecone: 문서 임베딩 검색의 응답성과 확장성을 확보하기 위해 선택했습니다.",
      "PyArrow: memory_map + 컬럼 프로젝션으로 메모리 점유를 줄이기 위해 적용했습니다."
    ],
    details: [
      "멀티 프레임워크 문서 검색: Bootstrap/React/Tailwind 문서를 통합 인덱싱",
      "LangGraph 멀티 에이전트: Supervisor, RAG, Context7, Code Agent 협업 구조 설계",
      "대용량 데이터 처리 최적화: PyArrow memory_map 기반 Lazy Loading 적용",
      "라이브 프리뷰 + API 분리: 백엔드와 프론트를 분리하고 /ui 정적 서빙 구성"
    ],
    pdfDetails: [
      "Bootstrap/React/Tailwind 문서 기반 코드 생성 및 라이브 프리뷰 구현",
      "PyArrow + memory_map으로 서버 기동 직후 메모리 점유량 93.5% 절감 (114.8→7.49MB)",
      "LangGraph 멀티 에이전트 + A2A 프로토콜 기반 에이전트 협업 워크플로우 구현"
    ],
    issues: [
      {
        title: "저사양 서버에서 설치 실패 및 메모리 부족",
        cause: "문서 데이터를 서버 시작 시 전량 로드하면서 기동 직후 메모리 점유가 과도해졌고, 부하 시 메모리 스파이크가 발생했습니다.",
        solution: "Pandas 기반 전량 로딩을 PyArrow + memory_map 기반 지연 로딩으로 전환하고, 컬럼 프로젝션 읽기를 적용했습니다.",
        result: "서버 기동 직후 메모리 점유량을 114.8MB에서 7.49MB로 93.5% 절감했고, 100회 부하 테스트에서도 7.5~9MB 범위로 안정적으로 유지했습니다."
      }
    ],
    retrospect: [
      "멀티 프레임워크 RAG와 멀티 에이전트 워크플로우를 결합하며 서비스 아키텍처 설계 역량을 강화했습니다.",
      "성능 병목을 수치로 계측하고 PyArrow 기반으로 개선하면서 데이터 I/O 최적화의 중요성을 체감했습니다.",
    ]
  },
  {
    id: 4,
    title: "MCP 기반 Git 워크플로우 자동화 에이전트",
    category: "AI/DevOps",
    role: "MCP 서버 구축 및 LLM 기반 자동화 로직 구현",
    desc: "로컬 Git 변경사항을 분석해 커밋 메시지를 자동 생성하고 배치 커밋/푸시를 자동화하는 AI 도구 연동(MCP) 서버",
    tech: ["Python", "FastAPI", "MCP Protocol", "Ollama", "Git CLI"],
    status: "Completed",
    date: "2025.04 ~ 2025.04",
    link: "https://github.com/Diaboloss712/MCP_Auto-GIt-Convention",
    image: "/projects/mcp-git.png",
    projectType: "personal",
    teamSize: "개인 프로젝트",
    participation: "1인",
    techEnv: "Python, FastAPI, MCP Protocol, Ollama, Git CLI",
    assignedRole: "MCP 서버 구축 및 LLM 기반 자동화 로직 구현",
    performance: "LLM 호출을 비동기로 병렬화하고 Git 반영 구간을 분리해 10파일 시뮬레이션 기준 처리 시간을 11초에서 2초로 줄였습니다",
    overview: "서버 하나에서 로컬 저장소 변경사항을 수집하고, LLM으로 Conventional Commit 메시지를 생성해 커밋/푸시까지 자동화하는 시스템을 만들었습니다.\n\n통합 제어: FastAPI-MCP 서버에서 Git CLI 실행과 메시지 생성 로직을 한곳에서 관리하도록 구성했습니다.\n\n비동기 성능 최적화: 기존 순차 처리 방식을 비동기로 전환해 여러 파일 작업을 동시에 처리할 수 있게 했고, 배치 처리량을 개선했습니다.\n\n보안 및 안전성: 변경점 요약과 메시지 생성은 로컬 LLM(Ollama)로 처리하고, 생성 결과는 규칙 검증을 통과한 경우에만 커밋하도록 구성했습니다.",
    techReason: [
      "FastAPI-MCP: 초기에는 FastMCP를 쓰려 했으나 설정이 어려워, 더 익숙하고 제어가 쉬운 FastAPI-MCP 라이브러리를 선택했습니다.",
      "Ollama: 내 코드를 외부 서버로 보내기 싫어서, 내 컴퓨터에서 실행되는 로컬 AI 모델을 선택했습니다.",
      "Python 비동기: 파일 입출력과 LLM 요청을 비동기로 처리하여 동기 방식 대비 약 5.5배 수준의 성능 향상을 이뤄냈습니다."
    ],
    details: [
      "AI 기반 Git 자동화: 변경 사항 분석부터 커밋/푸시까지 서버 워크플로우로 자동화",
      "약 5.5배 처리 속도 개선: 비동기 처리 도입으로 10개 파일 기준 11초 → 2초로 단축",
      "확장 가능한 구조: Git 명령 실행/메시지 생성/검증 단계를 분리해 기능 확장 가능하도록 설계",
      "API 중심 사용: FastAPI 엔드포인트로 배치 커밋 기능 호출 가능",
      "오류 처리: Git/LLM 호출 실패 시 예외를 기록하고 fallback 메시지 생성 로직 적용"
    ],
    pdfDetails: [
      "MCP 프로토콜로 Git 변경 분석부터 커밋/푸시까지 자동화하는 서버 구축",
      "비동기 병렬 처리 도입으로 10파일 기준 처리 속도 5.5배 향상 (11s→2s)",
      "로컬 LLM(Ollama) 활용으로 소스 코드 외부 전송 없는 보안 자동화 구현"
    ],
    issues: [
      {
        title: "서버가 멈추는 병목 현상 해결",
        cause: "처음에는 요청을 순서대로 하나씩 처리했는데, LLM 응답이 느려서 파일이 많아지면 전체 시간이 너무 오래 걸렸습니다.",
        solution: "비동기 방식을 도입하여, 여러 파일에 대한 AI 처리를 동시에 진행하도록 개선했습니다. Python의 httpx 비동기 클라이언트와 asyncio를 활용했습니다.",
        result: "10개 파일 기준 처리 시간을 약 11초에서 약 2초로 단축해, 처리 속도를 5.5배 개선했습니다. (benchmark_simulation.py 측정)"
      }
    ],
    retrospect: [
      "FastAPI-MCP와 Ollama를 활용하여 Git 워크플로우 자동화 시스템을 구축하였습니다.",
      "Git 명령어 실행과 HTTP 통신의 성능 병목 지점을 프로파일링하고 최적화하였습니다.",
      "Conventional Commit 형식의 커밋 메시지를 자동 생성하고 검증하는 기능을 구현하였습니다.",
      "Git CLI 실행과 LLM 메시지 생성을 단일 서버에서 제어하는 자동화 아키텍처를 구축하였습니다."
    ]
  },
  {
    id: 5,
    title: "Moodify – 스마트홈·로봇 IoT 시뮬레이션",
    category: "IoT/Simulation",
    role: "Unity 기반 스마트홈 시뮬레이터와 백엔드를 MQTT·WebSocket으로 연동",
    desc: "Unity 3D 가상 환경의 스마트홈 기기를 백엔드 서버에서 실시간으로 제어하는 IoT 시뮬레이션 플랫폼",
    tech: ["Unity", "FastAPI", "MQTT", "WebSocket", "SQLAlchemy", "PostgreSQL"],
    status: "Completed",
    date: "2025.08 ~ 2025.09",
    image: "/projects/moodify.png",
    projectType: "team",
    teamSize: "6명",
    myRole: "백엔드 개발 및 IoT 통신 구조 설계",
    overview: "Unity 가상 환경에서 스마트홈 기기를 제어하는 시뮬레이션 프로그램입니다. 파이썬 서버가 가상 기기와 웹 클라이언트 사이의 통신을 중계하며, MQTT와 WebSocket을 함께 사용해 제어 명령과 상태 데이터를 전달하도록 구현했습니다.",
    techReason: [
       "FastAPI: AI 기능 추가를 고려해 파이썬 기반이면서도, 많은 요청을 동시에 처리할 수 있는 비동기 기능이 뛰어나서 선택했습니다.",
       "MQTT: 경량 메시징 프로토콜로 디바이스 제어 채널 구현에 적합해 선택했습니다.",
       "WebSocket: 기기 상태 변경 이벤트를 웹 클라이언트로 지연 없이 전달하기 위해 사용했습니다."
    ],
    details: [
      "실시간 양방향 통신: 가상 기기와 웹사이트가 딜레이 없이 서로 신호를 주고받음",
      "유연한 기기 연결: 새로운 종류의 기기를 추가할 때 코드를 많이 고치지 않아도 되도록 설계",
      "안정적인 메시지 처리: 한꺼번에 많은 신호가 들어와도 서버가 멈추지 않도록 처리"
    ],
    pdfDetails: [
      "Unity-MQTT-FastAPI-WebSocket 양방향 통신 구조 설계",
      "신규 기기 타입 추가 시 코드 변경 최소화하는 확장 가능 구조 설계",
      "MQTT 스레드와 FastAPI 이벤트 루프 간 동시성 충돌 해결"
    ],
    issues: [
      {
        title: "서로 다른 통신 방식 간의 충돌 해결",
        cause: "MQTT는 별도의 스레드가 처리하고 FastAPI는 메인 이벤트 루프가 처리하는데, MQTT 쪽에서 데이터베이스를 건드리려고 하니 서로 영역이 꼬여서 에러가 났습니다.",
        solution: "FastAPI 서버가 시작할 때 메인 작업 처리기를 미리 저장해두고, MQTT가 작업을 요청할 때 이 처리기에게 안전하게 전달하도록 구현하였습니다. 이를 통해 서로 다른 처리 방식 간의 충돌을 방지했습니다.",
        result: "MQTT 콜백에서 발생하던 DB 접근 에러가 해소되어, 여러 기기가 동시에 상태를 보고해도 누락이나 충돌 없이 처리되었습니다."
      },
      {
        title: "사용자가 나갔을 때 연결 정리 문제",
        cause: "사용자가 인터넷 창을 닫으면 연결이 끊기는데, 서버는 그걸 모르고 계속 신호를 보내려다 에러가 났습니다. 게다가 끊긴 연결 정보가 계속 쌓여서 메모리를 잡아먹었습니다.",
        solution: "신호 전송 실패 시 연결이 끊긴 것으로 간주하고, 해당 사용자를 명단에서 즉시 제외하는 방식으로 변경했습니다. 그리고 주기적으로 빈 명단을 청소해주는 기능도 넣었습니다.",
        result: "송신 실패 시 즉시 해당 세션을 제거하고 빈 세션 집합을 주기적으로 정리하여, 비활성 연결이 누적되지 않는 구조를 적용했습니다."
      }
    ],
    retrospect: [
      "MQTT와 웹소켓을 동시에 다루며 실시간으로 데이터를 주고받는 구조를 설계하는 법을 배웠습니다.",
      "비동기 프로그래밍에서 발생할 수 있는 충돌 문제를 해결하며 파이썬의 동시성 처리에 대해 깊이 이해하게 되었습니다.",
      "Capability Registry 기반으로 기능 확장을 설계할 때 스키마 일관성 검증의 중요성을 학습했습니다."
    ]
  },
  {
    id: 6,
    title: "MCP 시험 플랫폼 백엔드",
    category: "Backend/AI",
    role: "유저 도메인 개발, Pinecone 벡터 DB 통합, 문제 유사도 비교 실험 및 회귀 검증 환경 구축",
    performance: "pytest fixture와 비동기 세션 격리로 테스트 순서와 무관하게 통과하는 회귀 검증 환경을 구축했습니다. 문제 임베딩과 유사도 비교 실험을 통해 중복 회피 기준을 정리하며, 서비스 품질은 감이 아니라 테스트와 실험으로 관리해야 한다는 점을 배웠습니다.",
    desc: "시험 문제 관리와 유사 문제 탐지를 위한 백엔드. FastAPI 기반으로 사용자·문제·인증 도메인을 분리해 확장성을 고려한 설계를 적용했습니다.",
    tech: ["FastAPI", "SQLAlchemy 2.0", "Pinecone", "Alembic", "PostgreSQL", "Docker"],
    status: "Completed",
    date: "2025.05 ~ 2025.08",
    link: "https://github.com/Diaboloss712/mcp-test-backend",
    image: "/projects/mcp-test.png",
    projectType: "team",
    teamSize: "2명",
    myRole: `백엔드 구조 설계 및 회귀 검증 환경 구축
- FastAPI + SQLAlchemy 2.0 비동기 서버 구조 설계
- pytest fixture와 비동기 세션 격리로 테스트 간 간섭 방지
- Pinecone 벡터 DB 연동 및 문제 임베딩 기반 유사도 비교 실험
- 기능별 코드 분리로 확장성 있는 구조 설계`,
    overview: `시험 문제 관리와 유사 문제 탐지를 위한 백엔드 프로젝트입니다. FastAPI와 SQLAlchemy 기반으로 사용자·문제·인증 도메인을 분리해 이후 기능 확장이 쉽도록 설계했고, 문제 텍스트를 임베딩해 Pinecone에 저장한 뒤 신규 문제 등록 시 코사인 유사도로 중복 가능성을 판단하도록 만들었습니다. 또한 pytest fixture와 비동기 세션 격리로 테스트 간 간섭을 막아 기능 추가 후에도 회귀 검증이 가능한 개발 환경을 구축했습니다.`,
    techReason: [
      "FastAPI: 파이썬이라 AI 라이브러리를 쓰기 편하고, 코드가 간결해서 선택했습니다.",
      "SQLAlchemy 2.0: 데이터베이스를 다루는 최신 기술로, 비동기 처리를 잘 지원해서 선택했습니다.",
      "Pinecone: 비슷한 문제를 찾으려면 벡터 DB가 필요한데, 설정이 쉽고 성능이 좋아서 썼습니다.",
      "pytest: 테스트 코드를 짜기 가장 편한 도구라서 선택했습니다."
    ],
    pdfDetails: [
      "TDD 기반 비동기 백엔드 구조 설계 및 도메인 분리",
      "벡터 DB 기반 중복 문제 자동 검출·회피 파이프라인 구현 (Pinecone)",
      "3종 AI 모델(HyperClova/GPT-4o-mini/Mistral) 생성 품질 비교 실험 및 중복 회피 기준 수립"
    ],
    details: [
      "테스트 주도 개발: 코드를 짜기 전에 테스트부터 만들어서 버그를 미리 예방함",
      "깔끔한 구조 설계: 기능끼리 서로 엉키지 않게 잘 나누어서 유지보수가 쉬움",
      "중복 문제 회피: 문제 임베딩 코사인 유사도 기반으로 신규 생성·등록 시 중복을 자동 검출",
      "비동기 데이터베이스: 많은 사람이 동시에 접속해도 느려지지 않도록 설계함",
      "LLM별 생성 결과 유사도 비교 실험으로 중복 문제 회피 전략을 튜닝함"
    ],
    issues: [
      {
        title: "테스트끼리 서로 간섭하는 문제 해결",
        cause: "여러 테스트가 하나의 데이터베이스 연결을 돌려쓰다 보니, 서로 데이터가 섞여서 에러가 났습니다.",
        solution: "각 테스트가 끝날 때마다 사용한 흔적을 깨끗이 지우고, 다음 테스트는 새 연결을 쓰도록 격리했습니다.",
        result: "비동기 세션 격리 후 전체 테스트 스위트가 순서에 관계없이 통과하게 되어, 기능 추가 시 회귀 검증을 신뢰할 수 있게 되었습니다."
      },
      {
        title: "LLM별 문제 생성 결과의 유사도 편차 검증",
        cause: "문제 생성 모델에 따라 중복 문제 발생 빈도와 유사도 점수가 다르게 나타나, 일관된 생성 품질 기준을 잡기 어려웠습니다.",
        solution: "동일 프롬프트 조건에서 HyperClova/GPT-4o-mini/Ollama(mistral) 생성 결과를 비교하고, 임베딩 코사인 유사도(threshold/top_k) 기반으로 중복 회피 전략을 튜닝했습니다.",
        result: "실험에서 HyperClova 0.7693, GPT-4o-mini 0.7256, Mistral 0.811 수준의 유사도 편차를 확인했고, 임계값 튜닝 기준을 정량적으로 확보했습니다."
      }
    ],
    retrospect: [
      "테스트 선작성 방식을 적용해 회귀 버그를 조기에 탐지하고, 기능 수정 시 안정성을 높일 수 있었습니다.",
      "데이터베이스를 비동기로 다룰 때 주의해야 할 점들을 깊이 있게 배웠습니다.",
      "AI 모델을 고를 때 유명한 것을 쓰는 게 아니라, 내 서비스에 맞는 기준을 세우고 실험해보는 게 중요하다는 걸 깨달았습니다."
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
