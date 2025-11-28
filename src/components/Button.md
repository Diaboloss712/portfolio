# Button.tsx

재사용 가능한 버튼 컴포넌트. 6가지 variant와 4가지 size 지원.

## 타입 정의
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  icon?: LucideIcon;
}
```

## Props
- **variant**: 스타일 (default, destructive, outline, secondary, ghost, link)
- **size**: 크기 (default, sm, lg, icon)
- **icon**: Lucide 아이콘
- **children**: 버튼 텍스트

## 스타일
- Tailwind CSS 기반
- Focus ring, transition 지원
- Disabled 상태 자동 처리

## 의존성
- lucide-react
