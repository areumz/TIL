# Web API
* ```API```란 Application Programming Interface의 약자로, '개발할 때 사용할 수 있도록 특정 라이브러리나 플랫폼 등이 제공하는 데이터나 함수 등'을 의미
* 웹 개발에서는 어느 URL로 어떤 리퀘스트를 보냈을 때, 무슨 처리가 수행되고 어떤 리스폰스가 오는지에 관해 미리 정해진 규격을 ```Web API```라고도 함
* Web API를 설계한다는 것은 서비스에서 사용될 모든 URL들을 나열하고, 각각의 URL에 관한 예상 리퀘스트와 리스폰스의 내용을 정리한다는 뜻
    * 어느 방식으로 설계해도 서비스가 동작하는 데는 아무런 문제가 없음. 하지만 기능적으로 아무런 문제가 없다고 해도 Web API를 아무렇게나 설계해도 되는 것은 아님
    * Web API가 잘 설계되었는지에 관한 기준으로는 보통 ```REST API```라는 기준 사용. 많은 개발자들이 Web API를 개발할 때 이 REST API를 준수하기 위해 노력함

# REST API
* REST API는 오늘날 많은 웹 개발자들이 Web API 설계를 할 때, 준수하기 위해 노력하는 일종의 가이드라인


## REST architecture란?
* 미국의 컴퓨터 과학자인 Roy Fielding이 본인의 박사 논문 'Architectural Styles and the Design of Network-based Software Architectures'에서 제시한 개념   
웹이 갖추어야 할 이상적인 아키텍처(구조)로 REST architecture라는 개념을 제시
* 여기서 REST는 Representational State Transfer(표현적인 상태 이전)의 줄임말로, 해석하면 '표현적인, 상태 이전'이라는 뜻   
이 용어는 Roy Fielding이 고안한 용어

## REST architecture가 되기 위한 조건
1. Client-Server
2. Stateless
3. Cache
4. Uniform Interface
5. Layered System
6. Code on Demand

### Client-Server
* Client-Server 구조를 통해 양측의 관심사를 분리해야함
* 웹 브라우저가 실행되고 있는 컴퓨터가 Client, 서비스를 제공하는 컴퓨터가 Server 이런식으로 분리를 해놓으면   
Client 측은 사용자에게 어떻게 하면 더 좋은 화면을 보여줄지, 다양한 기기에 어떻게 적절하게 대처해야할지 등의 문제에 집중할 수 있고,   
Server 측은 서비스에 적합한 구조, 확장 가능한 구조를 어떻게 구축할 것인지 등의 문제에 집중할 수 있음
* 이렇게 각자가 서로를 신경쓰지 않고 독립적으로 운영될 수 있는 것

### Stateless
* Client가 보낸 각 리퀘스트에 관해서 Server는 그 어떤 맥락(context)도 저장하지 않음
* 즉, 매 리퀘스트는 각각 독립적인 것으로 취급된다는 뜻. 이 때문에 리퀘스트에는 항상 필요한 모든 정보가 담겨야함

### Cache
* Cache를 활용해서 네트워크 비용을 절감해야함
* Server는 리스폰스에, Client가 리스폰스를 재활용해도 되는지 여부(Cacheable)를 담아서 보내야함

### Uniform Interface
* Client가 Server와 통신하는 인터페이스는 다음과 같은 하위 조건 4가지를 준수해야함. 이 조건이 REST API와 연관이 깊은 조건

```
(4-1) identification of resources : 리소스(resource)는 웹상에 존재하는 데이터를 나타내는 용어.   
이것은 리소스(resource)를 URI(Uniform Resource Identifier)로 식별할 수 있어야 한다는 조건. URI는 URL의 상위 개념

(4-2) manipulation of resources through representations : Client와 Server는 둘 다 리소스를 직접적으로 다루는 게 아니라 리소스의 '표현(representations)'을 다뤄야함   
예를 들어, Server에 '오늘 날씨'(/today/weather)라는 리소스를 요청했을 때, 어떤 Client는 HTML 파일을 받을 수도 있고,   
어떤 Client는 이미지 파일인 PNG 파일을 받도록 구현할 수도 있는데 이때 HTML 파일과 PNG 파일 같은 것들이 바로 리소스의 '표현'   
즉, 동일한 리소스라도 여러 개의 표현이 있을 수 있다는 뜻.   
리소스는 웹에 존재하는 특정 데이터를 나타내는 추상적인 개념. 실제로 우리가 다루게 되는 것은 리소스의 표현들뿐.   
이렇게 '리소스'와 '리소스의 표현'이라는 개념 2개를 서로 엄격하게 구분하는 것이 REST architecture의 특징

(4-3) self-descriptive messages : self-descriptive는 '자기설명적인'이라는 뜻   
위에서 살펴본 2. Stateless 조건 때문에 Client는 매 리퀘스트마다 필요한 모든 정보를 담아서 전송해야함   
그리고 이때 Client의 리퀘스트와 Server의 리스폰스 모두 그 자체에 있는 정보만으로 모든 것을 해석할 수 있어야 한다는 뜻   

(4-4) hypermedia as the engine of application state : 웹은 '분산 하이퍼미디어 시스템'(Distributed Hypermedia System)이라고도 할 수 있는데,   
여기서 하이퍼미디어(Hypermedia)는 하이퍼텍스트(Hypertext)처럼 서로 연결된 '문서'에 국한된 것이 아니라   
이미지, 소리, 영상 등까지도 모두 포괄하는 더 넓은 개념의 단어.   
즉, 웹은 수많은 컴퓨터에 하이퍼미디어들이 분산되어 있는 형태이기 때문에, '분산 하이퍼미디어 시스템'에 해당   
이 조건은 웹을 하나의 프로그램으로 간주했을 때, Server의 리스폰스에는 현재 상태에서 다른 상태로 이전할 수 있는 링크를 포함하고 있어야 한다는 조건   
즉, 리스폰스에는 리소스의 표현, 각종 메타 정보들뿐만 아니라 계속 새로운 상태로 넘어갈 수 있도록 해주는 링크들도 포함되어 있어야함
```

### Layered System
* Client와 Server 사이에는 프록시(proxy), 게이트웨이(gateway)와 같은 중간 매개 요소를 두고, 보안, 로드 밸런싱 등을 수행할 수 있어야함
* 이를 통해 Client와 Server 사이에는 계층형 층(hierarchical layers)들이 형성됨

### Code-On-Demand
* Client는 받아서 바로 실행할 수 있는 applet이나 script 파일을 Server로부터 받을 수 있어야함
* 이 조건은 Optional한 조건으로 REST architecture가 되기 위해 이 조건이 반드시 만족될 필요는 없음

## (4-1) identification of resources 관련 규칙
```URL은 리소스를 나타내기 위해서만 사용하고, 리소스에 대한 처리는 메소드로 표현해야함```
* 이 규칙은 조금 다르게 설명하자면, URL에서 리소스에 대한 처리를 드러내면 안 된다는 규칙
* 예를 들어 'https://learn.codeit.kr/api/members' URL로 리소스만 나타내고, 리소스에 대한 처리(리소스 추가)는 메소드 값인 POST로 나타냈기 때문에 이 규칙 준수한 것   
그러나 'https://learn.codeit.kr/api/members/add' 이 경우는 URL에서 리소스뿐만 아니라, 해당 리소스에 대한 처리(add, 추가하다)까지도 나타내고   
정작 메소드 값으로는 리소스 추가가 아닌 리소스 조회를 의미하는 GET을 설정했기 때문에 이 규칙을 어긴 것   
URL은 리소스를 나타내는 용도로만 사용하고, 리소스에 대한 처리는 메소드로 표현해야함

```도큐먼트는 단수 명사로, 컬렉션은 복수 명사로 표시함```
* 이 규칙은 URL로 리소스를 나타내는 방식에 관한 규칙. URL에서는 https://www.soccer.com/europe/teams/manchester-united/players/pogba   
이런 식으로 path 부분에서 특정 리소스(pogba, 축구 선수 포그바의 정보)를 나타낼 때 슬래시(/)를 사용해서 계층적인 형태로 나타냄   
지금 위 URL의 path 부분을 보면 '유럽의', '축구팀들 중에서', '맨체스터 유나이티드 팀의', '선수들 중에서', '포그바'라는 선수의 정보를 의미하는   
리소스라는 걸 한눈에 알 수 있음. 이렇게 계층적 관계를 잘 나타내면, URL만으로 무슨 리소스를 의미하는지를 누구나 쉽게 이해할 수 있음   
Web API를 설계할 때는 이렇게 가독성 좋고, 이해하기 쉬운 URL을 설계해야 하는데, 이 때 지켜야 할 규칙이 음

* 사실 리소스는 그 특징에 따라 여러 종류로 나눠볼 수 있음   
    * 보통 우리가 하나의 객체로 표현할 수 있는 리소스를 ```도큐먼트```라고 함   
    * 여러 개의 '도큐먼트'를 담을 수 있는 리소스를 ```컬렉션```이라고 함
    * 쉽게 비유하자면, 도큐먼트는 하나의 '파일', 컬렉션은 여러 '파일'들을 담을 수 있는 하나의 '디렉토리'에 해당하는 개념

* URL에서 '도큐먼트'를 나타낼 때는 단수형 명사를, '컬렉션'을 나타낼 때는 복수형 명사를 사용해야 함
    * 위 예시 URL에서 europe, manchester-united, pogba가 '도큐먼트'에 해당하고, teams, players가 '컬렉션'에 해당함

* POST 리퀘스트를 보낼 때, 컬렉션(members) 타입의 리소스를 대상으로 작업을 수행함
    * POST 리퀘스트를 보낼 때는 우리가 전체 직원 정보를 의미하는 컬렉션에 하나의 직원 정보(하나의 도큐먼트)를 추가하는 것이기 때문에   
    URL로는 컬렉션까지만 /members 이렇게 표현해줘야 함. 따라서 /members/3 이렇게 특정 도큐먼트를 나타내는 URL에 POST 리퀘스트를 보내는 것은 문맥상 맞지 않는 표현
    그리고 추가될 직원 정보가 어떤 id 값을 할당받을지 알 수도 없기 때문에 애초에 /members/[id]에 id 값을 지정한다는 것도 불가능

> 출처 : 코드잇 웹 프론트엔드 개발 스쿨

