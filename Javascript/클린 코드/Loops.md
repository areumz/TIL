:heavy_check_mark:**Clean code**:grin:
```
const evens = items.filter((num) => num % 2 === 0);
const multiple = evens.map((num) => num * 4 );
const sum = multiple.reduce((a, b) => a + b, 0);
console.log(sum);
```
```
const result = items
  .filter((num) => num % 2 === 0)
  .map((num) => num * 4)
  .reduce((a,b) => a + b, 0);
console.log(result);
```
* 배열 관련해서 여러 단계 수행시 굳이 따로 따로 함수 만들지 않고 배열 API 사용
* 아래와 같이 chaining 할 수도 있음

> 출처 : 유튜브 채널 '드림코딩 엘리' 자바스크립트 프로처럼 쓰는 팁
