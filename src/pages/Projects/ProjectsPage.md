# ProjectsPage.tsx

프로젝트 상세 문서 페이지.

## 상태 관리
```typescript
const [searchTerm, setSearchTerm] = useState<string>("");
```

## 기능
- 프로젝트 검색 (제목, 설명, 기술 스택)
- 통계 표시 (Total, Live, Completed, In Progress)
- ProjectDetailCard 목록

## 검색 로직
```typescript
const filtered = projectsData.filter(project => 
  project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  project.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
  project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
);
```

## UI 구조
```
┌─ Header (제목 + 아이콘)
├─ Search Input
├─ Statistics (4개)
└─ Project Cards
```

## 스타일
- Folder 아이콘 (lucide-react)
- 통계 카드: 텍스트 중앙 정렬

## 의존성
- Input, ProjectDetailCard
- constants (projectsData)
- lucide-react (Folder, Search)
