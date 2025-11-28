# Textarea.tsx

여러 줄 텍스트 입력 컴포넌트.

## 타입 정의
```typescript
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
```

## Props
- 모든 HTML textarea 속성 지원
- **className**: 추가 CSS

## 사용 예시
```tsx
<Textarea placeholder="Write content..." rows={5} value={content} onChange={e => setContent(e.target.value)} />
```

## 스타일
- 최소 높이 80px
- Focus ring
- Resize 가능
