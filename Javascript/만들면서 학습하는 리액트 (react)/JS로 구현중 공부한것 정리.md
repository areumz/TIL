# 헬퍼 함수 사용 이유?
* 복잡한 표현식은 헬퍼 함수로 옮기는게 좋음. 특히, 같은 로직을 반복해서 사용해야 할 경우
> 출처: https://excelsior-cjh.tistory.com/118 [EXCELSIOR]

# MVC 패턴 관련
* 뭔가 입력 -> 사용자 인터랙션 -> DOM 의 이벤트 발생시킴   
DOM과 직접적으로 일하는 것이 MVC에서 View 의 역할

* 폼에서 submit 이벤트 발생하면 서버로 페이지 요청 다시 함   
->페이지 다시 로딩됨   
(event.preventDefault() 해주면 리로딩 막을 수 있음)   

* 검색어 입력, x버튼 노출 유무 -> SearchFormView 에서 관리   
(SearchFormView 는 입력 폼 관련)   

* 그렇다면   
검색 결과 -> ResultView 에서 관리

* 폼에서 엔터 입력 까지만 SearchFormView가 처리, 검색 결과 보여주는 것은 ResultView에 위임   
->그러한 목적으로 "@submit" 커스텀 이벤트 발행

* 커스텀 이벤트(사용자 정의 이벤트)   
: 객체 지향 프로그래밍에서 객체와 객체 사이의 관계를 느슨하게 연결하는 수단

* SearchFormView를 관리하는 컨트롤러가 "@submit" 이벤트 받을 준비   
(in Controller)   
뷰 이벤트 구독 위한 subscribeViewEvents() 메소드 호출   
(각 뷰에서 발생하는 이벤트 구독 역할)   
폼 뷰에서 입력한 검색어와 함께 발행되는 "@submit" 이벤트를 검색 메소드가 처리하도록 연결   

# 메서드 체이닝(Method Chaining)   
* 메서드가 객체를 반환하게 되면, 메서드의 반환 값인 객체를 통해 또 다른 함수를 호출할 수 있음
```
on(eventName, handler) {
    on(this.element, eventName, handler);
    return this;
  }
```
이러한 메서드가 있다면,
```
subscribeViewEvents() {
    this.searchFormView.on("@submit", (event) =>
      this.search(event.detail.value)
    ).on("@reset", () => this.reset())
  }
```
위와 같이 사용 가능
