# Card.tsx

카드 레이아웃 컴포넌트 세트.

## 구성 요소
- **Card**: 최상위 컨테이너
- **CardHeader**: 헤더 영역
- **CardTitle**: 제목
- **CardDescription**: 설명
- **CardContent**: 본문
- **CardFooter**: 푸터

## 타입 정의
```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
```

## 사용 예시
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

## 스타일
- 흰 배경, 회색 테두리
- 둥근 모서리 (rounded-xl)
- 그림자 효과
