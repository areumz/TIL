```js
type Add = (a:number, b:number) => number;

// 여기에 a와 b의 타입을 따로 선언해주지 않아도 됨
const add:Add = (a,b) => a+b;
```
