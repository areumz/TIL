# line-height px로 쓰면 안되는 이유
* 이 속성에 절대값으로 px을 주면 안된다.(em도 마찬가지)
* 왜냐하면, 그 태그의 텍스트 사이즈가 변경되었을때(더 커졌을때) 고정값을 갖는 line-height 값은 변하지 x
    * 때문에 자연스럽지 못한 결과를 갖게 된다. 예를 들면, 텍스트 크기는 커졌는데 간격은 좁아지는 현상
* 그러므로 1.5 처럼 상대값으로 지정해주도록 하자.

> 출처: https://simsimjae.tistory.com/331
