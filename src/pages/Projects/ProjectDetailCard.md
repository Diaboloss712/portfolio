# ProjectDetailCard.tsx

프로젝트 상세 정보 카드.

## 타입 정의
```typescript
interface ProjectDetailCardProps {
  project: Project;
}
```

## Props
- **project**: Project 객체

## 구성
- **Header**: 
  - 카테고리 Badge + 상태
  - 제목 + 설명
  - 날짜 (Calendar 아이콘)
- **Content**:
  - Tech Stack 섹션
  - GitHub 링크 버튼 (있으면)

## 스타일
- Hover: shadow-lg
- 큰 제목 (text-2xl)

## 의존성
- Card, Badge, Button
- helpers (getStatusColor)
- constants (Project)
- lucide-react (ExternalLink, Calendar)
