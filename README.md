# KRDS UIUX 적용 NETX.js, ts, tailwind 템플릿

## 1. 프로젝트 소개

### 1.1. 프로젝트 명
# -themplates-next-ts-tailwind

### 1.2 프로젝트 구조
📂 src/
├── 📂 app/                       # Next.js 파일 기반 라우팅
│   ├── 📂 api/                   # API 라우트 폴더
│   │   └── ...                   # API 관련 파일들
│   ├── 📂 auth/                  # 인증 관련 페이지
│   │   ├── 📂 login/             # 로그인 페이지
│   │   │   └── page.tsx
│   │   ├── 📂 signup/            # 회원가입 페이지
│   │   │   └── page.tsx
│   ├── 📂 posts/                 # 게시물 관련 페이지
│   │   ├── 📂 new/               # 새 게시물 작성 페이지
│   │   │   └── page.tsx
│   │   ├── 📂 [postId]/          # 특정 게시물 보기 페이지
│   │   │   └── page.tsx
│   │   ├── page.tsx              # 게시물 목록 페이지 (게시판)
│   ├── 📂 dashboard/             # 관리자 대시보드 페이지
│   │   └── page.tsx
│   ├── 📂 profile/               # 사용자 프로필 페이지
│   │   └── page.tsx
│   ├── 📂 layout.tsx             # 공통 레이아웃
│   ├── 📂 page.tsx               # 홈 페이지
│   ├── 📂 about/                 # About 페이지
│   │   └── page.tsx
├── 📂 components/                # 재사용 가능한 컴포넌트 모음 (Tailwind 기반 스타일)
│   ├── 📂 identity/              # 아이덴티티 관련 컴포넌트
│   │   ├── Masthead.tsx          # 공식 배너
│   │   ├── Identifier.tsx        # 운영기관 식별자
│   │   ├── Footer.tsx            # 푸터
│   │   ├── Header.tsx            # 헤더
│   ├── 📂 navigation/            # 탐색 관련 컴포넌트
│   │   ├── SkipLink.tsx          # 건너뛰기 링크
│   │   ├── MainMenu.tsx          # 메인 메뉴
│   │   ├── Breadcrumb.tsx        # 브레드크럼
│   │   ├── SideMenu.tsx          # 사이드 메뉴
│   │   ├── InPageNavigation.tsx  # 콘텐츠 내 탐색
│   │   ├── Pagination.tsx        # 페이지네이션
│   ├── 📂 layout/                # 레이아웃 및 표현 관련 컴포넌트
│   │   ├── StructuredList.tsx    # 구조화 목록
│   │   ├── CriticalAlerts.tsx    # 긴급 공지
│   │   ├── Calendar.tsx          # 달력
│   │   ├── Disclosure.tsx        # 디스크로저
│   │   ├── Modal.tsx             # 모달
│   │   ├── Badge.tsx             # 배지
│   │   ├── Accordion.tsx         # 아코디언
│   │   ├── Image.tsx             # 이미지
│   │   ├── Carousel.tsx          # 캐러셀
│   │   ├── Tab.tsx               # 탭
│   │   ├── Table.tsx             # 표
│   ├── 📂 action/                # 액션 관련 컴포넌트
│   │   ├── Link.tsx              # 링크
│   │   ├── Button.tsx            # 버튼
│   ├── 📂 selection/             # 선택 관련 컴포넌트
│   │   ├── RadioButton.tsx       # 라디오 버튼
│   │   ├── Checkbox.tsx          # 체크박스
│   │   ├── Select.tsx            # 셀렉트 박스
│   │   ├── Tag.tsx               # 태그
│   ├── 📂 feedback/              # 피드백 관련 컴포넌트
│   │   ├── StepIndicator.tsx     # 단계 표시기
│   │   ├── Spinner.tsx           # 스피너
│   ├── 📂 help/                  # 도움 관련 컴포넌트
│   │   ├── HelpPanel.tsx         # 도움 패널
│   │   ├── TutorialPanel.tsx     # 따라하기 패널
│   │   ├── ContextualHelp.tsx    # 맥락적 도움말
│   │   ├── CoachMark.tsx         # 코치마크
│   ├── 📂 input/                 # 입력 관련 컴포넌트
│   │   ├── DateInput.tsx         # 날짜 입력 필드
│   │   ├── Textarea.tsx          # 텍스트 영역
│   │   ├── TextInput.tsx         # 텍스트 입력 필드
│   │   ├── FileUpload.tsx        # 파일 업로드
├── 📂 styles/                    # 글로벌 스타일 및 Tailwind 설정 파일
│   └── globals.css               # 글로벌 스타일 시트 (TailwindCSS 설정 포함)
├── 📂 utils/                     # 유틸리티 함수 모음
│   └── apiClient.ts              # API 호출 유틸리티 함수
├── 📂 hooks/                     # 커스텀 훅 모음
│   └── useAuth.ts                # 인증 관련 훅
├── 📂 types/                     # TypeScript 타입 정의
│   └── index.ts                  # 공통 타입 정의
├── 📂 context/                   # 컨텍스트 관리
│   └── AuthContext.tsx           # 인증 관련 컨텍스트
├── 📄 tailwind.config.js         # TailwindCSS 설정 파일
├── 📄 tsconfig.json              # TypeScript 설정 파일
├── 📄 next.config.js             # Next.js 설정 파일
└── 📄 README.md                  # 프로젝트 설명서

