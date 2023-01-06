# CSR

* 리액트는 SSR(Server Side Rendering)이 아닌 **CSR(Client Side Rendering)** 이다
* 리액트 프로젝트를 열고 개발자 도구 - Network 탭 안에서 `index.html`을 살펴보면   
아무 것도 없는 `<div id="root"></div>` 만 있다
* 그런데 어떻게 화면을 그리지? `bundle.js` 때문!
  * 프로젝트를 브라우저에 보여주기 이전에 웹팩이 코드를 압축해줌 (bundle.js) 매우 길고, 가독성이 떨어짐
* 그 밖에도 react devtool 관련이나 정적 이미지 등도 전달
* 리액트는 CSR(Client Side Rendering) 이기 때문에, 텅 빈 HTML 보내주고 우리 코드와 리액트 코드가 함께 브라우저에 전송되며   
클라이언트 사이드에서 코드가 동작. 필요한 DOM 요소를 다이내믹하게 동적 생성 (클라이언트 즉 브라우저 상에서)
