# App.tsx

메인 애플리케이션 컴포넌트.

## 상태 관리
```typescript
const [activeTab, setActiveTab] = useState<string>('home');
```

## 기능
- 탭 기반 네비게이션
- 페이지 전환 시 자동 스크롤 최상단
- MainLayout으로 래핑

## 라우팅
- **home**: HomePage
- **portfolio**: PortfolioPage
- **til**: TilPage
- **projects**: ProjectsPage

## 스타일
- scrollToTop 애니메이션

## 의존성
- MainLayout
- HomePage, PortfolioPage, TilPage, ProjectsPage
- helpers (scrollToTop)
