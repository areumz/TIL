# URL, IP, PORT
## 📌 URL이란?
* Uniform Resource Locator(인터넷에서 자원 위치)
* 즉, 웹에서 정해진 유일한 자원의 주소
* 또는 웹에 존재하는 특정 데이터를 나타내는 문자열
```
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```
* http : 프로토콜(규약)
* www.example.com : 도메인 네임
* :80 : 포트
* /path/to/myfile.html : 자원의 경로
* ?key1=value1&key2=value2 : 추가 파라미터
* #SomewhereInTheDocument : anchor

## 📌 IP란?
* IP 주소(영어: Internet Protocol address, IP address, 표준어: 인터넷규약주소)란   
컴퓨터 네트워크에서 장치들이 서로를 인식하고 통신을 하기 위해서 사용하는 특수한 번호
```
172.16.254.1
```
* 위와 같은 형태로, 사람이 외우기 어려우므로 URL을 사용
* 도메인 네임을 컴퓨터가 바로 인식하기 어렵기 때문에 Domain Name Resolution이 필요함
    * Domain Name Resolution의 원리 따로 정리

## 📌 PORT란?
* 운영 체제 통신의 종단점
* 웹브라우저 프로그램과 서버에 있는 웹서버 프로그램간을 연결해주는 플러그(문)와 같은 역할을 하는 것
* IP 내에서 애플리케이션 상호 구분(프로세스 구분)을 위해 사용하는 번호
* 포트 숫자는 IP 주소가 가리키는 PC에 접속할 수 있는 통로(채널)을 의미   
    * 터미널에서 리액트를 실행하면 나타나는 화면에는, 로컬 PC의 IP 주소인 127.0.0.1 뒤에 :3000과 같은 숫자가 표현됨   
      리액트를 실행했을 때에는 로컬 PC의 IP 주소로 접근하여, 3000번의 통로를 통해 실행 중인 리액트를 확인할 수 있음   
      이미 사용 중인 포트는 중복해서 사용할 수 없음
    * 만약 다른 프로그램에서 3000번 포트를 사용 중이라면, 3001번 포트 번호로 리액트가 실행됨
* 포트 번호는 0~ 65,535 까지 사용할 수 있음.   
그 중에서 0 ~ 1024번 까지의 포트 번호는 주요 통신을 위한 규약에 따라 이미 정해져 있음

> 출처 : https://developer.mozilla.org/ko/docs/Learn/Common_questions/What_is_a_URL   
https://ko.wikipedia.org/wiki/IP_%EC%A3%BC%EC%86%8C   
https://run-it.tistory.com/19   
https://hanamon.kr/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EA%B8%B0%EB%B3%B8-ip-%EC%A3%BC%EC%86%8C%EC%99%80-%ED%8F%AC%ED%8A%B8-port/   

