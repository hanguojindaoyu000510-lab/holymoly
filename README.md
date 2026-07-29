# 🚀 대학생 창업 성향 테스트 (Startup Aptitude Test)

**Fresh Sky & Leaf Breeze (Witty & Sleek Edition)**  
2026 대학생 창업 캠프 참가자들을 위한 나의 창업가 성향 진단 및 🤝 환상의 팀원 파트너 궁합 웹 앱입니다.

---

## 📁 프로젝트 파일 및 폴더 구조 (Category Structure)

```text
holymoly/
├── 🌐 웹 서비스 메인 & 쇼케이스 (HTML)
│   ├── index.html            # 웹 애플리케이션 메인 엔트리 HTML
│   └── demo.html             # 10개 UI 컴포넌트 실시간 스토리북 쇼케이스
│
├── 🎨 디자인 시스템 & 스타일시트 (CSS)
│   └── css/
│       ├── variables.css     # :root 토큰 (Sky Blue, Leaf Green, 폰트, Radius)
│       ├── style.css         # 모던 카드 뷰포트 레이아웃 & 애니메이션
│       └── components.css    # 헤더, 뱃지, 버튼, 카카오 버튼, 질문/결과 카드 스타일
│
├── 🧠 로직 & 모듈형 컴포넌트 (JavaScript)
│   └── js/
│       ├── app.js            # 메인 애플리케이션 상태 컨트롤러 (Step 1~4)
│       ├── bundle.js         # file:// 및 웹 실행 겸용 스탠드얼론 번들
│       ├── demo.js           # 데모 쇼케이스(demo.html) 렌더링 스크립트
│       ├── env-config.js     # 빌드 시 동적 생성되는 환경변수 (Git 미포함)
│       │
│       ├── 🧩 UI 모듈형 컴포넌트 (js/components/)
│       │   ├── StartScreen.js     # Step 1. 랜딩 & 시작 화면 컴포넌트
│       │   ├── TestScreen.js      # Step 2. 질문 & 진행바 테스트 화면 컴포넌트
│       │   ├── LoadingScreen.js   # Step 3. 2초 딥다이브 분석 로딩 컴포넌트
│       │   ├── ResultScreen.js    # Step 4. 최종 성향 결과 & 카카오 공유 컴포넌트
│       │   ├── Header.js          # 상단 헤더 컴포넌트
│       │   ├── ProgressBar.js     # 질문 진행 바 컴포넌트
│       │   ├── QuestionCard.js    # 질문 & 4지 선다 카드 컴포넌트
│       │   ├── ResultCard.js      # 성향 결과 유닛 카드 컴포넌트
│       │   ├── Badge.js           # 귀여운 태그 뱃지 컴포넌트
│       │   ├── Button.js          # 기본/카카오 버튼 컴포넌트
│       │   └── Modal.js           # 참가자 정보 입력 모달 컴포넌트
│       │
│       └── 📊 데이터베이스 (js/data/)
│           ├── questions.js       # 12개 창업 상황 질문 & 가산점 매핑
│           └── results.js         # 6개 Witty 성향 타이틀 & 파트너 매칭 데이터
│
├── ⚙️ 빌드 & 환경 설정 (Config & Scripts)
│   ├── scripts/
│   │   └── build-config.mjs  # Vercel/로컬 환경변수(KAKAO_JS_KEY) 빌드 스크립트
│   ├── .env                  # 로컬 전용 환경변수 (Git 미포함)
│   ├── .env.example          # 환경변수 공개 템플릿
│   ├── .gitignore            # Git 업로드 차단 설정 (.env, env-config.js 포함)
│   ├── package.json          # Node 프로젝트 및 빌드/실행 명령어 정의
│   ├── vercel.json           # Vercel 정적 웹 배포 & 404 리라이트 설정
│   └── server.mjs            # 로컬 개발용 No-Cache HTTP 웹 서버
│
└── 📄 제품 문서 (Documentation)
    ├── prd.md                # 제품 요구사항 정의서 (PRD & 화면 흐름도)
    └── design.md             # UI/UX 디자인 가이드라인 및 컬러 시스템
```

---

## 🏃 실행 및 배포 방법

### 1. 탐색기에서 바로 실행 (로컬 파일)
- `index.html` 파일을 바로 더블 클릭해 브라우저에서 실행합니다.

### 2. 로컬 개발 서버 실행
```bash
npm start
# http://localhost:8080/index.html 접속
```

### 3. Vercel 원클릭 배포
1. GitHub 저장소를 Vercel과 연결.
2. Vercel Environment Variables 설정:
   - `KAKAO_JS_KEY` = `e8a329bf41d2ae9d4ce09c09cb0d596e`
3. Deploy 완료!

---

## 🔗 저장소 및 라이선스
- **GitHub Repository**: [hanguojindaoyu000510-lab/holymoly](https://github.com/hanguojindaoyu000510-lab/holymoly)
- **License**: MIT
