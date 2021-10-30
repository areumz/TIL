* 날씨 API 가져올 수 있음
```
https://openweathermap.org/api
```
```
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//날씨에 관한 정보. 성공시 onGeoOk 실행, 실패시 onGeoError 실행 과 같은 식으로 활용. () 안에 함수 이름은 바꿔서 사용 가능
```
```
const url = ~주소~
fetch(url) //크롬 개발자 도구 중 Network에서 확인 가능
```
