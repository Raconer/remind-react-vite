# React + Vite


## 프로젝트 구조
```
my-vite-app/
├── node_modules/       # 설치된 의존성
├── public/             # 정적 파일 (favicon, 이미지 등)
│   └── vite.svg        # Vite 기본 로고
├── src/                # 소스 코드
│   ├── assets/         # 이미지, 스타일 등 정적 파일
│   ├── components/     # React 컴포넌트 폴더
│   ├── App.css         # 메인 CSS 파일
│   ├── App.jsx         # App 컴포넌트
│   ├── main.jsx        # React DOM 렌더링 진입점
│   ├── index.css       # 전역 스타일
│   ├── api/              # API 호출 관련 파일 - 선택
│   ├── hooks/            # Custom Hooks - 선택
│   ├── pages/            # 페이지 컴포넌트 - 선택
│   ├── routes/           # React Router 설정 - 선택
│   ├── services/         # 비즈니스 로직 (e.g., API 서비스) - 선택
│   └── utils/            # 유틸리티 함수 - 선택
├── .gitignore          # Git에서 무시할 파일 목록
├── package.json        # 프로젝트 정보 및 의존성
├── vite.config.js      # Vite 설정 파일
├── README.md           # 프로젝트 설명 파일
└── yarn.lock / package-lock.json  # 의존성 잠금 파일
```

## 추가 모듈

### 1. React Router
```shell
npm install react-router-dom
```
#### React Router란?
* React Router는 "React 애플리케이션에서 라우팅(페이지 전환)"을 담당하는 라이브러리
* 싱글 페이지 애플리케이션(SPA)에서 URL에 따라 다른 컴포넌트를 렌더링하기 위해 사용

#### 사용 이유
* React 자체에는 내장된 라우팅 기능이 없기 때문에 React Router를 사용해 SPA에서 페이지 이동을 구현

#### 주요 특징
* 동적 라우팅: URL에 따라 컴포넌트를 동적으로 렌더링.
* Nested Routes: 부모/자식 경로 지원.
* 라우팅 관리: BrowserRouter와 HashRouter 방식 지원.
* Link 컴포넌트: 페이지 새로고침 없이 링크 이동 가능.

#### 사용예시
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### 2. 상태 관리 라이브러리 예시 (Redux Toolkit)
```shell
npm install @reduxjs/toolkit react-redux
```

#### Redux란?
* Redux Toolkit은 React 상태 관리 라이브러리 Redux의 공식 툴킷 
* Redux의 복잡한 설정 문제를 해결하고, 더 간결한 코드 작성을 돕습니다.

#### 사용이유
* React의 기본 상태 관리(Context API)보다 더 큰 규모의 상태 관리가 필요할 때 Redux를 사용
* Redux Toolkit은 이를 더 쉽게 제공

#### 주요 특징
* 간단한 설정: 상태 관리에 필요한 코드를 줄임.
* 비동기 처리: createAsyncThunk를 통해 비동기 작업 관리.
* Immutable 상태 관리: 상태 불변성을 자동으로 처리.
* Slices: 상태와 리듀서를 한곳에서 관리.

#### 사용 예시

1. 상태 생성 (slice 생성)
```jsx
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

2. Store 설정
```jsx
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

3. 예시 1., 2. 적용

```jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
```


3. Tailwind CSS 설치
```shell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

#### Tailwind CSS 란?
* Tailwind CSS는 유틸리티 퍼스트(Utility-first) CSS 프레임워크
* CSS를 직접 작성하지 않고 클래스 이름으로 스타일을 지정할 수 있도록 지원

#### 사용 이유
* 빠른 개발 속도: CSS를 직접 작성하지 않아도 클래스 조합으로 스타일링 가능.
* 일관된 디자인: 유틸리티 클래스 사용으로 팀 내 디자인 일관성 유지.
* 반응형 디자인 최적화: 반응형 디자인을 쉽게 구현 가능 (예: md:p-4, lg:text-xl).


#### 주요 특징
* 유틸리티 클래스 제공: 미리 정의된 클래스를 조합해 빠르게 스타일 작성.
* 커스터마이징 가능: tailwind.config.js 파일을 통해 색상, 크기 등을 커스터마이징.
* 반응형 디자인 지원: 모바일, 태블릿, 데스크톱 등의 브레이크포인트를 쉽게 구현.

#### 사용 예시

1. 설정 (tailwind.config.js)
```js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Tailwind 적용할 파일
  theme: {
    extend: {},
  },
  plugins: [],
};
```

2. 스타일 추가 (index.css)
```CSS
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. 예시 1., 2. 적용
```jsx
export default function App() {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg">
      <h1 className="text-xl font-bold">Hello, Tailwind CSS!</h1>
    </div>
  );
}
```

#### 정리
|라이브러리|역할 및 주요 사용 이유|
|--|--|
|React Router|URL 경로에 따라 다른 컴포넌트를 렌더링. SPA에서 필수.|
|Redux Toolkit|React 상태 관리 도구. 간결한 코드로 상태를 관리.|
|Tailwind CSS|클래스 조합으로 빠르고 효율적인 스타일링. 디자인 시스템.|


#### 추후 사용해도 좋을 라이브러리
1. React Query
   * 사용처: 서버 상태 관리, 데이터 페칭 최적화 
   * 설치 방법: npm install @tanstack/react-query 
   * 특징: 캐싱, 리트라이, 동기화, 로딩/에러 관리에 최적화
2. Redux Thunk
   * 사용처: Redux에서 비동기 액션 처리
   * 설치 방법: npm install redux-thunk
   * 특징: 간단한 비동기 로직 관리
3. React Hook Form
   * 사용처: 폼 상태 및 유효성 검사
   * 설치 방법: npm install react-hook-form
   * 특징: 가볍고 빠른 폼 관리
4. Framer Motion
   * 사용처: React 애니메이션 구현
   * 설치 방법: npm install framer-motion
   * 특징: 간단하고 강력한 애니메이션 기능 제공
5. React Icons
   * 사용처: 다양한 아이콘 사용
   * 설치 방법: npm install react-icons
   * 특징: Font Awesome, Material Icons 등 통합 제공
6. React Table
   * 사용처: 대규모 테이블 데이터 관리
   * 설치 방법: npm install @tanstack/react-table
   * 특징: 정렬, 필터링, 페이징 등 고급 테이블 기능
7. Axios
   * 사용처: HTTP 요청 처리
   * 설치 방법: npm install axios
   * 특징: Fetch API보다 간편, 인터셉터로 공통 처리 가능
8. Styled Components
   * 사용처: CSS-in-JS 방식의 스타일링
   * 설치 방법: npm install styled-components
   * 특징: 컴포넌트 단위 스타일 관리
9. date-fns
   * 사용처: 날짜/시간 처리
   * 설치 방법: npm install date-fns
   * 특징: 가볍고 유연한 날짜 유틸리티 제공
10. React Hot Toast
    * 사용처: 사용자 알림(토스트)
    * 설치 방법: npm install react-hot-toast
    * 특징: 가볍고 직관적인 토스트 알림 구현
11. react-i18next
    * 사용처: 다국어 지원
    * 설치 방법: npm install react-i18next i18next
    * 특징: 효율적인 다국어 번역 및 관리
12. react-dropzone
    * 사용처: 파일 업로드
    * 설치 방법: npm install react-dropzone
    * 특징: 드래그 앤 드롭 기반 파일 업로드 구현
* 간단 팁
  * 소규모 프로젝트: React Hook Form, React Icons, Axios, React Query 추천
  * 대규모 프로젝트: Redux Toolkit, React Query, React Table, i18next 추가 고려