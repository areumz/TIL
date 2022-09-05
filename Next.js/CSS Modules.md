# CSS Modules

* 기본적으로 React.js에서 사용되는 CSS Modules와 사용법이 같음

```js
...
<a className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}
.....
```

* 위와 같이 두개의 클래스명을 줄 수도 있음
