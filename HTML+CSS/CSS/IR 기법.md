# IR 기법

```
.screen_out 
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  text-indent: -9999px;
```
* w, h : 0 으로 준 것을 보아 SEO를 위해 만듦, 스크린리더를 위한 것이 x

```
.blind    
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
```
* 네이버 사용. margin이 없으면 인식하지 못하는 경우 있어서 -1px 넣었다고함
