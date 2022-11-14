# react-helmet

## react-helmet 이란?
* 웹 문서의 헤더 값을 변경할 때 사용하는 리액트 라이브러리
* SPA의 단점을 극복하는데 사용한다고 알려져있음

## 동작 원리
* 리액트 동작 원리상, 리액트 어플리케이션이 마운트 된 곳에 자식으로 그려질 것이라 예상하지만
* 헤더는 문서의 body가 아닌 head 영역에 존재. 그럼 어떻게 동작하는걸까?
* DOM API를 사용해서 직접 헤더를 변경하는 방식

## 그럼 크롤러가 읽을 수 있을까?
* 보통 HTML 문서 로딩 후 -> JS 실행
* 크롤러는 보통 문서가 로딩된 후 다녀가기 때문에 react-helmet으로 만들 데이터까지 못 가져가는 경우가 발생함
  * 페이스북의 경우 포스트 작성시에는 데이터를 가져오지 못하다가 포스트를 등록하면 og 태그를 가져오기도 하지만   
   (크롤러가 JS까지 실행한 후 데이터 가져가는 것으로 추측)
  * 트위터는 아무 것도 가져오지 못하며, 
  * 구글은 react-helmet으로 만들 데이터를 가져오지 못한다는 이슈가 등록되어 있다   
[Googlebot not crawling React Helmet title and meta description on homepage](https://github.com/nfl/react-helmet/issues/377)
 
## 결론
* 간단한 타이틀 정도만 바꾸려면 react-helmet을 사용해도 되지만, 크롤러에게도 읽히는 사이트가 되려면 SSR이 필요
  
> 참고 : [react-helmet의 동작 방식](https://jeonghwan-kim.github.io/dev/2020/08/15/react-helmet.html)
