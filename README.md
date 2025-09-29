# 모바일 청첩장

React + Tailwind CSS로 제작된 반응형 모바일 청첩장입니다.

## 🎯 주요 기능

- **반응형 모바일 전용 디자인**: 세로 스크롤 기반의 모바일 최적화 UI
- **웨딩 감성 디자인**: 따뜻한 파스텔톤 색상과 Noto Serif KR 폰트
- **섹션별 애니메이션**: framer-motion을 활용한 fade-in 효과
- **인터랙티브 갤러리**: 캐러셀 슬라이드로 사진 갤러리
- **실용적 기능**: 전화/문자/카톡 연락, RSVP 참석 여부 확인

## 📱 섹션 구성

1. **Hero 섹션**: 신랑신부 이름, 결혼 날짜/시간/장소
2. **인사말 섹션**: 초대 문구
3. **신랑 & 신부 소개**: 프로필 사진과 간단한 소개
4. **갤러리 섹션**: 사진 슬라이드쇼
5. **오시는 길**: 지도와 교통 안내
6. **연락하기**: 전화/문자/카톡 바로가기
7. **RSVP**: 참석 여부 확인 폼

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속하세요.

### 빌드

```bash
npm run build
```

## 🎨 커스터마이징

### 색상 테마 변경
`tailwind.config.js`에서 wedding 색상 팔레트를 수정하세요:

```javascript
colors: {
  'wedding': {
    'pink': '#F8E8E8',
    'rose': '#F5C6C6',
    'cream': '#FFF8F0',
    'beige': '#F5F0E8',
    'gold': '#D4AF37',
    'sage': '#9CAF88',
  }
}
```

### 내용 수정
각 컴포넌트 파일에서 다음 정보를 수정하세요:
- 신랑/신부 이름
- 결혼 날짜, 시간, 장소
- 연락처 번호
- 프로필 사진 URL
- 갤러리 사진 URL
- 지도 위치 (Google Maps embed URL)

### Google Form 연동
RSVP 섹션에서 Google Form ID를 실제 값으로 변경하세요:

```javascript
href="https://forms.gle/your-google-form-id"
```

## 📦 사용된 기술

- **React 18**: UI 라이브러리
- **Tailwind CSS**: 스타일링
- **Framer Motion**: 애니메이션
- **Lucide React**: 아이콘
- **Vite**: 빌드 도구

## 📱 모바일 최적화

- 모바일 우선 반응형 디자인
- 터치 친화적 인터페이스
- 빠른 로딩을 위한 이미지 최적화
- 스크롤 기반 네비게이션

## 🎉 배포

정적 파일로 빌드되어 GitHub Pages, Netlify, Vercel 등에 배포할 수 있습니다.

```bash
npm run build
```

생성된 `dist` 폴더를 배포 서비스에 업로드하세요.
