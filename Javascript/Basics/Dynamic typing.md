# Dynamic typing
* C언어, Java와 달리 Javascript는 datat type을 선언할 필요가 없는 Dynamic typing 언어
* 즉, 런타임 (컴퓨터 프로그램이 실행되는 동안의 동작) 에서 타입이 정해지기 때문에 데이터 타입으로 인한 런타임 에러가 발생하는 것 주의!
```
let text = 'hello'; //type : string
text = '7' + 5 ; //value : 75, type: string
text = '8' / '2'; //value : 4, type : number
console.log(text.charAt(0)); //error!!
```
* 이러한 것 극복 위해서 TypeScript 나옴
