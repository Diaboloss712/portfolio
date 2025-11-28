# Spinner.tsx

로딩 스피너 컴포넌트.

## 타입 정의
```typescript
interface SpinnerProps {
  size?: number;
  className?: string;
  fullScreen?: boolean;
}
```

## Props
- **size**: 크기 (기본 32)
- **fullScreen**: 전체 화면 오버레이 (기본 false)
- **className**: 추가 CSS

## 사용 예시
```tsx
// 기본
<Spinner />

// 전체 화면
<Spinner fullScreen />

// 커스텀 크기
<Spinner size={48} />
```

## 기능
- **기본 모드**: 인라인 스피너
- **fullScreen**: 고정 오버레이 + 반투명 배경

## 스타일
- Loader2 아이콘 (lucide-react)
- animate-spin
- 파란색 (text-blue-600)

## 의존성
- lucide-react (Loader2)
