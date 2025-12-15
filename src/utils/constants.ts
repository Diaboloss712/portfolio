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
    title: "[기업 연계] NapSync - PPG 데이터 기반 수면 단계 예측 서비스",
    category: "AI/MLOps",
    role: "ECG/PPG 신호 전처리부터 HRV 피처 추출, 모델링, 실험·데이터 버전 관리까지 전체 파이프라인 설계·구현",
    desc: "스마트워치의 PPG 데이터를 활용하여 수면 단계를 자동 분류하는 서비스",
    tech: ["Python", "CatBoost", "Mamba/LSTM", "MLflow", "DVC", "AWS S3", "NeuroKit2"],
    status: "Completed",
    date: "2025.10 ~ 2025.11",
    image: "/projects/hrv-sleep.png",
    projectType: "team",
    teamSize: "6명 (프론트 2명, 백엔드 1명, AI 3명)",
    myRole: `- MLflow를 통한 성능 분석 자동화 파이프라인 구축 및 실험 관리
- DVC와 S3를 활용하여 원본 데이터셋 및 전처리 데이터셋 관리
- ECG/PPG 신호에서 HRV 피처 추출 로직 구현
- CatBoost + Mamba 혼합 모델 설계 및 학습`,
    overview: `오션스바이오 기업 연계 프로젝트로 웨어러블 기기에서 수집한 생체 신호(PPG)를 활용하여 수면 단계를 자동 분류하는 서비스입니다.
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
      "End-to-End 수면 분석 파이프라인: 생체 신호 전처리부터 모델 학습, 성능 평가까지 전 과정 자동화",
      "하이브리드 모델링 전략: 정형 데이터 분류 모델과 시계열 모델을 결합하여 수면 단계 전이 구간 예측 정확도 향상",
      "실험 및 데이터 관리 시스템: 대규모 실험 추적 및 대용량 데이터 버전 관리 환경 구축으로 연구 재현성 확보",
      "피험자 독립성 검증: 엄격한 교차 검증 설계로 특정 피험자에 대한 과적합 방지 및 일반화 성능 확보",
      "실제 데이터 검증: 상용 웨어러블 기기 데이터와의 비교 검증을 통해 연구 결과의 실용성 입증"
    ],
    pdfDetails: [
      "PhysioNet EDF 신호 리샘플링 및 노이즈 제거 전처리 파이프라인 구축",
      "계층적 이진 분류(Hierarchical) 도입 및 2-stage 모델로 정확도 12% 향상",
      "MLflow 실험 추적 및 GroupKFold 검증으로 신뢰성 있는 AI 개발 환경 구축"
    ],
    issues: [
      {
        title: "피험자 데이터 누수로 인한 모델 성능 과대평가",
        cause: "초기 실험에서 일반적인 K-Fold 교차 검증을 사용했으나, 동일 피험자의 데이터가 훈련셋과 테스트셋에 나뉘어 들어가는 문제가 발생했습니다. 생체 신호는 개인별 고유 패턴(지문과 유사)이 강해, 모델이 수면 단계의 일반적 특징이 아닌 특정 피험자의 패턴을 암기하게 되었고, 이로 인해 테스트 정확도는 높으나 실제 새로운 사용자에 대해서는 성능이 떨어지는 과적합 현상이 나타났습니다.",
        solution: "검증 전략을 GroupKFold로 변경하여 '피험자(Subject ID)'를 기준으로 데이터를 분리했습니다. 특정 피험자의 모든 데이터가 훈련셋 혹은 테스트셋 중 한 곳에만 속하도록 강제함으로써, 모델이 학습 과정에서 본 적 없는 완전히 새로운 사람의 데이터로만 평가받도록 실험 환경을 재설계했습니다.",
        result: "평가 정확도는 0.72에서 0.62로 하락했으나, 이는 거품이 제거된 실제 일반화 성능이었습니다. 이 과정을 통해 확보한 모델은 실제 상용 웨어러블 기기 테스트에서도 43.1%의 준수한 일치율을 보이며 실사용 가능한 수준의 일반화 성능을 입증했습니다.",
        comparison: "K-Fold(단순 무작위) → GroupKFold(피험자 격리) 전환으로 신뢰할 수 있는 성능 지표 확보"
      },
      {
        title: "시계열 특성 부재로 인한 전이 구간 오분류",
        cause: "CatBoost 단일 모델은 30초 단위 데이터를 독립적으로만 분석했습니다. 하지만 실제 수면은 'Light → Deep' 처럼 연속적인 흐름을 가집니다. 앞뒤 문맥을 보지 않고 순간적인 신호만으로 판단하다 보니, 수면 단계가 바뀌는 전이 구간에서 신호가 모호할 때 엉뚱한 단계로 튀는 오분류가 빈번했습니다.",
        solution: "2-Stage 하이브리드 파이프라인을 구축했습니다. 1단계로 CatBoost가 각 시점의 확률을 예측하면, 2단계에서 Mamba(혹은 LSTM) 모델이 앞뒤 10분(20개 시퀀스)의 예측값 흐름을 읽어 문맥을 파악합니다. '갑자기 Deep Sleep에서 30초만 깨어남' 같은 비정상적인 패턴을 감지하고, 주변 문맥에 맞춰 부드럽게 보정하도록 설계했습니다.",
        result: "단일 모델 대비 F1-Score가 11.9% 향상되었으며, 특히 모델이 가장 어려워하던 수면 단계 진입/이탈 구간의 오분류율이 35% 감소했습니다. 끊김 없는 자연스러운 수면 그래프(Hypnogram)를 생성할 수 있게 되었습니다."
      },
      {
        title: "대용량 생체 데이터의 버전 관리 한계",
        cause: "프로젝트가 진행되면서 전처리 방식이 바뀔 때마다 수십 GB 단위의 새로운 데이터셋이 생성되었습니다. Git은 대용량 파일 처리에 부적합하여 코드와 데이터 버전이 엇갈리기 시작했고, '이 모델이 어떤 데이터로 학습됐는지' 추적할 수 없는 재현성 위기가 찾아왔습니다.",
        solution: "DVC(Data Version Control)를 도입하여 코드와 데이터를 분리했습니다. 실제 데이터는 AWS S3에 저장하고, Git에는 텍스트로 된 메타데이터(.dvc)만 커밋하여 연결 고리를 만들었습니다. '코드 커밋 해시'와 '데이터 해시'를 MLflow 실험 기록에 함께 남겨, 언제든 특정 실험 시점의 데이터와 코드를 100% 복원할 수 있는 환경을 구축했습니다.",
        result: "팀원 간 수십 GB 데이터를 USB로 옮기던 비효율이 사라지고, `dvc pull` 명령어 하나로 2분 만에 동기화가 가능해졌습니다. 데이터 변경 이력과 모델 성능 변화를 투명하게 추적할 수 있게 되었습니다."
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
      "IoT 향수 제조 프로토콜 정의: 향수 노트 구성 및 디바이스 제어 명령을 표준화하여 이기종 기기 간 호환성 확보",
      "신뢰성 있는 제어 시스템 구축: 비동기 명령 처리 및 타임아웃/재시도 메커니즘으로 네트워크 불안정 상황 대응",
      "향수 레시피 배합 알고리즘: 사용자 취향과 노트별 최소 비율 규칙을 준수하는 최적 배합 로직 구현",
      "데이터 매핑 및 변환 시스템: 복잡한 레시피 데이터를 IoT 프로토콜에 맞게 변환하여 디바이스로 전송",
      "실시간 모니터링 아키텍처: 제조 진행률, 완료 상태, 디바이스 오류 등을 실시간으로 사용자에게 브로드캐스팅",
      "분산 환경 데이터 무결성 확보: 중복 메시지 필터링 및 트랜잭션 관리를 통해 제조 이력 및 재고 데이터 정확성 보장"
    ],
    pdfDetails: [
      "Async-Sync Bridge 아키텍처 구현으로 비동기 MQTT 응답을 HTTP와 매핑",
      "트랜잭션 동기화(Transaction Synchronization)로 DB와 기기 상태 불일치 방지",
      "WebSocket 실시간 알림 및 대시보드 모니터링 시스템 구축"
    ],
    issues: [
      {
        title: "네트워크 불안정으로 인한 MQTT 중복 메시지 처리",
        cause: "임베디드 디바이스가 위치한 네트워크 환경이 불안정하여, 디바이스가 '제조 완료' 메시지를 보냈음에도 서버의 ACK를 받지 못해 동일한 메시지를 재전송하는 상황이 빈번했습니다. 이로 인해 서버에서는 하나의 제조 작업에 대해 재고가 이중으로 차감되거나, 완료 로그가 중복 적재되는 데이터 정합성 문제가 발생했습니다.",
        solution: "애플리케이션 레벨에서 멱등성(Idempotency)을 보장하는 로직을 구현했습니다. '디바이스ID+작업ID'를 키로 하는 상태 맵을 메모리에 관리하고, 메시지 수신 시 이 맵을 확인합니다. 첫 번째 메시지 처리 시에만 해당 키를 맵에서 제거(Atomic Remove)하고, 이후 도착하는 동일 ID의 메시지는 키가 없으므로 즉시 무시(Drop)되도록 필터링 파이프라인을 구축했습니다.",
        result: "네트워크 단절 테스트(Chaos Engineering) 환경에서도 100건의 중복 전송 중 단 1건의 중복 처리도 발생하지 않았습니다. 트랜잭션 롤백이나 보상 트랜잭션 없이도 데이터 무결성을 100% 확보할 수 있었습니다.",
        comparison: "단순 수신 처리(중복 발생 30%) → 멱등성 보장 로직(중복 발생 0%)으로 신뢰성 확보"
      },
      {
        title: "복잡한 향수 배합 규칙의 비즈니스 로직 파편화",
        cause: "향수 제조 로직은 '노트별 최소 비율 준수', '총량 맞춤', '향료 재고 확인' 등 복잡한 제약 조건을 가집니다. 초기에는 이 로직이 컨트롤러와 서비스 여기저기에 산재해 있어, 규칙이 하나 바뀔 때마다 여러 코드를 수정해야 했고 버그 발생 위험이 높았습니다.",
        solution: "핵심 배합 로직을 순수 자바 객체(POJO)인 `RecipeCalculator` 도메인 모델로 격리했습니다. 외부 의존성(DB, Web) 없이 오직 배합 규칙에만 집중하도록 설계하여, '베이스 노트가 50% 미만일 때' 같은 다양한 예외 케이스에 대해 빠른 단위 테스트(Unit Test)가 가능하도록 리팩토링했습니다.",
        result: "비즈니스 로직의 응집도가 높아져 코드 가독성이 개선되었고, 50개 이상의 엣지 케이스에 대한 단위 테스트를 구축하여 배합 알고리즘의 신뢰성을 수학적으로 검증할 수 있었습니다."
      },
      {
        title: "초기 크롤링 계획 실패와 일정 지연 리스크",
        cause: "향료 데이터를 확보하기 위해 크롤링을 시도했으나, 대상 사이트의 복잡한 동적 렌더링 구조로 인해 예상보다 2배 이상의 시간이 소요되었습니다. 이대로는 핵심 기능인 'IoT 연동'을 개발할 시간이 부족한 상황이었습니다.",
        solution: "과감하게 '데이터의 양'보다 '서비스의 완결성'을 선택했습니다. 크롤링 범위를 필수 향료로 축소하고, 부족한 정보는 외부 API로 대체하는 유연한 전략으로 선회했습니다. 확보된 시간을 IoT 프로토콜 설계와 안정성 테스트에 재투자하여 프로젝트의 기술적 완성도를 높이는 데 집중했습니다.",
        result: "데드라인 내에 하드웨어 연동과 웹 서비스를 모두 포함한 MVP를 성공적으로 런칭했습니다. 자원 제약 상황에서의 '선택과 집중'이 프로젝트 성공의 핵심임을 깨달았습니다."
      }
    ],
    retrospect: [
      "IoT 디바이스와 백엔드 서버를 MQTT로 연동하며 하드웨어-소프트웨어 통합 경험을 쌓았습니다.",
      "초반 프로토콜 설계에 미흡한 점이 있어 보완을 하다보니 메인 로직도 수정하는 경우가 많아 시간 소요가 많았습니다.",
      "임베디드 기기의 중복 완료 신호 문제를 작업 컨텍스트 소거 방식으로 해결하면서, 분산 시스템에서의 중복 처리(Deduplication) 패턴과 트랜잭션 동기화의 중요성을 알게 되었습니다.",
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
- Pandas → PyArrow 마이그레이션으로 Docker 빌드 안정화 및 I/O 성능 개선
- Jenkins + Docker CI/CD 파이프라인 구축 및 보안 강화`,
    overview: `Belcro는 Bootstrap 공식 문서를 학습하여 사용자 질문에 답변하는 RAG(Retrieval-Augmented Generation) 시스템입니다.
크롤링한 문서를 섹션·컴포넌트 단위로 파싱하고, Pinecone 벡터 DB에 임베딩하여 유사도 기반 검색을 수행하였습니다.`,
    techReason: [
      "Python: 크롤링(BeautifulSoup) + AI(LangChain) + 데이터 처리(Pandas/PyArrow)를 한 언어로 통합하여 개발 생산성을 극대화하였습니다. 라이브러리 생태계가 풍부하여 RAG 파이프라인 구축에 최적이었습니다.",
      "FastAPI: Django보다 가볍고 비동기 처리가 최적화되어 있어 선택하게 되었습니다. Pydantic 기반 자동 검증으로 타입 안정성을 확보하였습니다.",
      "Pinecone: PostgreSQL + pgvector 대비 스키마 자유도가 높고 설정이 간편하여 벡터 인덱싱/검색 전용 솔루션으로 성능이 우수하였습니다. 네임스페이스 기능으로 문서 버전 관리가 용이하였습니다.",
      "PyArrow: 사전 컴파일된 wheel 제공으로 저사양 환경에서도 설치가 용이하고, columnar storage를 활용한 I/O 최적화로 필요한 컬럼만 선택적으로 읽어 메모리 효율성을 개선하였습니다.",
      "Docker + Jenkins: 코드 푸시 시 자동 빌드·배포 파이프라인을 구축하여 수동 배포 시간을 절감하였습니다."
    ],
    details: [
      "RAG 기반 문서 검색 파이프라인: 문서 구조 분석, 청킹, 임베딩을 통한 고품질 검색 시스템 구축",
      "대화형 컨텍스트 관리: 이전 대화 맥락을 유지하며 연속적인 질문에 답변하는 Stateful 에이전트 설계",
      "대용량 데이터 처리 최적화: 메모리 효율적인 데이터 구조 및 비동기 처리 도입으로 시스템 리소스 사용량 절감",
      "CI/CD 자동화 환경 구성: 코드 변경 사항을 자동으로 빌드 및 배포하는 파이프라인 구축으로 개발 생산성 향상",
      "보안 및 환경 구성 강화: 민감 정보 관리 및 격리된 빌드 환경 구성으로 시스템 안정성 확보"
    ],
    pdfDetails: [
      "Bootstrap 공식 문서 RAG 학습 및 HTML/CSS 코드 Live Preview 기능 구현",
      "PyArrow 도입으로 대용량 문서 임베딩 및 검색 속도 획기적 최적화",
      "Jenkins + Docker CI/CD 파이프라인 구축 및 Credential 보안 강화"
    ],
    issues: [
      {
        title: "Jenkins Docker 빌드 시 Pandas 설치 실패 및 메모리 부족",
        cause: "Jenkins가 실행되는 t2.micro(1GB RAM) 인스턴스에서 Docker 빌드 중 Pandas 설치가 실패했습니다. Pandas는 의존성(NumPy 등)을 C/C++로 컴파일해야 하는데, 이 과정에서 메모리가 부족하여(OOM) 빌드 프로세스가 강제 종료되었습니다. 또한, 대용량 CSV 처리 시 전체 데이터를 메모리에 로드하는 Pandas의 특성상 런타임에서도 메모리 오버헤드가 우려되었습니다.",
        solution: "Pandas를 PyArrow로 대체하였습니다. 첫째, PyArrow는 사전 컴파일된 Binary Wheel을 제공하여 저사양 환경에서도 컴파일 없이 즉시 설치가 가능해 빌드 실패 문제를 해결했습니다. 둘째, 데이터 포맷을 CSV에서 Parquet으로 변경하고 PyArrow의 Memory Mapping과 Columnar Storage 방식을 활용했습니다. 벤치마크 테스트 결과, CSV 읽기 속도는 약 7배, Parquet 읽기 속도는 약 26배 향상됨을 확인했습니다.",
        result: "Docker 빌드 실패 문제를 해결하고 안정적인 배포 파이프라인을 구축했습니다. 또한 런타임 데이터 로딩 속도가 7배 이상(Parquet 적용 시 26배) 빨라져 시스템 반응 속도가 획기적으로 개선되었습니다.",
        comparison: "Pandas(메모리 과부하) → PyArrow(7~26배 속도 향상) 전환으로 성능과 안정성 동시 확보"
      }
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
      "AI 기반 Git 워크플로우 자동화: 변경 사항 분석부터 커밋까지의 과정을 자동화하여 개발 생산성 향상",
      "표준 커밋 메시지 생성 시스템: Conventional Commit 규칙을 준수하는 메시지 자동 생성 및 검증 로직 구현",
      "확장 가능한 툴 서버 아키텍처: 다양한 Git 명령을 표준 프로토콜로 래핑하여 외부 시스템 연동성 확보",
      "IDE 통합 경험 설계: 개발 환경 내에서 자연스럽게 AI 기능을 호출하고 활용할 수 있는 워크플로우 구현",
      "오류 복구 및 재시도 메커니즘: 명령어 실행 실패나 생성 오류 시 자동으로 복구하는 견고한 시스템 설계"
    ],
    pdfDetails: [
      "FastAPI-MCP 기반 독자적 통합 제어 서버로 GitHub API 및 로컬 Git CLI 연동",
      "파일별 변경 사항 독립 분석 및 Ollama 기반 커밋 메시지 개별 생성",
      "로컬 LLM 활용 및 컨벤션 검증 로직으로 소스 코드 보안과 무결성 확보"
    ],
    issues: [
      {
        title: "동기식 처리로 인한 Git 워크플로우 성능 병목",
        cause: "초기에는 `requests` 모듈을 사용하여 GitHub API 및 LLM과 통신했습니다. 하지만 `requests`는 동기(Blocking) 방식이라, 수 초 이상 소요되는 LLM 추론 시간 동안 서버의 메인 스레드가 차단되어 다른 API 요청을 처리할 수 없는 병목 현상이 발생했습니다.",
        solution: "HTTP 클라이언트를 `httpx` 비동기 모드로 교체하여, LLM과 통신하는 I/O 대기 시간 동안 이벤트 루프가 다른 작업을 처리할 수 있도록(Non-blocking) 개선했습니다. 벤치마크 테스트 결과, I/O 지연 상황에서 동시 처리량이 약 5.4배 향상됨을 확인했습니다.",
        result: "LLM 응답을 기다리는 동안에도 서버가 멈추지 않고 다른 요청을 동시에 처리할 수 있게 되어, 단일 스레드 환경임에도 높은 동시성 처리량을 확보했습니다.",
        comparison: "Blocking I/O(서버 마비) → Non-blocking I/O(5.4배 동시성 향상) 전환으로 가용성 확보"
      }
    ],
    retrospect: [
      "FastAPI-MCP와 Ollama를 활용하여 Git 워크플로우 자동화 시스템을 구축하였습니다.",
      "Git 명령어 실행과 HTTP 통신의 성능 병목 지점을 프로파일링하고 최적화하였습니다.",
      "Conventional Commit 형식의 커밋 메시지를 자동 생성하고 검증하는 기능을 구현하였습니다.",
      "GitHub API를 연동하여 원격 저장소 상태를 확인하고, 로컬에서는 Git CLI를 직접 제어하는 독자적인 자동화 아키텍처를 구축하였습니다."
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
      "실시간 양방향 통신 아키텍처: IoT 시뮬레이터와 웹 클라이언트 간의 저지연 상태 동기화 구현",
      "유연한 디바이스 제어 시스템: Capabilities 기반 동적 라우팅으로 다양한 디바이스 타입 수용 및 확장성 확보",
      "안정적인 비동기 메시지 처리: 이벤트 루프 격리 및 비동기 큐를 활용하여 대량의 메시지 처리 시에도 안정성 유지",
      "상태 관리 및 동기화: 디바이스의 연결 상태와 속성 변화를 추적하고 DB와 실시간으로 동기화하는 로직 구현",
      "시스템 통합 인터페이스 설계: 시뮬레이션 환경(Unity)과 제어 환경(Web)을 매끄럽게 연결하는 미들웨어 역할 수행"
    ],
    pdfDetails: [
      "Unity-MQTT-FastAPI-WebSocket 양방향 통신 아키텍처 설계",
      "Capabilities 기반 동적 라우팅으로 디바이스 확장성 확보",
      "MQTT 콜백과 FastAPI 이벤트 루프 분리로 세션 충돌 0% 달성"
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
      "TDD 기반 개발 프로세스 정립: 테스트 주도 개발을 통해 견고한 도메인 로직 구현 및 리팩토링 안정성 확보",
      "도메인 주도 설계(DDD) 적용: 유저, 인증, 문제 도메인을 명확히 분리하여 유지보수성과 확장성 향상",
      "벡터 검색 기반 추천 시스템: 문제 텍스트 임베딩 및 유사도 검색을 통해 개인화된 문제 추천 기능 구현",
      "비동기 데이터베이스 아키텍처: 고성능 비동기 처리를 위한 DB 설계 및 테스트 격리 환경 구축",
      "데이터 기반 의사결정: 다양한 모델의 성능 비교 실험을 통해 최적의 임베딩 모델 선정 및 시스템 최적화"
    ],
    issues: [
      {
        title: "pytest 테스트 환경에서 DB 세션 충돌",
        cause: "SQLAlchemy 1.4에서 2.0으로 비동기 전환 시, 동기 스타일의 Session.begin()을 비동기로 변경하는 과정에서 테스트 실행 시 세션 충돌이 발생하였습니다.",
        solution: "pytest fixture의 DB 세션 scope가 'module'로 설정되어 있어 여러 테스트가 동일한 세션을 공유하면서 Session.begin() 동시 호출로 충돌이 발생한다고 판단하였습니다. pytest fixture에서 의존성 오버라이드로 NullPool을 적용하고, scope='function'으로 변경하여 각 테스트마다 독립적인 세션을 생성하도록 수정하였습니다.",
        result: "각 테스트가 독립된 세션을 사용하여 세션 충돌이 해결되었고, 핵심 로직에 대한 테스트들이 안정적으로 통과하였습니다. 테스트 격리로 인해 실행 시간이 소폭 증가했으나, 안정성이 우선이므로 수용하였습니다."
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
