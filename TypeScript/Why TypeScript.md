# Why TypeScript?
## TypeScript 장점
* 타입 안정성
  * 개발자 경험 상승, 코드 버그 줄어듦, 런타임 에러 줄어들고 생산성 높아짐

## JavaScript 단점
* 자바스크립트는 매우 유연한 언어   
에러를 잘 보여주지 않으려고 함

```js
[1, 2, 3, 4] + false
// '1,2,3,4false'
```
위와 같은 코드를 작성해도 에러를 뱉지 않음

```js
function divide(a, b) {
  return a/b
}

divide("xxxxxx"
// NaN
// 코드 실행을 막아주지 않음
```

```js
const user = { name : "mark" }
mark.hello()

// 코드 실행시 에러를 뱉지만, 이상적으로는 그 전에 실행을 막아야함
```
