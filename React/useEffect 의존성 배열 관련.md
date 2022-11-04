# useEffect 의존성 배열 관련

```js
  useEffect(() => {
    console.log('리셋중');
  }, [emptyMsg]);
```

* 리액트 관련 작업을 하던도중, useState로 관리중인 emptyMsg 값이 바뀌지도 않았는데   
왜 자꾸 콘솔이 찍히는지 궁금했다

* **기본적으로 useEffect는 두번째 인자로 배열 형태의 의존값을 필수로 가진다. 의존값이 처음으로 생성됐을 때와 변경 될 때 이펙트 함수가 실행된다**

* 의존값이 처음 생성됐을 때 실행됐기 때문에 그런 것.. 까먹지 말자!

**(+) 추가**  
만약 마운트 될 때 말고, 업데이트 될 때만 실행시키고 싶다면 아래와 같이 코드 추가
```js
const mounted = useRef(false);
useEffect(() => {
  if (!mounted.current) {
    mounted.current = true;
  } else {
    console.log(name);
    console.log("업데이트 될 때마다 실행");
  }
}, [name]);
```
