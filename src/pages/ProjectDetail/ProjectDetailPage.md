# ProjectDetailPage

## Purpose
개별 프로젝트의 상세 정보를 표시하는 페이지 컴포넌트

## Responsibilities
- 프로젝트의 전체 정보를 구조화하여 표시 (인원, 역할, 개요, 기술스택, 진행경과, 이슈해결, 회고 등)
- 출력 기능 제공 (window.print()를 통한 PDF 생성)
- 프로젝트 목록으로 돌아가는 네비게이션
- 이미지 갤러리 표시

## Usage
```tsx
<ProjectDetailPage 
  project={projectData} 
  onNavigate={handleNavigate} 
/>
```

## Dependencies
- @components/Card: 섹션별 카드 레이아웃
- @components/Badge: 카테고리, 기술스택 표시
- @components/Button: 출력, 네비게이션 버튼
- lucide-react: 아이콘 컴포넌트

## Features
- 출력 시 네비게이션 버튼 숨김 (print:hidden)
- 각 섹션은 선택적으로 표시 (데이터가 있을 때만)
- 외부 링크(GitHub 등) 연결
- 반응형 이미지 갤러리
