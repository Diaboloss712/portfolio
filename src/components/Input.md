# Input.tsx

텍스트 입력 컴포넌트.

## 타입 정의
```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
```

## Props
- 모든 HTML input 속성 지원
- **className**: 추가 CSS

## 사용 예시
```tsx
<Input placeholder="Enter text" value={value} onChange={e => setValue(e.target.value)} />
```

## 스타일
- Focus ring
- Placeholder 스타일
- Disabled 상태 처리
