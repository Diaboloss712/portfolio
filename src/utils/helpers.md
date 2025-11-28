# helpers.ts

유틸리티 헬퍼 함수 모음.

## 함수

### `formatDate(date: Date | string | null): string`
날짜를 한국어 형식으로 포맷.

**예시**: `2025년 1월 15일`

### `parseTags(tagsString: string): string[]`
쉼표로 구분된 태그 문자열을 배열로 변환.

**예시**: `"react, typescript, vite"` → `["react", "typescript", "vite"]`

### `truncateText(text: string, maxLength: number = 100): string`
텍스트를 지정된 길이로 자르고 `...` 추가.

### `scrollToTop(): void`
페이지 최상단으로 부드럽게 스크롤.

### `getStatusColor(status: string): string`
프로젝트 상태에 따른 Tailwind 색상 클래스 반환.

### `debounce<T>(func: T, wait: number = 300)`
함수 실행을 지연시키는 디바운스 유틸리티.

## 사용 예시
```typescript
import { formatDate, debounce } from '@utils/helpers';

const formattedDate = formatDate(new Date());
const debouncedSearch = debounce(handleSearch, 500);
```
