# CSS 특강
> 빔캠프 이종찬 대표님   
> https://www.youtube.com/c/veamcamp

* CSS 작업은 디테일이 아닌 큰 덩어리를 먼저 볼 수 있어야하고, 설계해야함   
브라우저에 표현된 모든 것들은 관심있게 봐야함! -> 우리나라 문화권 영향으로 왼쪽 기준으로 줄어들고 늘어남

*
```
//div : type selector, back~ : property, orange : value
div {
    background-color : orange;
}
```

* type selector는 위험하므로 초기화해줄 때만 사용

* 자식 요소의 너비 미지정일 때 부모 요소 기준으로 가득차게됨

* `margin : initial;`
초기값을 명시적으로 적어주는 것 = 0 (IE 지원 x)   
`width: auto;`   
이것도 0으로 인식 -> 부모 크기만큼 가득참   
`height: auto;`   
컨텐츠 높이만큼 자동 조절

* `margin: 0 auto;`
좌우는 블록레벨이 차지할 남은 공간이 있기에 auto로 하면 가운데 정렬되지만   
상하는 블록레벨의 공간이 아니기에 가운데 정렬 x   

* background-attachment
    * 배경이미지의 스크롤 여부를 정하는 속성
    * scroll : 선택한 요소와 같이 움직임. 내용을 스크롤하면 배경 이미지는 스크롤되지 않음 (기본)
    * fixed : 움직이지 않음
    * local : 선택한 요소와 같이 움직임. 내용을 스크롤하면 배경 이미지도 스크롤됨
    * initial : 기본값으로 설정
    * inherit : 부모 요소의 속성값을 상속 받음

* 화려한 손흥민의 기술을 따라한다고, 손흥민처럼 되는 것은 아님   
풀타임으로 뛸 수 있는 기초체력이 필요   
웹 FE 단에서 기초체력은 무조건 HTML, CSS, JS!   
입문이 쉬운거지 자유자재로 다루기 위해서는 수련이 필요함   
CSS 마스터했다는건 x 수련을 통해 한층한층 업그레이드!!   

* 상속이 지원되는 속성은 초기화 해줄 때 inherit 키워드 즐겨 쓰자!
그 외에는 initial

* `width: fit-content;`   
컨텐츠에 맞게 width 조정 (IE는 지원 x)   

* `border-radius: 100px / 20px` 으로 특이한 모양 만들 수 있음

* header와 footer가 골격에 해당되어 그 부분 우선으로 작업하면 좋음

* 블록레벨 상하단 인접하는 마진은 겹쳐짐   
해결방법   
1.overflow: hidden (IE 고려)   
2.display: flow-root;   

* 우선순위 높이기 위해서 id 선택자 쓰기보다 class 두개 겹쳐서 쓰기
