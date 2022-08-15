# dataset

```
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
* 위와 같은 dataset을 활용해서
```
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
