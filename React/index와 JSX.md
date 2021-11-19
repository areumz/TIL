# index.html
* 웹 브라우저에서 가장 먼저 실행되는 파일   
보통 리액트 사용 안 하는 경우 html 태그 사용해서 브라우저에 나타날 화면을 그리지만, 리액트는 그런 방식 x

# index.js
* index.html 열리고 나서 실행. 리액트 코드중 가장 먼저 실행

```
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>안녕 리액트!</h1>, document.getElementById('root'));
```

* render 메소드로 html 태그 만들어줌   
첫번째 argument에 html 태그 그대로 작성. 리액트에서 지원하는 Jsx 문법   
두번째 argument에 요소 넣어줌   

* render 메소드는 보통 index.js에서 한번만 사용

## JSX
* JS와 html을 섞어 쓸 수 있는 JS의 확장된 문법   
그러나 html의 문법을 그대로 사용할 수 없음   
class를 객체 지향 개념으로 class 선언 시 사용하기 때문에, ```className```으로 작성해야함   
for 또한 ```htmlFor``` 라고 작성해야함   
이벤트 핸들러 또한 ```onBlur``` 이런 식으로 두번째를 대문자로 작성해야함 (Camel case)   

* 반드시 하나의 태그로 감싸줘야함      

```
<p>안녕</p>   
<p>리액트</p>   
```
이런건 오류   

```<div>```태그로 감싸줘도 되고, 이것을 쓰기 싫으면   

```
<Frament>
</Fragment>
```
로 감싸서 하면 괜찮음   
생각보다 자주 사용하기 때문에 ```<> </>```와 같은 축약형 문법으로 많이 사용   

* JSX는 실행시 JS 코드로 변환되어 사용

* JS 변수 { } 안에 넣어 활용. 변수뿐 아니라 JS 표현식 뭐든 사용 가능 (ex. product.toUpperCase)   
변수 + 변수도 사용 가능하지만, 왠만하면 new 변수 = 변수1 + 변수2 로 만들고   
사용하여 읽기 편하게 하는 것 추천   

* {} 안에 JS 표현식만 가능하기 때문에 if문이나 for문 함수 선언 같은 문장은 x

* imageUrl로 변수 선언해서 이미지 주소 넣고,   
<img src={imageUrl} ... 처럼 사용 가능   

* 이벤트 등록 addEventListener 말고   
```
function handleClic() {
	alert('곧 도착합니다!');
}

<button onClick={handleClick}>확인</button>
```
처럼 사용

> 출처 : 코드잇 웹 프론트엔드 개발 스쿨
