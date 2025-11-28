# Header.tsx

상단 네비게이션 바 컴포넌트.

## 타입 정의
```typescript
interface HeaderProps {
  activeTab: string;
  onNavigate: (tab: string) => void;
}
```

## Props
- **activeTab**: 현재 활성 탭
- **onNavigate**: 탭 변경 핸들러

## 기능
- **데스크톱 네비게이션**: Home, Portfolio, Projects, TIL
- **모바일 메뉴**: 햄버거 아이콘 토글
- **SNS 링크**: GitHub, Email
- **Sticky 헤더**: 스크롤 시 상단 고정

## 스타일
- Sticky positioning
- Backdrop blur 반투명 배경
- 반응형 (md 브레이크포인트)
- 활성 탭 하이라이트

## 의존성
- Button (UI 컴포넌트)
- lucide-react (Menu, X, Github, Mail, Terminal)
- constants (personalInfo, navigationItems)
