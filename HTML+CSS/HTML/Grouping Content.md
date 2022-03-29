# 😋 Grouping Content
```
* <ol>, <ul>, <li>
* <dl>, <dt>, <dd>
* <div>
* <figure>, <figcaption>
* <p>
* <pre>
* <blockquote>
* <main>
* <hr>
```
## `<ol>, <ul>, <li>`
* `<ol>` : ordered list. 순서가 있는 목록
* `<ul>` : unordered list. 순서가 없는 목록을
* `<li>`는 각 항목들을 나열하는 태그로 list item을 뜻함 
* 주의할 점은 `<li>` 요소는 `<ol>` 혹은 `<ul>` 요소 안에서만 사용되어야 하며,   
  `<ol>`, `<ul>` 의 직계 자식 요소로는 `<li>` 요소만 사용되어야 함
```
<h1>분야별 공부 분야 추천</h1>
<h2>Front-End</h2>
<ol type="A">
    <li>HTML</li>
    <li>CSS</li>
    <li>Javacript</li>
    <li>Jquery</li>
    <li>Bootsrap</li>
</ol>
<h2>Back-End</h2>
<ul>
    <li>Python</li>
    <li>Django</li>
</ul>
```

## `<dl>, <dt>, <dd>`
* 목록을 정의할 때 쓰임
* `<ol>, <ul>, <li>`와 차이점이 있다면 <dl>, <dt>, <dd>는 사전처럼 어떠한 것을 정의할 때 쓰이는 목록
* <dl>은 정의 목록(definition list)   
  <dt>는 정의할 용어(definition term)   
  <dd>는 용어를 설명(definition description)
```
<dl>
    <dt>HTML</dt>
    <dd>마크업 언어입니다.</dd>
</dl>
```
    
## `<div>`
* 레이아웃을 나눌 때 사용하는 태그
    * 이 태그는 컨텐츠의 형태를 변형시키지는 않지만 하위에 있는 여러 요소를 묶어 스타일을 변경시킬 수 있음
* 무분별한 사용 금지!
    * <article>, <section>, <header>, <nav>는 기본적으로 <div>와 같은 역할
    * 차이점이 있다면  태그에 의미를 부여한 것. 예를 들어 내용이 하나의 독립된 컨텐츠라면 <div>대신 <article>을 사용
    * 바꿔 말해 <article>, <section>, <header>, <nav> 모두 <div>로 대신 사용할 수 있으나   
      보다 적합한 요소를 찾은 후 대용할 태그가 없을 경우 사용하기

## `<figure>, <figcaption>`
* 이미지와 캡션(자막, 설명)   
<img src="https://paullabworkspace.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F28afb5bd-2e99-4dc1-a8f6-c047f5c112a3%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-10-30_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.15.01.png?table=block&id=d3b0319d-b21e-4d1d-8e97-894912f8711f&spaceId=579fe283-28aa-489d-ae65-d683304becfc&width=620&userId=&cache=v2">

```
<figure>
	<img src="" alt="">
  //이미지에 캡션 추가 위해 도입된 태그
	<figcaption>
		관심 받고싶어하는 아기
	</figcaption>
</figure>
```
    
## `<p>`
## `<pre>`
## `<blockquote>`
## `<main>`
<main>은 IE에서는 지원 x 주의

## `<hr>`
태그는 단락을 구분할 때 사용하므로 <p> 태그 내 사용은 웹 표준에 어긋남
은행권처럼 모든 곳에서 동일하게 보여야하는 경우 사용 x 이 경우 border-bottom 사용
