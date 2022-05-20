# Request
* Request의 method를 보고 구분
```
GET : 데이터 조회
POST : 데이터 추가
PUT : 데이터 수정
DELETE : 데이터 삭제
```
* 각 메소드는 CRUD 작업을 통해 서버에서 데이터 처리됨 (각각 READ / CREATE / UPDATE /DELETE)
* Request는 Head + Body로 이루어짐
    * Head에는 부가 정보 즉 메소드 같은 것이 담김. Head 내에 여러개의 header가 있음
    * Body에는 실제 데이터가 담김
    * 보통 POST나 PUT은 Body에 GET, DELETE는 Body 불필요


# POST Request 예시
```
const newMember = {
  name: 'Jerry',
  email: 'jerry@codeitmall.kr',
  department: 'engineering',
};

fetch('https://learn.codeit.kr/api/members', {
  method: 'POST',
  body: JSON.stringify(newMember),
})
    .then((response) => response.text())
    .then((result) => { console.log(result); });
```
* 참고 : GET은 기본, PUT도 이와 비슷하고, DELETE는 method만 써주면됨
* 만약 text 메소드 대신 json이라는 메소드를 사용하면 콜백 안에 JSON.parse 코드를 안 쓸 수 있음   
리스폰스의 내용이 JSON 데이터에 해당하는 경우, 바로 Deserialization까지 수행해주기 때문   
이렇게 json 메소드를 사용하면, 두 번째 콜백의 result 파라미터로는 Deserialization 결과로 생성된 자바스크립트 객체가 넘어가게 됨   
따라서 두 번째 콜백 안에서 JSON.parse를 해주지 않아도 result를 바로 자바스크립트 객체로서 사용할 수 있음   
참고로, 리스폰스의 내용이 JSON 데이터에 해당하지 않을 경우에는 에러가 발생함   
리스폰스의 내용이 JSON 데이터로 미리 약속된 경우에 response 객체의 text 메소드 대신 json 메소드를 사용함

> 출처 : 코드잇 웹 프론트엔드 개발 스쿨
