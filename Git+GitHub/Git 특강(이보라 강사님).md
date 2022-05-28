# Git 특강

* **참고할 자료들**
    * [커맨드라인 인터페이스, 셸, 터미널이란?](https://www.44bits.io/ko/keyword/command-line-interface-cli-shell-and-terminal)
    * [커맨드라인 사용법](https://www.44bits.io/ko/post/linux-and-mac-command-line-survival-guide-for-beginner)
    * [여러분의 CS교육에서 누락된 학기](https://missing-semester-kr.github.io/)
    * [WomenWhoCode Seoul](https://www.facebook.com/wwcodeseoul/)

* 프로젝트 README.md에 필수로 들어가야할 것?   
프로젝트 소개, 구동 방법!

* 운영체제마다 줄바꿈 처리하는 방식이 다름   
`window CRLF`   
`MacOS LF`   
=> 위 관련 warning 해결 `git config --global core.autocrlf true`

* `cd 폴더명` : 해당 폴더로 이동   
`pwd` : 현재 위치 확인   
`vim 파일이름.txt` : 해당 폴더에 그 파일이 없으면 vim editor 동작  
(window에서 명령어 인식 못하면 chocolatey 깔고 vim 깔기)   
처음 vim editor 켜지면 명령모드   
`i` 누르면 입력 모드   
`esc` 명령모드로 다시 바꿈   
`:w` 저장만   
`:q` 나가기   
`:wq` 저장 후 나가기

* 저장 안하고 비정상적으로 x 눌러서 닫으면 `swp 파일` 생성됨

* `diff 구 파일 신 파일` : 에러 찾기 

* 커밋은 논리적 변경이 있을 때 하나 만든다   
커밋 크기는 작을수록 좋음

* `git log` 커밋 이력 확인   
`git diff 커밋아이디1 커밋아이디2` 커밋 간 변경분 보기   
(아이디 앞 글자 몇 글자만 따도 됨 / 커밋 메세지가 같아도 아이디는 다름)   
-> 친절하지 않아서 extension이나 sourcetree같은 tool 사용   

* vscode 추천 extension   
Git Graph   
Git History   
Git Lens   

* `git checkout 커밋ID` 특정 시점 코드 상태 살펴보기   
(어느 시점에 버그가 있는 코드 추가되었는지 추적시 사용)   

* 크롬에서 확인할 때 강력 새로고침해서 확인! (캐시 쌓여있지 않도록)

* 체크아웃해서 살펴본 뒤 그 상태에서 코드 수정은 하지 말 것!

* `HEAD` 현재 체크아웃한 브랜치의 가장 최신 커밋을 가리키는 포인터

* `git checkout 브랜치명`   
직관적이지 않아서 새로 나온 것?   
`git switch 브랜치명`

* `git reset` 실수로 add한 파일 내리기(unstage)   
`git stash` 임시저장   
`git stash pop` 임시저장 복구


