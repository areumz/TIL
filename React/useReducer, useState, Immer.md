# useReducer, useState, Immer

## 상태를 업데이트해주는 useState, useReducer

* 리액트에서 보통 상태를 관리할 때 `useState`를 사용
  * 그런데 컴포넌트가 복잡해지면 `useReducer` 사용해서 `상태 업데이트 로직`을 컴포넌트에서 분리 가능

* 그럼 useReducer vs useState 뭘 써야 할까?
  * 정답은 없음   
  예를 들어, 컴포넌트에서 관리하는 값이 하나고 그 값이 단순한 숫자, 문자열, boolean 값이면 useState가 편함   
  그러나 상태 구조가 복잡하다면 useReducer로 관리하는 것이 편할 수 있음
  
## Immer를 사용한 불변성 관리

* 리액트에서 배열이나 객체를 업데이트 해야 할 때에는 직접 수정 하면 안되고 불변성을 지켜주면서 업데이트를 해야함
  * 즉, 항목을 직접 수정하는게 아니라 map 등의 메서드를 이용해서 새로운 객체나 배열을 만들어야함

* 이럴 때 `Immer` 를 사용하면 우리가 상태를 업데이트 할 때, 불변성을 신경쓰지 않으면서 업데이트를 해주면 Immer 가 불변성 관리를 대신 해줌

> 참고 : https://react.vlpt.us/basic/20-useReducer.html