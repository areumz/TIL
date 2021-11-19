# State
* state 바꾸면 화면 렌더링 새로 가능

```
import { useState } from 'react';
```

으로 불러오고

```
//useState 함수는 파라미터로 초기값을 전달받고, 실행 후에는 배열의 형태로 요소 두개 리턴.   
따라서 아래와 같이 배열 디스트럭처링 문법으로 작성

const [num, setNum] = useState(1);

//setNum - setter 함수. 이 함수를 호출할 때 파라미터로 전달하는 값으로 state 값이 변경.
반드시 이 setter 함수 통해서만 값 변경. 그렇기에 const로 선언
setter 함수 이름 어떻든 상관 없지만 일반적으로 state 이름 앞에 set 붙임
```

