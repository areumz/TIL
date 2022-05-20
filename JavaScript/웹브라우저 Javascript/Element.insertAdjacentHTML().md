# :cherries:Element.insertAdjacentHTML()
```_
element.insertAdjacentHTML(position, text);
```
* position에 들어갈 수 있는 내용
    * 'beforebegin' : element 앞에 
    * 'afterbegin' : element 안에 가장 첫번째 child
    * 'beforeend' : element 안에 가장 마지막 child
    * 'afterend' : element 뒤에
* text(인자)는 HTML 또는 XML로 해석될 수 있는 문자열이고(html code), (DOM) tree에 삽입할 수 있다
* ul 태그 안에 js로 li 태그를 넣을 때, innerHTML로 하게되면 계속 기존의 것을 덮어 씌우는데,   
이 때 ```insertAdjacentHTML```을 사용하면 계속 누적되는 형태로 사용 가능

> 출처 : [MDN 문서](https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML)
