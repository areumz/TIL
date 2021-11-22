# React 프로젝트 시작
```npm init react-app .```
* create-react-app으로 현재 디렉토리에서 프로젝트 생성
```
npx create-react-app my-app
cd my-app
npm start
```
* 이것 사용해서 폴더 만들어도됨

```npm run start```
* 프로젝트 실행. (개발 모드 실행) 단순히 실행만하는게 아니라 파일을 수정하면 그것을 인식해서 바로 반영해줌

```
npm i prop-types //타입 오류 등 체크해줌. 아래와 같이 사용

import PropTypes from "prop-types";

function Button({text}) {
    return <button>{text}</button>;
}
Button.propTypes = {
    text: PropTypes.string.isRequired,
}
```

```Ctrl + c``` : 개발 모드 종료      
(참고) Jsx : Javascript 코드 안에 태그 섞어 쓰는 것
