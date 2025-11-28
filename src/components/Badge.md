# Badge.tsx

작은 라벨/태그 컴포넌트. 카테고리, 상태 표시용.

## 타입 정의
```typescript
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline' | 'destructive';
  className?: string;
}
```

## Props
- **variant**: 스타일 변형 (default, secondary, outline, destructive)
- **children**: 텍스트 내용
- **className**: 추가 CSS 클래스

## 사용 예시
```tsx
<Badge>Category</Badge>
<Badge variant="outline">#tag</Badge>
```

## 스타일
- 작은 사이즈 (text-xs)
- 둥근 모서리 (rounded-full)
- Hover 효과
