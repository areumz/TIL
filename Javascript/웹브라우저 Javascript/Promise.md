# Promise 객체
* 작업에 관한 상태 정보 담고 있는 객체 (ex.fetch)
* 비동기적 작업 수행시 사용되는 객체

## 상태
```
pending 진행중
fulfilled 성공
rejected 실패
```
* then 메소드는 새로운 Promise 객체를 리턴하기에 Promise Chaning 가능

## Producer
```
const promise = new Promise((resolve, reject)=>{
  // doing some heavy work (network, read files)
  setTimeout(()=>{
    resolve('success!');
    또는 //reject(new Error('no network')); 이런식으로 사용
  }, 2000);
});
```
* promise 생성하면 전달된 executor 콜백 함수가 바로 실행됨

## Consumers
* then, catch, finally
```
//promise가 정상 작동시 받아올 값이 value
promise
  .then((value)=>{
  console.log(value);
})
//reject 되면 받아올 값이 error
  .catch((error)=>{
  console.log(error);  
});
//성공, 실패 상관 없이 마지막에 수행
  .finally(()=>{
  console.log('finally');
})
```

## 여러가지 사용 가능한 메소드
```
all, race, allSettled, any
```

> 출처 및 참고 강의 : 코드잇 강의, 유튜브 드림코딩 엘리 JS
