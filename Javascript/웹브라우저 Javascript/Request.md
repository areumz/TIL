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
  method: 'POST';
  body: JSON.stringify(newMember),
})
    .then((response) => response.text())
    .then((result) => { console.log(result); });
```
* 참고 : GET은 기본, PUT도 이와 비슷하고, DELETE는 method만 써주면됨

> 출처 : 코드잇 웹 프론트엔드 개발 스쿨
