# MarkdownViewer.tsx

Markdown 렌더링 컴포넌트.

## 타입 정의
```typescript
interface MarkdownViewerProps {
  content: string;
}
```

## 지원 Markdown
- **헤딩**: #, ##, ###
- **리스트**: -
- **인용구**: >
- **코드 블록**: ```언어
- **이미지**: ![alt](url)
- **테이블**: |

## 사용 예시
```tsx
<MarkdownViewer content={post.content} />
```

## 스타일
- 코드 블록: 어두운 배경
- 이미지: 반응형, 최대 높이 500px
- 테이블: 그리드 레이아웃

## 의존성
- lucide-react (Code2)
