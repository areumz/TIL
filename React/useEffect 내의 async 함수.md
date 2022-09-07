# useEffect 내의 async 함수

```js
export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
...
......
```

* useEffect 내에 async 함수를 사용할 경우, 위와 같이 익명 함수일 경우 즉시실행함수형태로 호출하거나   
  기명 함수일 경우 호출을 해서 사용하는 것을 볼 수 있다
* 다른 함수와 달리 왜 그렇게 써야할까?
* async await 함수는 Promise 객체를 반환하기 때문에 부수효과(side effect) 함수가 될 수 없다   
* 부수 효과 함수는 함수만 반환 할 수 있으며, 반환된 함수는 부수 효과 함수가 호출되기 직전과 컴포넌트가 사라지기 직전에 호출된다
* 때문에 useEffect 훅에서 async await 함수를 사용하는 한 가지 방법은 부수 효과 함수 내에서 async await 함수를 만들어서 호출하는 것!

> 참고 : [[react] useEffect 훅에서 async await 함수 사용하기](https://velog.io/@he0_077/useEffect-%ED%9B%85%EC%97%90%EC%84%9C-async-await-%ED%95%A8%EC%88%98-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
