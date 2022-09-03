# 객체 내 선택적인 key
## 예시
```js
const player  : {
    name: string,
    age?: number
} = {
    name : "mark"
}

if(player.age && player.age < 10) {

}
```

* age라는 key를 선택적인 요소로 만들고 싶다면 위와 같이 ? 붙이기!
* 그렇게 되면 아래에 if문 작성 때 `player.age &&` 이 부분을 안 써주면 에러 표시해줌   
(undefined일 수도 있기 때문)
* 와우 엄청 편리하다...

## 여러개의 객체를 만들고 싶을 때
```js
type Player = {
     name: string,
    age?: number
}

const mark : Player = {
    name: "mark"
}

const summer : Player = {
    name: "summer",
    age: 20
}

```
