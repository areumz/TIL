```
async function getResponses(urls) {
  for(const url of urls){
    const response = await fetch(url);
    console.log(await response.text());
  }
}
```
* 위 getResponses 함수는 urls라는 파라미터로, 여러 개의 URL들이 있는 배열을 받아서, 순서대로 각 URL에 리퀘스트를 보내고,   
그 리스폰스의 내용을 출력하는 함수
* 그런데 이 코드의 문제는 이전 URL에 리퀘스트를 보내고 리스폰스를 받아서 출력하고 나서야, 다음 URL에 대한 리퀘스트를 보낼 수 있다는 점   
즉, 순차적인 작업 처리를 한다는 점
    * 왜냐하면 이전 URL에 대해서 await 문이 붙은 Promise 객체가 fulfilled 상태가 될 때까지는 그 다음 URL에 대한 작업들이 시작될 수 없기 때문
* 만약 순차적인 처리를 해야 하는 경우라면 이 코드를 사용하는 게 맞겠지만, 만약 모든 리스폰스의 내용이 잘 출력되기만 하면 되고, 그 순서는 상관없는 경우라면   
이 코드는 성능 관점에서 아쉬운 점이 있는 코드입니다.
* 리스폰스의 내용의 순서가 중요하지 않은 경우라면 현재 코드를 아래와 같이 바꿀 수 있음

```
async function fetchUrls(urls){
  for(const url of urls){
    (async () => { // 추가된 부분!
      const response = await fetch(url);
      console.log(await response.text());
    })(); // 추가된 부분!
  }
}
```
* 각 url에 리퀘스트를 보내고 리스폰스를 받는 코드를, 별도의 즉시실행되는 async 함수로 감싸줌
* 이렇게 코드를 고치면 일단 각 URL에 대해서 fetch 함수를 실행해서 리퀘스트를 보내는 것을 순서대로 바로 실행   
이전 코드처럼 이전 URL에 대한 리스폰스가 오기까지를 기다렸다가 다음 URL에 리퀘스트를 보내는 게 아님
* 이렇게 코드를 쓰면 일단 모든 URL에 대한 리퀘스트를 쭉 보내버리고, 먼저 리스폰스가 오는 순서대로 그 내용이 출력됨
* 리스폰스의 순서를 보장하지 않아도 되는 경우에는 이 코드가 훨씬 성능이 좋음

> 출처 : 코드잇 웹 프론트엔드 스쿨
