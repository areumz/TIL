# React란 무엇일까?
* React는 사용자 인터페이스를 구축하기 위한 선언적이고 효율적이며 유연한 JavaScript 라이브러리   
“컴포넌트”라고 불리는 작고 고립된 코드의 파편을 이용하여 복잡한 UI를 구성하도록 도움

* 화면에 출력되는 UI를 상태로 관리할 수 있음

* 순수 JS와 작업을 비교했을 때
```
let data = "Hello world"
const title = document.createElement("h1")
document.body.appendchild(title)
title.textContent = data
//이러한 방식으로 데이터를 화면에 출력하고, 만약 데이터를 바꾸게 되면

data = "안녕하세요"
title.textContent = title.textContent = data
//이렇게 data를 수정하고, 값을 반영해서 화면에 출력하기까지 따로 적어줘야함
```
  * React를 사용하면 돔 API를 직접 호출할 필요없이 상태만 관리해서 UI까지 제어가 가능함

> 출처 : https://ko.reactjs.org/tutorial/tutorial.html#what-is-react   
만들고 비교하며 학습하는 리액트 (react) - 인프런
