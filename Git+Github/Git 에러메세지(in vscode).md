vscode에서 Git 사용하는 것을 연습하는데 git init 부터 에러메세지가 나서 굉장히 당황스러웠다;   
구글에 검색해보니 생각보다 간단하고 기본적인거였다

> 참고 : https://devbirdfeet.tistory.com/25   
위 블로그에서 도움을 받음!

```
git' 용어가 cmdlet, 함수, 스크립트 파일 또는 실행할 수 있는 프로그램 이름으로 인식되지 않습니다.    
이름이 정확한지 확인하고 경로가 포함된 경우 경로가 올바른지 검증한 다음 다시 시도하십시오
```
### 문제가 발생하는 이유
* Visual Studio Code의 기본 터미널이 Windows의 Power Shell로 설정되어 있기 때문   
기본 터미널의 종류를 cmd 또는 Git Bash로 변경하면 오류없이 실행이 가능함!   

### 문제 해결 과정
![image](https://user-images.githubusercontent.com/84116709/134469607-a85bfc94-70ed-47f0-a96e-c6a8939ad47d.png)
1. 처음에 ```powershell``` 로 되어있던 것을

![image](https://user-images.githubusercontent.com/84116709/134469805-1d1cbe85-6a44-4b87-82dc-31541dd5f6a6.png)
2. ```Select Default profile```을 눌러서

![image](https://user-images.githubusercontent.com/84116709/134469870-bae01bab-e056-42fa-8985-39712980623a.png)
3. ```Git Bash``` 선택해줌. 그리고 터미널 껐다 켜기 (위 블로그에서는 Select Default Shell 이었는데, 나는 왜 profile로 뜨는지 모르겠다ㅠ)

![image](https://user-images.githubusercontent.com/84116709/134470037-67083dc6-133e-4104-98aa-91908a1000bd.png)
4. 바로 잘 해결됨
