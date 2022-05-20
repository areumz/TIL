# Default parameters
```
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`)
}
showMessage('Hi!') //Hi! by unknown
```

# Rest parameters
```
//인자를 배열 형태로 받아줌
function printAll(...args) {
//더 간단하게 for of나 forEach로도 가능
  for(let i =0; i<args.length; i++)
  console.log(args[i])
}
printAll('dream', 'coding', 'ellie');
```

# Early return, early exit
```
//bad
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic...
  }
}

//good
조건에 안 맞을 경우 먼저 끝내버리기
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}
```

> 출처 : 유튜브 드림코딩 엘리 JS
