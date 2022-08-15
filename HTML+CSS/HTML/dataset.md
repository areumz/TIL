# dataset

```
<!-- index.html -->
    
      <button class="btn">
        <img
          src="img/blue_t.png"
          alt="tshirt"
          class="imgBtn"
          data-key="type"
          data-value="tshirt"
        />
      </button>
```
```
// data.json

{
  "items": [
    {
      "type": "tshirt",
      "gender": "female",
      "size": "large",
      "color": "pink",
      "image": "../img/pink_t.png"
    },
    ...
    ......
    ]
}
```
* 위와 같은 dataset을 활용해서
```
// main.js

function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }

  displayItems(items.filter((item) => item[key] === value));
}

```
JS 내 함수에 활용 가능

> 출처 : 드림코딩 쇼핑몰 미니게임 강의
