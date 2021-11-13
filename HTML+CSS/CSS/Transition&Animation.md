# Transition
## property
* font-size, all 등 다양하게 줄 수 있음

## duration
* ms / s (1s === 1000ms)

## [timing=function]
* 생략 가능
* ease-in / ease-out / ease-in-out / cubic-bezier()

## [delay]
* 생략 가능
* 이 자리에 ms나 s 집어 넣기

# Animation
## name
```
@keyframes (~name~) {
  from {
  }
  to {
  }
}
//또는 0% 50% 100%
```
* 그 다음 animation-name: (~name~) 같은 식으로 적용

## duration / timing-function / delay
* transition과 사용법 동일

## iteration-count
* 되풀이. 숫자 또는 infinite

## direction
* alternate 주면 방향 번갈아가며 애니메이션 동작

## 전부 사용
```
.animation {
  animation: (~animation-name~) 1000ms ease-in-out 500ms infinite;
}
//이런식으로 사용 가능
```

> 출처 : 김버그의 HTML&CSS는 재밌다
