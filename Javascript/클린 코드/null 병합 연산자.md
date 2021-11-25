 :heavy_multiplication_x: :rage:Bad code
```
function printMessage(text) {
  let message = text;
  if (text == null || text == undefined) {
    message = 'Nothing to display';
  }
  console.log(message);
}
```
:heavy_check_mark: :grin:Clean code
```
function printMessage(text) {
    const message = text ?? 'Nothing to display';
    console.log(message);
}
```

> 출처 : 유튜브 채널 '드림코딩 엘리'
