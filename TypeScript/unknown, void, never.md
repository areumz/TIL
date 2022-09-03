# unknown, void, never
## unknown
* 어떤 작업을 하기 전에 변수의 타입을 확인해야함
```js
let a: unknown;

if(typeof a === 'number') {
    let b = a + 1
}
```

## void
* 아무 것도 return 하지 않는 함수 대상
* 보통 이것을 지정해줄 필요는 없음

```js
function hello(){
    console.log('x')
}
```

## never
* 함수가 절대 return 하지 않을 때
* 자주 사용 안함

```js
function hi():never {
    throw new Error("xxx")
}
```
```js
function hihello(name:string|number) {
    if(typeof name === "string"){
        name
    } else if (typeof name === "number"){
        name
    } else {
        name
    }
}
```
* else 부분에 오는 name은 never, 즉 절대 실행되지 않아야함
