# Overloading
* 함수가 여러개의 call signatures를 가지고 있을 때 발생시킴

* **예시 1**
```js
type Config = {
    path: string,
    state: object
}

type Push = {
    (path: string): void
    (config: Config): void
}

const push: Push = (config) => {
    if(typeof config == 'string') {console.log(config)}
    else {
        console.log(config.path)
    }
}
```

* **예시 2**
```js
type Add = {
    (a:number, b:number) :number
    (a:number, b:number, c:number) : number,
}

const add:Add = (a, b, c?:number) => {
    return a +b
}
```

> 출처 : 노마드코더 'TypeScript로 블록체인 만들기'
