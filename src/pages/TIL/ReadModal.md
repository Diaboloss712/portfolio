# ReadModal.tsx

TIL 읽기 모달.

## 타입 정의
```typescript
interface ReadModalProps {
  post: TilPost | null;
  onClose: () => void;
}
```

## Props
- **post**: 표시할 TilPost (null이면 렌더링 안함)
- **onClose**: 닫기 핸들러

## 구성
- **Header**: 
  - Close 버튼
  - 카테고리 Badge
  - 제목
  - 날짜 + 작성자
- **Content**: MarkdownViewer
- **Footer**: 태그들 + Close 버튼

## 스타일
- 고정 오버레이 (backdrop-blur)
- 최대 너비 4xl
- 최대 높이 90vh
- Scroll 가능 (custom-scrollbar)

## 의존성
- Card, Badge, Button, MarkdownViewer
- helpers (formatDate)
- constants (personalInfo)
- supabase (TilPost)
- lucide-react (X, Calendar)
