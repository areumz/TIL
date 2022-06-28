# Jasmine
* 2010년 발표된 오픈 소스 테스트 프레임 워크 
* `5 specs` 이라고 적혀있으면 다섯개의 테스트할 유닛이 있고   
`0 failures` 0개의 실패 라는 의미

* `SpecRunner.html`를 돌리면 테스트 돌릴 수 있음   
그래서 보통 테스트할 파일 새로 만들 때, `(file name).spec.html` 로 파일명 작성   

* 배포할 파일 `index.html / tddTest.js`
* 테스트할 파일 `index.spec.html / tddTest.spec.js`

----

# Jest
* 테스트 코드를 찾고, 실행하고, 실패인지 성공인지를 판단하는 테스트 러너   
facebook에서 개발하고 관리하고 있음. 때문에 React와 묶어서 자주 사용됨   

* 특징   
html 요소를 탐색하는데 접근성 마커 즉, aria를 이용함 (이 부분이 요소를 임의로 만드는 Jasmine과 차이점)   
TDD를 작성함으로 자연스럽게 접근성을 향상시키는 장점.   
제스트가 요소를 aria를 통해 찾을 수 있다는 것은 스크린 리더들도 찾을 수 있다는 것!   

* 다양한 matcher 함수 찾아보려면~?   
https://github.com/testing-library/jest-dom   
