# TDD(Test-Driven Development)

## TDD와 Unit Test
* `TDD` Test Driven Development. 테스트 주도 개발

* `Unit Test(단위 테스트)` 특정 조건에서 함수(Unit)가 어떻게 작동해야하는지 정의하고,   
그러한 정의대로 함수가 잘 작동하는지 확인하는 방법론. 테크닉

## TDD의 단계
![image](https://user-images.githubusercontent.com/84116709/176200872-431150dc-0f6b-44c9-b646-422a79e248c0.png)
* TDD에서는 코딩을 할 때 기능을 바로 개발하지 않고, TDD라는 말 그대로 테스트 코드를 먼저 작성   
이 때 테스트 코드는 다음과 같은 단계를 먼저 가지게 됨   

**1. 적색 단계** : 성공하기 위해 테스트에 실패하는 단계   
**2. 녹색 단계** : 테스트에 성공한 단계   
**3. 리팩터 단계** : 테스트에 성공한 코드를 기반으로 코드의 품질을 높이는 단계(refactoring)    

TDD는 이 세가지 단계의 끊임없는 반복!   
1, 2 단계는 test 단계에서 알려주지만, 리팩터는 따로 알려주지는 않음   
