# Static Pre Rendering

* 리액트는 기본적으로 CSR(Client Side Rendering)
  * 서버가 아닌 클라이언트 즉, 내가 사용하고 있는 브라우저가 유저가 보는 UI를 만드는 모든 것을 함
  * 그러므로 처음 페이지를 열면, `<div>` 하나만 있는 빈 HTML이 있음
  * 그리고 이후에 브라우저가 React.js를 다운로드 받고, 소스 코드를 다운로드 받으면 그 때 다른 모든 것들을 렌더링해서   
    유저가 화면을 볼 수 있게 됨
  * 평소에 잘 체감이 안될 수도 있지만, 인터넷 속도를 느리게 해보면 처음에 아무 것도 없는 빈 화면이 뜨고   
    이후에 서서히 하나씩 뜨기 시작함 => 사용자 경험에 좋지 않음
    
* 그런데 Next.js는 이 페이지를 정적으로 미리 렌더링해줌
  * Next.js는 React.js를 백엔드에서 동작시켜서 페이지를 미리 만듦
  * 이게 component들을 render 시킴
  * 렌더링이 끝났을 때, 그것은 HTML이 되고, 소스 코드에 넣어주기 때문에 JS와 React.js가 로딩 되지 않아도 콘텐츠를   
    미리 볼 수 있음 => 사용자 경험 상승
  * 그리고 React.js가 로딩되면 기본적으로 이미 존재하는 것들과 연결이 되어(상호 작용) 움직임
  * SEO에도 좋음


> 출처 : 노마드코더 'Next.js 시작하기'