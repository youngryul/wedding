# Railway 배포 설정

## 배포 방법

1. Railway 계정 생성 및 로그인 (https://railway.app)
2. GitHub 저장소 연결
3. 새 프로젝트 생성
4. 환경 변수 설정 (필요시)

## 환경 변수

현재 프로젝트는 환경 변수가 필요하지 않지만, 필요시 Railway 대시보드에서 설정할 수 있습니다.

## 빌드 설정

- **빌더**: NIXPACKS (자동 감지)
- **시작 명령어**: `npm run start` (serve를 사용하여 정적 파일 서빙)
- **포트**: Railway가 자동으로 할당

## 주요 변경사항 (오류 해결)

- `serve` 패키지 추가로 안정적인 정적 파일 서빙
- `vite preview` 대신 `serve -s dist -l $PORT --no-open` 사용
- `--no-open` 옵션으로 브라우저 자동 열기 방지
- `http-server` 대안 패키지도 추가 (필요시 사용 가능)
- Railway 환경에 최적화된 설정

## 문제 해결

만약 여전히 오류가 발생한다면:

### 방법 1: serve 패키지 사용 (기본)
```bash
npm run start  # serve -s dist -l $PORT --no-open
```

### 방법 2: http-server 패키지 사용 (대안)
Railway 설정에서 시작 명령어를 다음으로 변경:
```bash
npm run start:alt  # http-server dist -p $PORT -a 0.0.0.0
```

### 추가 문제 해결:
1. Railway 대시보드에서 로그 확인
2. 빌드 로그에서 오류 메시지 확인
3. 필요시 Railway 지원팀에 문의