# Polymorphism and Generic Type
## Polymorphism 다형성
* 아래 예시처럼 많은 형태를 가진 함수를 다형성 이라고 함

## Generic type
* call signature를 작성할 때, 일반적인 concrete type이 아니라, 들어올 확실한 타입을 모를 때 사용
* type의 placeholder와 같음
* 아래 예시처럼 배열 내에 원소가 뭐가 올지 알 수 없는데 number, boolean, number|string 이렇게   
다양한 조합을 일일이 적어주는 것이 아니라 제네릭 타입을 씀

```js
// 이렇게 앞에 <>를 쓰고 안에 이름을 넣어줌. 일반적으로 T나 V 많이 씀. 뭐가 됐든 상관 없음
type SuperPrint = {
    <T>(arr:T[]):void
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint([1,2,3])
superPrint(["hello", true, 3])
```

> 출처 : 노마드코더 
