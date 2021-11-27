# catch
```
fetch('https://jsonplaceholder.typicode.com/users')
	.then((response) => response.text())
	.catch((error) => { console.log(error); })
	.then((result) => { console.log(result); });
```
* 첫번째 then에 두번째 parameter로 에러 메세지 넘기는 대신 위와 같이 catch 메소드 사용해도됨
* 보통 모든 에러를 대응하기 위해 마지막에 씀   
그러나 Promise Chain 중에서 비록 에러가 발생했다고 해도 만약 실패한 작업 대신 다른 방법을 통해서 작업을 정상적으로 끝마칠 수 있는 상황이라면   
catch 메소드를 중간에 사용하기도 함

# finally
* 상태가 성공, 실패에 관계 없이 항상 실행해서 출력할 때
* parameter 없이 사용 가능하며 catch 메소드보다 뒤에 씀

> 출처 : 코드잇 웹 프론트엔드 스쿨
