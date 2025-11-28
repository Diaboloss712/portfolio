# HeroSection.tsx

홈페이지 히어로 섹션.

## 타입 정의
```typescript
interface HeroSectionProps {
  onNavigate: (tab: string) => void;
}
```

## 기능
- 이름 + 역할 표시
- "Open to Work" 배지
- CTA 버튼 (Portfolio, TIL)
- SNS 링크 (GitHub, Email)

## 스타일
- 중앙 정렬
- Gradient 텍스트 (bg-clip-text)
- 애니메이션 (slide-in-from-bottom)

## 의존성
- Button, Badge
- lucide-react (ArrowRight, Github, Mail)
- constants (personalInfo)
