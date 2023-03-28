# useReducer, useState, Immer

## 상태를 업데이트해주는 useState, useReducer

* 리액트에서 보통 상태를 관리할 때 `useState`를 사용
  * 그런데 컴포넌트가 복잡해지면 `useReducer` 사용해서 `상태 업데이트 로직`을 컴포넌트에서 분리 가능

* 그럼 useReducer vs useState 뭘 써야 할까?
  * 정답은 없음   
  예를 들어, 컴포넌트에서 관리하는 값이 하나고 그 값이 단순한 숫자, 문자열, boolean 값이면 useState가 편함   
  그러나 상태 구조가 복잡하다면 useReducer로 관리하는 것이 편할 수 있음
  
  (수정중)

> 참고 : https://react.vlpt.us/basic/20-useReducer.html
