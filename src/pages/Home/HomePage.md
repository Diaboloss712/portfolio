# HomePage.tsx

메인 홈 페이지.

## 타입 정의
```typescript
interface HomePageProps {
  onNavigate: (tab: string) => void;
}
```

## 구조
```
┌─ HeroSection (히어로)
└─ FeaturedSection (추천 프로젝트)
```

## Props
- **onNavigate**: 페이지 이동 핸들러

## 스타일
- 섹션 간 간격: space-y-24

## 의존성
- HeroSection
- FeaturedSection
