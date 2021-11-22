# Module not found
```
Module not found: Can't resolve './styles.css' in 'C:\Users\Desktop\react-for-beginners\src'
```

* 클론 코딩 수업을 듣던중 위와 같은 오류가 발생하며 ```module.css```가 적용이 안되었음
* stackoverflow나 github 같은 곳을 찾아봤는데 아무래도 package.lock.json과 라이브러리 미설치 문제인듯함
    * package.lock.json 으로 버전이 잠겨있는데 module.css 관련을 나중에 설치하니 충돌이 일어난걸까?
* 지우고 재설치해도 잘 안되서, 초반이니 결국 새로 폴더를 만들고   
이번엔 ```package.lock.json```을 먼저 지우고 ```npm install```을 하니 정상 작동함
* 문제는 해결했지만.. 더 공부해야할듯함
