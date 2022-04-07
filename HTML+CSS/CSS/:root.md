# :root
* 웹 문서 구조에서 특정 위치에 있는 요소를 선택하는 가상 클래스중   
  `:root` 는 웹 문서 구조상 가장 상위 요소 선택시 사용
* 즉 html에서 root는 항상 html을 가리킴   
  그러나 html보다 :root 가상 클래스의 스타일 적용 우선순위가 더 높아서   
  문서 전반적으로 재사용할 여지가 있는 값을 작성
* 모든 요소에서 이 변수 사용이 가능하고, 한 번에 수정도 용이함
* 예시
```
:root {
            --pri: #CE705F;
            --sec: #ECD376;
        }
        ...
background-color: var(--sec);
```

> 출처 : [CSS :root 가상 클래스로 CSS 변수 다루기](https://designer-ej.tistory.com/entry/CSS-root-%EA%B0%80%EC%83%81-%ED%81%B4%EB%9E%98%EC%8A%A4%EB%A1%9C-CSS-%EB%B3%80%EC%88%98-%EB%8B%A4%EB%A3%A8%EA%B8%B0)
