# ProjectCard.tsx

프로젝트 카드 컴포넌트.

## 타입 정의
```typescript
interface ProjectCardProps {
  project: Project;
}
```

## Props
- **project**: Project 객체 (constants에서 정의)

## 구성
- **Header**: 카테고리 Badge, 날짜
- **Title**: 프로젝트 제목
- **Description**: 프로젝트 설명
- **Content**: 기술 스택 Badges
- **Footer**: 상태 표시, "View Details" 버튼

## 스타일
- Hover: shadow-lg, translate-y
- Group hover 효과

## 의존성
- Card, Badge, Button
- helpers (getStatusColor)
- constants (Project)
- lucide-react (ChevronRight)
