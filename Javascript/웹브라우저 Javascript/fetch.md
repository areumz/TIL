# fetch
: 서버 request를 보내고 response를 받는 함수
```
fetch('https://www.google.com')
//서버 응답 온 후 실행되는 콜백 함수. then이 콜백 등록
then은 Promise 객체의 메소드
  .then((response) => response.text())
//윗 줄 실행되고 실행됨. 위의 response.text를 result로 받음
다른 단어로 대체 가능
  .then((result) => { console.log(result); });
```
*  fetch 함수는 비동기 실행. 이건 왜 존재할까?
    * '비동기 실행'이 '동기 실행'에 비해, 동일한 작업을 더 빠른 시간 내에 처리할 수 있기 때문
* (참고) Web = World Wide Web   
우리가 웹브라우저를 통해 돌아다니는 가상의 연결망 세계


