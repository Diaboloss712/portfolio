# constants.ts

전역 상수 및 타입 정의.

## 타입 정의
```typescript
interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  github: string;
  intro: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  desc: string;
  tech: string[];
  status: string;
  date: string;
  link?: string;
}

interface NavItem {
  id: string;
  label: string;
  path: string;
}

interface Categories {
  portfolio: string[];
  til: string[];
}
```

## Export 상수
- **personalInfo**: 개인 정보
- **projectsData**: 프로젝트 목록 (정적 데이터)
- **navigationItems**: 네비게이션 메뉴
- **categories**: 포트폴리오/TIL 카테고리
- **statusColors**: 프로젝트 상태 색상 맵

## 사용
```typescript
import { personalInfo, projectsData } from '@utils/constants';
```
