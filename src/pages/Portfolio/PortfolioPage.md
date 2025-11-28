# PortfolioPage.tsx

포트폴리오 페이지.

## 상태 관리
```typescript
const [filter, setFilter] = useState<string>("All");
```

## 기능
- 카테고리 필터링 (All, Backend/AI, Frontend, Full Stack, DevOps)
- 프로젝트 통계 카드 (Total, Live, Completed, In Progress)
- ProjectCard 그리드

## 필터링 로직
```typescript
const filtered = filter === "All" 
  ? projectsData 
  : projectsData.filter(p => p.category.includes(filter.split('/')[0]));
```

## UI 구조
```
┌─ Header (제목 + 설명)
├─ Filter Buttons
├─ Statistics Cards (4개)
└─ Projects Grid
```

## 스타일
- 통계 카드: gradient 배경
- 그리드: md:2

## 의존성
- ProjectCard
- constants (projectsData, categories)
