## `<picture>`

* `<picture>` 요소는 `<source>` 요소와 `<img>` 요소를 통해 각기 다른 디스플레이 혹은 디바이스에 따라   
조건에 맞는 이미지를 보여주는 요소
    * `<img>` 요소의 srcset 이 화면에 따른 이미지의 크기를 조절한다면   
    `<picture>` 요소는 이미지 포맷 자체를 변경 할 수 있음
    
```
<picture>
    <source srcset="babies_large.jpeg" media="(min-width:960px)">
    <source srcset="babies.jpeg" media="(min-width:620px)">
    <img src="babies_small.jpeg" alt="귀여운 아기 팽귄들">
</picture>
```

### media 속성
* `<picture>` 요소는 `media` 속성의 값을 통해 조건에 알맞는 이미지를 찾게 됨   
조건에 맞는 `<source>` 요소 안의 `srcset` 속성 값을 찾아 `<img>` 태그의 `src` 에 넣어 화면에 보여주게됨
* ‼️ 주의! 이러한 구조로 작동하기 때문에 `<img>` 요소가 없다면 이미지가 화면에 나타나지 않음
* `<picture>` 와 `<source>` 요소 자체는 이미지를 표현하지 않음

### type 속성
* 이미지의 포맷 타입을 브라우저에게 알려줌

```
<picture>
    <source srcset="babies.webp" type="image/webp">
    <source srcset="babies.avif" type="image/avif">
    <img src="babies.jpeg" alt="귀여운 아기 팽귄들">
</picture>
```

* 위에서부터 차례대로 브라우저가 지원하는 포맷인지 탐색하며 만약 지원하지 않는 포맷이라고 판단되면 다음 `<source>` 요소로 넘어감   
만약 모든 `<source>` 요소의 이미지 사용이 불가능하면 최후에 `<img>` 요소의 이미지를 랜더링   
때문에 WebP나 AVIF 와 같은 최신 포맷의 이미지를 지원하고 싶다면 크로스브라우징을 위해 `<picture>` 요소와 함께 사용 하는것이 좋음   
이러한 방식의 크로스브라우징 기법을 **‘점진적 향상기법’**이라고 함

## 점진적 향상 기법

* 기본적으로 예전 기술 환경에서 동작할 수 있는 기능을 구현해두고,   
최신 기술을 사용할 수 있는 환경에서는 최신 기술을 제공하여 더 나은 사용자 경험을 제공할 수 있는 방법
