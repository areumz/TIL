# 비동기 return시 간과할 수 있는 부분

* 아래 코드의 문제점?
  * `$.get()`로 데이터를 요청하고 받아올 때까지 기다려주지 않고 다음 코드인 return tableData;를 실행했기 때문에 undefined
  * 따라서, `getData()`의 결과 값은 초기 값을 설정하지 않은 tableData의 값 undefined를 출력
```js
function getData() {
	var tableData;
	$.get('https://domain.com/products/1', function(response) {
		tableData = response;
	});
	return tableData;
}

console.log(getData()); // undefined

```

* 개선된 코드 - 콜백 함수 사용
```js
function getData(callbackFunc) {
	$.get('https://domain.com/products/1', function(response) {
		callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
	});
}

getData(function(tableData) {
	console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
});

```

* 오늘 fetch 사용을 하면서, 급한 마음에 막 데이터를 return 해서 받아오려할 때 잘 안될 때가 있었다   
이 부분을 간과하고 막 사용해서 그런듯함...   
기초 공부를 더 탄탄히 해야겠다 잊어버리지 않도록!

> 출처 :  [자바스크립트 비동기 처리와 콜백 함수 - 캡틴판교](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)
