```
setInterval(function, ?ms)
```
* ?초마다 함수 실행   
ex) setInterval(hello, 5000) //5초마다 hello 함수 실행

```
setTimeout(function, ?ms)
```
* ?초 후에 함수 실행   
ex) setInterval(hello, 5000) //5초후에 hello 함수 실행
```
"1".padStart(2, "0")
//01
```
* 한자릿수 문자를 두자릿수로 만들 수 있음
```
const clock = document.querySelector("h2#clock");

function getClock () {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock();
setInterval(getClock, 1000);
```
* 위와 같은 방식으로 시계 구현

## const date = new Date(); 해서 사용하는 이유?
* 처음에 그냥 당연하게 생각했는데 복습하다보니 한번 더 정리하고싶어서 찾아봄
* Date() : 함수로 호출할 경우 new Date().toString()과 동일하게 현재 날짜와 시간을 나타내는 문자열을 반환   
typeof Date = function
* new Date() : 생성자로 호출할 경우 새로운 Date 객체를 반환
* 보통 우리가 알고자하는 시간 등은 ```Date.prototype.getHours()``` 인스턴스 메서드 방식으로 사용해야함
```
[Constructor].prototype
[instance].__proto__
[instance]
Object.getPrototypeOf([instance])
```
* 위의 네 줄은 모두 동일한 객체(prototype)에 접근할 수 있음   
따라서 ```const date = new Date()```로 객체 생성한뒤 date.getHours 처럼 바로 사용하는게 훨씬 간단함

> 출처 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date, 코어자바스크립트
