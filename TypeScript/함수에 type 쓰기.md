```js
// readonly : 읽기 전용 속성
type Player = {
     readonly name: string,
     age?: number
}

function playerMaker(name:string) : Player {
    return {
        name: name
    }
}

const marky = playerMaker("marky")
marky.age = 21
```
