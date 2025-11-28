# AIPortfolio.tsx

AI 엔지니어로서의 포트폴리오 페이지.

## 구성
1. **Hero Section**: AI Engineer 소개
2. **Skills**: ML/DL, LLM/RAG, MLOps
3. **Introduction**: Why AI? (전체 파이프라인 설계 경험)
4. **Projects**: AI 프로젝트 (HRV 수면 분류, Belcro, MCP 등)

## 필터링
- `category.includes('AI')` 또는 `category.includes('MLOps')` 또는 `category.includes('LLM')`

## 스타일
- 아이콘: CPUIcon (purple)
- 3단 스킬 그리드
- 프로젝트 2단 그리드

## 의존성
- lucide-react (CpuIcon, Cpu, TrendingUp)
- ProjectCard
