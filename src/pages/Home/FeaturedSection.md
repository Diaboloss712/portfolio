# FeaturedSection.tsx

추천 프로젝트 섹션.

## 타입 정의
```typescript
interface ProjectCardProps {
  project: Project;
}

interface FeaturedSectionProps {
  onNavigate: (tab: string) => void;
}
```

## 기능
- 최근 프로젝트 3개 표시
- ProjectCard 컴포넌트 사용
- "View All Projects" 버튼

## ProjectCard 구성
- 카테고리 Badge
- 제목 + 설명
- 기술 스택 (최대 4개 + more)
- 상태 표시

## 스타일
- 그리드 레이아웃 (md:2, lg:3)
- Hover 효과 (shadow, translate)

## 의존성
- Button, Badge, Card
- constants (projectsData, Project)
- helpers (getStatusColor)
- lucide-react (Arrow Right, ChevronRight)
