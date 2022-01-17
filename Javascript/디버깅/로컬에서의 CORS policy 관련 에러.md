# :lock:상황
* 유데미에서 JS 실습 강의를 듣던중 파일을 로컬에서 열었을 때 아래와 같은 경고 문구 발생

```
Access to script at 'file:///C:/경로/js/module.js' from origin 'null' has been blocked by CORS policy:   
Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.   
```

* CORS에 관해서 공부를 하고 있어서 대략은 알고있지만, 로컬에서 실행했는데 왜 안되는거지? 의문이 들었음

# :key:해결
> 참고했던 사이트
* [로컬에서 CORS policy 관련 에러가 발생하는 이유](https://velog.io/@takeknowledge/%EB%A1%9C%EC%BB%AC%EC%97%90%EC%84%9C-CORS-policy-%EA%B4%80%EB%A0%A8-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%B0%9C%EC%83%9D%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-3gk4gyhreu)
* [MDN Web Docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules)
* 강의 실습 시 예제의 html 파일을 그대로 복사해왔는데, 거기에 script type = module로 되어있어서 발생한 문제
