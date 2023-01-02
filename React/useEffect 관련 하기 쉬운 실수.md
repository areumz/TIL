# useEffect 관련 하기 쉬운 실수

* 예를 들어, 로그인된 상황에서만 데이터를 받아오는 로직이라고 가정

```js
// Lnb.js in MainPage

useEffect(()=>{
	let isSubscribed = true;
  
	const fetch = async () => {
		~~data fech 로직~~
	};
	fetch();
}, [isLogined])
```

  * 위 로직대로라면 로그인했을 때, useEffect를 실행시켜준다고 생각하기 쉽지만
  * useEffect의 동작 원리에 따르면 **1. 초기 렌더링 때 한 번 2. 로그인 했을 때 -> 이렇게 실행함**
  * 그렇다면? 메인 페이지 접속시 로그인하기 전에는, 메인에 접속할 때마다 위의 useEffect가 실행되고,   
    당연히 로그인이 안되어있으므로 에러 메세지를 계속 띄운다 (의도와 다르게 동작)
  * 그러므로 의도대로 작동시키기 위해서는 위 코드에서 `fetch()` 앞에 `isLogined && fetch()` 를 한 번 더 추가해줘야함
  * 아니면 `const isMounted = useRef(false)`를 활용해서 초기 렌더링 때 useEffect 동작을 막는 방법도 있음
