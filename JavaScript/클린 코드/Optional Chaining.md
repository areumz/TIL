 :heavy_multiplication_x:**Bad code**:rage:
```
function displayJobTitle(person) {
  if (person.job && person.job.title) {
    conole.log(person.job.title);
  }
}
```
:heavy_check_mark:**Clean code**:grin:
```
function displayJobTitle(person) {
  if (person.job?.title) {
    console.log(person.job.title);
  }
}
```

> 출처 : 유튜브 채널 '드림코딩 엘리' 자바스크립트 프로처럼 쓰는 팁
