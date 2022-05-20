# DOM(Document Object Model)
* JS 입장에서 봤을 때, HTML은 문자열. 정보가 크게 없음   
이 HTML을 JS가 알 수 있는 형태로 바꾸는 것(parse) : ```DOM```   
(Document-HTML-를 객체 형태로) 바꿔서 의미 있게 Control

* 뭘로? Node로 바꿈 (유사한 계열 정도..)   
ELEMENT_NODE, TEXT_NODE, ATTRIBUTE_NODE 등등

```
<div class="parent">
  <!--COOMENT-->
 
 parent.firstChild //#text (왜? 공백 부분도 인식)
 parent.firstChild.nextSibling //COMMENT (왜? comment도 인식)
```

* 종류는
  * DOCUMENT_NODE (ex. window, document ...)
  * ELEMENT_NODE (ex. <body>, <a> ...)
  * ATTRIBUTE_NODE (ex. class="funEdges" ...)   
등 다양하다
  
> 출처 : [프론트엔드 개발자는 DOM을 알아야 합니다. How about you?](https://www.youtube.com/watch?v=CFgXIJ3RZ50)
