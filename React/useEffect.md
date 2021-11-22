# useEffect
* API를 불러온다던가 할 때 매번 상태 변화시 이 코드를 작동시키는게 아니라   
한번 또는 특정할 때만 작동시키고 싶을 때 사용

```
const [keyword, setKeyword] = useState("");

//처음 한번만 호출
useEffect( () => {
  console.log("Hello");
}, []);

//keyword 변화시 호출
useEffect( () => {
  console.log("SEARCH FOR");
}, [keyword]);
```
