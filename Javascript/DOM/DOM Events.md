# DOM Events
* event handler = event listner = event 콜백함수   
* 보편적으로 쓰이는 것은 ```addEventListner()```
  * load, resize. scroll, blur, focus, change, submit   
    click, mousedown, mouseenter, mouseleave, mouseup   
    keydown, keyup 이 많이 쓰임
    
# Event Flow
* HTML은 기본적으로 중첩된 구조. div를 클릭해도, body와 html도 이벤트 탑승
* Event의 진짜 주인 = currentTarget   
Event의 시발점 = target
```
1. Capture phase (=propagate up) : 브라우저에서 가장 가까운 요소부터 실행 (ex.html->body->div)
2. Target phase : 이벤트 시발점인 당사자 실행
3. Bubble phase : 다시 내려오며 실행 (ex.div->body->html)
```
* 보통 이런 흐름으로 실행되고, currentTarget과 target이 불일치할 경우 캡쳐?버블? 선택 가능   
ex)target.addEventListner("click", handler, true) //기본값은 false(bubble). true는 캡쳐

# 중요한 이벤트 객체 메소드 2개
```e.sotpPropagation()```
* 이후로 전파 멈추기
* 참고로 핸들러는 event 객체를 자동 제공 (관련된 메소드와 함께)   
보통 e, evt, event로 많이 씀 (다른 이름 상관 없지만 굳이..)   
```e.preventDefault()```
* 기본 동작 막기

 > 출처 : [프론트엔드 개발자라면 반드시 알아야 할 필수 DOM 이벤트 10분 정리](https://www.youtube.com/watch?v=it46nEygRcM)   
 [DOM 이벤트 플로우 완벽하게 정리해드립니다. 캡쳐냐버블이냐 프론트엔드개발기초](https://www.youtube.com/watch?v=7gKtNC3b_S8)   
 [필수 DOM 이벤트 객체 메소드 2개 (면접에서도 묻더라... 부들) stopPropagation preventDefault](https://www.youtube.com/watch?v=SbSAlxw9Lz8)
