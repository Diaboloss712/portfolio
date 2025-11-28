# TilCard.tsx

TIL 게시글 카드 컴포넌트.

## 타입 정의
```typescript
interface TilCardProps {
  post: TilPost;
  onDelete?: (id: string) => void;
  onClick: () => void;
}
```

## Props
- **post**: TilPost 객체
- **onDelete**: 삭제 핸들러 (선택)
- **onClick**: 클릭 핸들러

## 구성
- **Delete 버튼**: hover 시 표시
- **Header**: 날짜, 카테고리
- **Title**: 제목
- **Content**: 요약 (2줄 제한)
- **Footer**: 태그들

## 스타일
- Hover: border, shadow 변화
- Group hover 효과
- Delete 버튼: opacity 0 → 100

## 의존성
- Card
- helpers (formatDate)
- supabase (TilPost)
- lucide-react (Calendar, Hash, Trash2)
