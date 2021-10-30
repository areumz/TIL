## JSON.stringify() : 문자로 만들어줌
```
const player = {name:"Tom"}
JSON.stringify(player)
//객체든 array든 문자로 만들어줌
```
## JSON.parse() : 배열로 만들어줌
```
JSON.stringify([1,2,3,4]) //"[1,2,3,4]"
JSON.parse("[1,2,3,4]") //[1,2,3,4] JS가 이해할 수 있는 살아있는 배열
```
## forEach() : 주어진 함수를 배열 요소 각각에 대해 실행
```
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```
