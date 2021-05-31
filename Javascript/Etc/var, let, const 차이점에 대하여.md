# 변수 선언 방식
```var```는 변수 선언 방식에 있어서 큰 단점을 가지고 있다.
var name = 'ararar'
    console.log(name) // ararar

    var name = 'javascript'
    console.log(name) // javascript

변수를 한 번 더 선언했음에도 불구하고, 에러가 나오지 않고 각기 다른 값이 출력됨

이는 유연한 변수 선언으로 간단한 테스트에는 편리 할 수 있겠으나, 코드량이 많아 진다면 어디에서 어떻게 사용 될지도 파악하기 힘들뿐더러 값이 바뀔 우려가 있음

그래서 ES6 이후, 이를 보완하기 위해 추가 된 변수 선언 방식이 let 과 const 이다.

위의 코드에서 변수 선언 방식만 바꿔보자

let name = 'ararar'
    console.log(name) // ararar

    let name = 'javascript'
    console.log(name) 
    // Uncaught SyntaxError: Identifier 'name' has already been declared
name이 이미 선언되었다는 에러 메시지도 나옴 (const도 동일함)

2. let과 const의 차이점
let : 재할당 가능

  let name = 'ararar'
    console.log(name) // ararar

    let name = 'javascript'
    console.log(name) 
    // Uncaught SyntaxError: Identifier 'name' has already been declared

    name = 'react'
    console.log(name) //react


const : 변수 재선언, 재할당 모두 불가능
   const name = 'ararar'
    console.log(name) // ararar

    const name = 'javascript'
    console.log(name) 
    // Uncaught SyntaxError: Identifier 'name' has already been declared

    name = 'react'
    console.log(name) 
    //Uncaught TypeError: Assignment to constant variable.

참조문서
https://velog.io/@bathingape/JavaScript-var-let-const-%EC%B0%A8%EC%9D%B4%EC%A0%90
https://gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d
