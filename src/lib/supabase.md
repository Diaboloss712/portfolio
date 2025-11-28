# supabase.ts

Supabase 클라이언트 및 데이터 관리 함수.

## 타입 정의
```typescript
interface TilPost {
  id: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  content: string;
  created_at: string;
}

interface TilPostInput {
  title: string;
  category: string;
  summary: string;
  tags: string[];
  content: string;
  created_at?: string;
}
```

## 함수

### `subscribeTilPosts(callback)`
실시간 구독. DB 변경 시 자동으로 callback 호출.

**반환**: `{ unsubscribe: () => Promise }`

### `fetchTilPosts()`
모든 TIL 게시글 조회 (created_at 내림차순).

**반환**: `Promise<TilPost[]>`

### `createTilPost(postData)`
새 TIL 게시글 생성.

**반환**: `Promise<TilPost>`

### `deleteTilPost(id)`
게시글 삭제.

**반환**: `Promise<void>`

## 환경 변수
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## 의존성
- @supabase/supabase-js
