# MainLayout.tsx

전체 레이아웃 wrapper 컴포넌트.

## 타입 정의
```typescript
interface MainLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onNavigate: (tab: string) => void;
}
```

## 구조
```
┌─ Header (sticky)
├─ Main (children)
└─ Footer
```

## 스타일
- 최소 높이: 100vh
- 밝은 회색 배경 (bg-slate-50/50)
- 최대 너비: 6xl (1152px)
- 패딩: responsive

## 의존성
- Header
- Footer
