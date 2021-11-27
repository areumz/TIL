# Promisify
* Promise Chaining 안에서 비동기 실행되는 함수를 바로 사용하면, 나중에 실행되는 부분의 리턴값을 Promise Chain에서 사용할 수 없게됨   
그래서 아래와 같이 Promise 객체 직접 생성
```
function wait(text, milliseconds) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(text); }, 2000);
  });
  return p;
}
```
* 기존의 비동기 실행 함수들 중에서도 그 콜백을 한번만 실행하는 것들(setTimeout, readFile 등)만 Promisify해서 사용 가능
* 이것들과 달리 만약 콜백을 여러 번 실행하는 함수들(setInterval, addEventListener 등)인 경우에는 이렇게 Promisify하면 안됨
    * 왜냐하면 Promise 객체는 한번 pending 상태에서 fulfilled 또는 rejected 상태가 되고나면 그 뒤로는 그 상태와 결과가 바뀌지 않기 때문

## 상태가 결정된 Promise 객체 만들기
(1) fulfilled 상태의 Promise 객체 만들기
```const p = Promise.resolve('success');```

(2) rejected 상태의 Promise 객체 만들기
```const p = Promise.reject(new Error('fail'));```

## 번외 - 점심 메뉴 랜덤으로 정하는 코드
```
function pick(menus) {
  console.log('Pick random menu!');
  const p = new Promise((resolve, reject) => {
    if (menus.length === 0) {
      reject(new Error('Need Candidates'));
    } else {
      setTimeout(() => {
        const randomIdx = Math.floor(Math.random() * menus.length);        	const selectedMenu = menus[randomIdx];
        resolve(selectedMenu);
      }, 1000);    
    }     
  });
  return p;
}

function getRandomMenu() {
  return fetch('https://learn.codeit.kr/api/menus')
    .then((response) => response.json())
    .then((result) => {
      const menus = result;
      return pick(menus);
    });
}

getRandomMenu()
  .then((menu) => {
    console.log(`Today's lunch is ${menu.name} ~`);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log('Random Menu candidates change everyday');
  });
```

> 출처 : 코드잇 웹 프론트엔드 스쿨
