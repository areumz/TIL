# Web-font
## 갖다 쓰는 방법
* fonts.google.com 등에서 무료 폰트 얻을 수 있음
* body에 선언하면 전체 적용됨

## 폴더 내 폰트 제공하는 방법
```
@font0face {
  font-family: '(문서 내에서 사용할 폰트명 명명)';
  font-style: normal 등
  font-weight: 400 등
  src: url ()
  //fontface css trick에 양식 있음. 브라우저 맞춤
}
```

> 출처 : 김버그의 HTML&CSS는 재밌다
