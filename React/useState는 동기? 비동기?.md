# useState는 동기? 비동기?

`useState는 비동기로 동작`
* 더 정확히는 `setState`가 비동기로 동작함!

* 왜? 성능 최적화 위해서
    * 하나의 페이지 또는 컴포넌트 내에 수많은 상태값 존재   
    만약 상태가 하나하나 바뀔 때마다 화면을 리렌더링한다면 문제 생길 수 있음

* 따라서 리액트 성능 향상을 위해 setState를 연속 호출하면 `배치(batch)**` 처리하여 한번에 렌더링   
`**배치(batch)`란? 더 나은 성능을 위해 여러개의 state 업데이트를 하나의 리렌더링으로 묶는 것. 16ms 단위로 배치 진행

* 동기적으로 처리하려면 인자로 함수를 집어넣거나 useEffect의 `의존성 배열**`을 활용하면 됨   
`의존성 배열?` useEffect 훅에 입력하는 두번째 매개변수

* **참고하면 좋은 코드**
```js
import React, { useState, useEffect, useRef } from 'react';

function Counter() {
  const [count, setCount] = useState(0)
  const [countTwo, setCountTwo] = useState(0)
  let countThree = useRef(0)
  let countFour = 0
  console.log(countThree)
  
  // 랜더링 됨
  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count) // 비동기 -> useEffect로 추적하면 동기 가능
  }

  // 렌더링 됨
  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1)
    console.log(countTwo) // 비동기 -> useEffect로 추적하면 동기 가능
  }
  
  // 클릭하면 변수의 값은 증가하지만 렌더링은 되지 않음
  const handleCountUpThree = (e) => {
    countThree.current = countThree.current + 1
    console.log(countThree.current)
  }

  // 렌더링도 안되고 다른 state가 변해서 재렌더링 되어도 0으로 초기화
  const handleCountUpFour = (e) => {
    countFour = countFour + 1
    console.log(countFour)
  }

  useEffect(() => {
    console.log('count가 감시되고 있습니다.')
    console.log(`감시된 변수 : ${count}`)
  }
, [count]) // count가 변경되는 것을 감시

  return(
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
      <div>{countThree.current}</div>
      <button onClick={handleCountUpThree}>up!</button>
      <div>{countFour}</div>
      <button onClick={handleCountUpFour}>up!</button>
    </>
  )
}


function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;
```
