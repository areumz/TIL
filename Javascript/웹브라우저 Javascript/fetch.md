# fetch
: 서버 request를 보내고 response를 받는 함수
```
fetch('https://www.google.com')
//서버 응답 온후 실행되는 콜백 함수. then이 콜백 등록
then은 Promise 객체의 메소드
.then((response) => response.text())
//윗 줄 실행되고 실행됨. 위의 response.text를 result로 받음
다른 단어로 대체 가능
.then((result) => { console.log(result); });
```
* (참고) Web = World Wide Web   
우리가 웹브라우저를 통해 돌아다니는 가상의 연결망 세계


