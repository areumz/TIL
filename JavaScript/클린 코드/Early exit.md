# Early exit

```js
1)
if(target) {
  ...
  .....
  ....
} else {
  return
}

보다는 

2)
if(!target) {
  return;
}

...
.....
....

// 이렇게 조건이 안 맞으면 빨리 return 하고, 이후 조건 작성
```
