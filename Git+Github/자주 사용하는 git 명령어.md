* git init : 빈 저장소 만들어짐   
* git config --global user.name "(내 이름)" : 이름 등록   
* git config --global user.email "(내 메일주소)" : 이메일 등록   
* git status : 아직 담기지 않은 파일 보여줌   
* git add -A : 이 곳의 모든 것을 git에 저장함   
* git commit -m "(커밋 메세지)" : 커밋   
* git log : 캡슐의 정보들과 메세지가 뜸   
(git log 실행시 글자가 안 쳐질때는 :p 로 빠져나오기)   
* git branch (브랜치 이름) : 새로운 브랜치 생성   
* git checkout (브랜치 이름) : 브랜치 변경   
* git checkout -b (브랜치 이름) : 브랜치 생성 후 바로 그 브랜치로 넘어감   
* git checkout -b (브랜치 이름) (원격명)/(브랜치명) : 로컬에 브랜치 생성해서, 거기에 원격의 브랜치를 가져오고 그쪽으로 넘어감   
* git merge (병합할 브랜치 이름) : 병합   
(window : 바로 적용, mac : :wq)   
* git log --graph --all --decorate : 시각화된 분기 작업 내용 확인   
* git rebase : 한줄로 합쳐짐 (소스트리에서는 재배치)   
* gt branch -D (브랜치 이름) : 브랜치 삭제   
* git branch : 로컬 브랜치 확인   
* git branch -a : 로컬과 원격 브랜치 모두 확인   
* git remote : 현 폴더의 원격 레파지토리 확인   
(git remote add origin (깃헙 주소.git))   
* git push -u origin master : 현 브랜치에 커밋된 내용 origin의 master 브랜치에 올림   
* git (원격명) (브랜치명) : 브랜치를 원격저장소에 올림   
* git clone (깃헙 주소.git) : 원격저장소의 내용 로컬로 다운 받기   
* cd (폴더명) : 폴더 안으로 들어가기   
* git fetch 그리고 git status 확인 : 뒤쳐진 커밋 확인 가능   
* git pull (원격명) (브랜치명) : 뒤쳐진 커밋 다운   
* git push -d (원격명) (브랜치명) : 원격의 브랜치 삭제   
* git checkout -f (브랜치명) : 브랜치 이동시 변경된 파일을 무시하는 옵션   
* code . : 에디터를 열여줌   
* npx (노드 모듈) : 노드로 만든 모듈 실행할 수 있게 해주는 프로그램   
  * 노드 모듈 뒤에 올 수 있는 옵션
     --baseDir (폴더명) : (노드 모듈/lite-server같은) 이 웹 서버를 돌리는데 (폴더명) 기준으로 해라   
     (이 옵션을 주지 않으면 현재 폴더 기준으로 웹 서버 돌릴 것)   

### Reset (소스트리 Hard ver.)   
* git log에서 commit 뒤의 일련번호 앞 6자리 복사   
* git reset (일련번호 6자리) --hard   
: 현재 이 시점으로 와있다는 메세지 뜨고, 이후에 작업했던 것 사라짐   

### Revert
* git revert (일련번호 6자리) :wq 해서 저장
* 특정 사건을 골라서 없던일로 만들어줌 (이력 남음)   

### .gitignore : 숨김 파일   
1. gitignore 파일 만들고   
2. 숨겨야할 파일 만들고   
3. gitignore에 숨겨야할 파일명 적어주면   
4. 커밋시 숨겨야할 파일은 안 뜨게됨   




