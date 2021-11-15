# CSS 작업 전 해두면 좋을 setting
```
/* Reset CSS */
a {
    /* 색깔을 부모에게서 상속 */
    color: inherit;
    text-decoration: none;
}

button,
input,
textarea {
    font-family: "()", sans-serif;
    font-size: 16px;
}

button:focus,
button:active 
input:focus,
input:active 
textarea:focus,
textarea:active {
    outline: none;
    box-shadow: none;
}

ul,
ol,
li {
    list-style-type: none;
    padding-left: 0;
    margin-left:0 ;
}

p {
    /* 기본 폰트 사이즈, line-height, color 설정 */
}
```

> 출처 : 김버그의 HTML&CSS는 
