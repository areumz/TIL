# Position
## Position에서 중요한 것
* Position은 원하는 위치에 요소를 이동시키는 것
* ```Type```과 ```기준점```이 중요함

### static
* 가장 기본

### relative
* 요소가 붕 뜨지만, 원래 위치를 기억
* 다른 요소에 영향 주지 않음

### absolute
* float과 비슷. 길막 못하는 블록이 됨
* float과 다른 점은 자기 부모->조상 순으로 확인해서   
static 아닌 요소를 기준 삼아 이동함

### fixed
* absolute와 비슷하지만, 기준점이 viewport

### z-index
* static 제외하고 생기는 값. 요소를 덮을 때 사용

## 그 외
* absolute 사용 후 top:50% 처럼 퍼센트 사용시에, 정 가운데에 안 올 수 있음 (relative 요소 기준이라)   
그 때 transfrom:translate 사용해서 맞추기 (ex.transform:translateY(-50%) 하면 위로 올라가서 맞춤)

> 출처 : 김버그의 HTML & CSS는 재밌다
