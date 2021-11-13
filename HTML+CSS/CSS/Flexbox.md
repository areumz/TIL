# Flexbox   
: 정렬의 끝판왕

## 4 steps
### 선언
```
display: flex 또는 inline-flex
//각각 블록 , 인라인 블록과 비슷한 느낌
```
* 부모 요소에게 선언해주면 됨

### 정렬
```
flex direction: 
row 가로 (기본) row-reverse 가로 역방향 column 세로 column-reverse 세로 역방향
row와 column을 많이 씀
```
* Axis
    * 자기 방향으로 main axis, 그와 크로스 방향으로 cross axis 생김
    * main axis 기준 정렬 ? ```justify-content```
    * cross axis 기준 정렬 ? ```align-items 와 align-content```   
      align-items는 하나의 flex line 을 기준으로 함. 예를 들어 wrap 적용해서 넘쳐서 line이 두개 생기면.. 애매해짐   
      align-content는 큰 전체 line 을 기준으로 함
      
* 위 두가지에 줄 수 있는 것들
    * flex-statrt : 시작점 기준. 기본
    * flex-end : 끝점 기준
    * center : 가운데
    * space-between : 간격 균일
    * space-around : 조금 더 세밀히 간격 균일

### 한 줄?
```
flex-wrap: nowrap 또는 wrap
```
* nowrap : 기본 형태. 무조건 한줄! 자식 사이즈 줄여서라도
* wrap : 사이즈 넘어가면 다음 줄로 넘어감

### Flex party
* 참고 : order 로 그 안의 자식 요소 간 순서 바꾸기 가능
* flex-grow

> 출처 : 김버그의 HTML&CSS는 재밌다
