# TDZ (Temporal Dead Zone)

## TDZ란?
* '일시적 사각지대' 라는 의미
* 예시
```js
name; //reference error => TDZ
const name = 'Mark';
name;
```
* 즉, 변수 선언 및 초기화 하기 전 사이의 사각지대

## TDZ 영향을 받는 것과, 받지 않는 것
### TDZ 영향을 받는 것
: const, let, class, super() inside constructor(), default function parameters

### TDZ 영향을 받지 않는 것
: var, function, import

> 참고 : [Don't Use JavaScript Variables Without Knowing Temporal Dead Zone](https://dmitripavlutin.com/javascript-variables-and-temporal-dead-zone/)
