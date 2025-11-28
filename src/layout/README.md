# Layout 폴더

애플리케이션의 레이아웃 구조를 정의하는 컴포넌트들입니다.

## 파일 목록

### Header.jsx
**역할**: 상단 고정 네비게이션 헤더  
**Props**:
- `activeTab`: 현재 활성화된 탭 ID
- `onNavigate`: 네비게이션 함수

**주요 기능**:
- 로고 및 브랜드명 표시
- 데스크톱 네비게이션 메뉴
- 모바일 햄버거 메뉴
- GitHub, Email 소셜 링크

**스타일**: 
- Tailwind CSS
- `sticky top-0` 고정 헤더
- `backdrop-blur-md` 블러 배경
- 반응형 디자인 (md 브레이크포인트)

**동작**:
- 탭 클릭 시 `onNavigate` 호출
- 모바일 메뉴 토글 상태 관리
- 활성 탭 하이라이트

**의존성**: 
- Button, lucide-react (Menu, X, Github, Mail, Terminal)
- constants (personalInfo, navigationItems)

---

### Footer.jsx
**역할**: 하단 푸터  
**Props**: 없음

**주요 기능**:
- 제작자 정보
- 현재 연도 자동 표시
- 기술 스택 표시

**스타일**: 
- Tailwind CSS
- 반응형 flex 레이아웃
- border-t 상단 구분선

**동작**: 정적 표시

**의존성**: constants (personalInfo)

---

### MainLayout.jsx
**역할**: 전체 레이아웃 래퍼  
**Props**:
- `children`: 페이지 콘텐츠
- `activeTab`: 현재 활성 탭
- `onNavigate`: 네비게이션 함수

**주요 기능**:
- Header, Footer 통합
- 중앙 콘텐츠 영역 제공
- 일관된 레이아웃 구조

**스타일**:
- `min-h-screen` 전체 화면
- `max-w-6xl mx-auto` 중앙 정렬
- `bg-slate-50/50` 배경색

**동작**: 
- Header와 Footer로 children 감싸기
- 네비게이션 props 전달

**의존성**: Header, Footer 컴포넌트
