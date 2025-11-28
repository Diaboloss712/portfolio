# WriteModal.tsx

TIL 작성 모달.

## 타입 정의
```typescript
interface WriteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  title: string;
  category: string;
  summary: string;
  tags: string;
  content: string;
}
```

## 상태 관리
```typescript
const [loading, setLoading] = useState<boolean>(false);
const [formData, setFormData] = useState<FormData>({...});
```

## 기능
- 제목, 카테고리, 요약, 태그, 내용 입력
- Markdown 지원
- Supabase에 게시글 생성
- 로딩 상태 표시

## 폼 구성
- **Title**: Input (required)
- **Category**: Select
- **Tags**: Input (쉼표 구분)
- **Summary**: Input (required)
- **Content**: Textarea (required, 마크다운)

## 스타일
- 고정 오버레이 (backdrop-blur)
- 최대 높이 90vh
- Scroll 가능 (custom-scrollbar)

## 의존성
- Card, Button, Input, Textarea
- supabase (createTilPost)
- helpers (parseTags)
- constants (categories)
- lucide-react (X, Loader2)
