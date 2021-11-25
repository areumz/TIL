 :heavy_multiplication_x: :rage:**Bad code**
```
function printMessage(text) {
  let message = text;
  if (text == null || text == undefined) {
    message = 'Nothing to display';
  }
  console.log(message);
}
```
:heavy_check_mark: :grin:**Clean code**
```
function printMessage(text) {
    const message = text ?? 'Nothing to display';
    console.log(message);
}
```

 :blue_heart:참고
 * logical OR (||) 연산자로 위와 같은 코드를 작성할 때는 null, undefined를 포함한 모든 falsy에 해당(NaN, 0, false...)
 * 값뿐만 아니라 저 자리에 함수가 들어가도됨

> 출처 : 유튜브 채널 '드림코딩 엘리' 자바스크립트 프로처럼 쓰는 팁
