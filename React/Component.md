# Component
```
const element = <h1>안녕 리액트!</h1>;
```

* 이런식으로 JSX 코드 담고 있는 변수를 console에 출력해보면 JS 객체가 출력됨   
```React element```라 부름   
이 element를 ReactDOM의 render 메소드로 전달하면 React가 이 객체 해석해서 html로 렌더링
* React element를 함수 형태로 만들면, 커스텀 태그처럼 활용 가능
```
function Hello() {
	return <h1>안녕 리액트</h1>;
}

const element = {
	<>
		<Hello />
		<Hello />
		<Hello />
	</>
};
```
* 여기서 Hello 함수가 ```React component```

# React component가 될 수 있는 조건
* 함수명이 대문자로 시작
* JSX 문법으로 만든 React element를 return

> 출처 : 코드잇 웹 프론트엔드 개발 스쿨
