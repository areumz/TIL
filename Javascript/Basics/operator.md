```
참고
Immutable data types : primitive types, frozen objects
Mutable date types : all objects by default are mutable in JS
```
# operator
```
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter;
//preIncrement : 3, counter : 3

const preIncrement = counter++;
//preIncrement = counter;
//counter = counter + 1;
//preIncrement : 3, counter : 4
```
* or 연산자는 하나라도 true면 true이기 때문에,   
console.log(`or: ${value1 || value2 || check()}`);   

여기서 value1이 true면 뒤에 value2와 check함수는 실행 x   
그래서 가벼운 값을 앞에 두고 heavy한 함수나 expression은 마지막에!   

* 0 또는 '' 를 ==로 false와 비교시 true 출력되지만   
===로 false와 비교하면 boolean type이 아니기 때문에 false 출력   
null과 undefined 비교도 마찬가지   

> 출처 : 드림코딩 엘리 자바스크립트 4
