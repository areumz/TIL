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

//이 컴포넌트가 끝날 때 호출
useEffect( () => {
  return fucntion 이름() {실행 코드}
})
```

# Cleanup
```
function Hello() {
	function byFn() {
		console.log("bye :(");
}
	function hiFn() {
		console.log("created :)");
		return byFn;
}
	useEffect(hiFn, []);
	return <h1>Hello</h1>;
}
```
* 처음에 hiFn 작동, 이후 컴포넌트 망가지면 byFn 작동
