# TilPage.tsx

Today I Learned 블로그 메인 페이지입니다. Supabase로 실시간 데이터 관리를 합니다.

## 타입 정의

```typescript
interface Post {
  id: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  content: string;
  created_at: string;
}
```

## 상태 관리

```typescript
const [searchTerm, setSearchTerm] = useState<string>("");      // 검색어
const [tils, setTils] = useState<Post[]>([]);                  // 게시글 목록
const [isWriteOpen, setIsWriteOpen] = useState<boolean>(false); // 작성 모달
const [readPost, setReadPost] = useState<Post | null>(null);    // 읽기 모달 게시글
const [loading, setLoading] = useState<boolean>(true);          // 로딩 상태
```

## 주요 기능

### 1. 데이터 로딩
```typescript
useEffect(() => {
  const loadData = async () => {
    const data = await fetchTilPosts();
    setTils(data);
    setLoading(false);
  };
  loadData();
}, []);
```

### 2. 실시간 구독
```typescript
const subscription = subscribeTilPosts((data) => {
  setTils(data);
});
return () => subscription.unsubscribe();
```

### 3. 검색 필터링
- 제목 또는 태그에서 검색어 매칭 (대소문자 무시)
- 클라이언트 사이드 필터링

### 4. CRUD 작업
- **Create**: WriteModal 통해 작성
- **Read**: TilCard 클릭 → ReadModal
- **Delete**: confirm 후 deleteTilPost 호출
- **Update**: 현재 미지원 (추가 가능)

## UI 구조

```
┌─ Header (제목 + Write Post 버튼)
├─ Search Input
└─ Posts Grid
   ├─ Loading: Spinner 컴포넌트
   ├─ 게시글: TilCard 컴포넌트들
   └─ Empty: "No posts found" 메시지
```

## 로딩 상태

**Before (기존)**:
```tsx
<Loader2 className="animate-spin" />
<p>Syncing data from Supabase...</p>
```

**After (TypeScript + Spinner 컴포넌트)**:
```tsx
<Spinner />  // 간결하고 재사용 가능
```

## 스타일

- `max-w-4xl mx-auto`: 중앙 정렬, 최대 너비 제한
- `animate-in fade-in`: 페이지 등장 애니메이션
- 반응형 디자인 (md 브레이크포인트)

## 의존성

### 컴포넌트
- Button, Input, Spinner
- TilCard, WriteModal, ReadModal

### Supabase 함수
- fetchTilPosts: 초기 데이터 로딩
- subscribeTilPosts: 실시간 업데이트 구독
- deleteTilPost: 게시글 삭제

### 아이콘
- lucide-react: Search, BookOpen, PenTool

## 성능 최적화

1. **초기 로딩 최소화**: fetchTilPosts 1회 호출
2. **실시간 업데이트**: 구독으로 자동 동기화
3. **클라이언트 필터링**: 서버 요청 없이 즉시 검색
4. **컴포넌트 분리**: TilCard 재사용으로 렌더링 최적화

## 개선 가능 사항

- [ ] 페이지네이션 (게시글 많을 경우)
- [ ] 무한 스크롤
- [ ] 업데이트 기능 추가
- [ ] 검색 debounce 적용
- [ ] 카테고리별 필터링
