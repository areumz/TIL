```js
type Player = {
     name: string,
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
