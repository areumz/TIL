# React.memo(ft. useMemo, useCallback)

* HOC(Higher Order Component) : 고차 컴포넌트   
어떤 컴포넌트를 받아서 새로운 컴포넌트를 반환해주는 컴포넌트

* `React.memo` 같은 HOC 사용하면 보통의 컴포넌트를 최적화된 컴포넌트로 반환해줌
    * 부모 컴포넌트 아래에 자식 컴포넌트가 있을 때, 자식 컴포넌트의 props 값을 memoization 해두면   
    부모 컴포넌트가 재 렌더링 될 때, 자식 컴포넌트가 계속 재 렌더링 되는 것이 아니라   
    props check를 통해 props가 바뀔 때만 재 렌더링 되도록 최적화 가능
    * 오직 props만 체크하기 때문에 상태 관리 함수를 사용하거나 하면 여전히 재 렌더링 됨   
  
* 무분별하게 사용하면 불필요한 낭비가 되기 때문에   
  1) 컴포넌트가 같은 props로 자주 렌더링 될 때
  2) 컴포넌트가 렌더링 될 때마다 복잡한 로직을 처리할 때 사용
  
* 그런데 props가 객체 형태일 경우, 주소값을 저장하기 때문에 memo 사용해서 컴포넌트를 최적화해도 최적화가 x (ex. memo(컴포넌트))
    * 이런 경우엔 props를 `useMemo` 사용해서 객체인 props값을 memoization하는 것도 같이 해야함
    * 함수의 경우 useCallback
     
    
> 참고 : [React.memo로 컴포넌트 최적화하기 (ft. useMemo, useCallback)](https://www.youtube.com/watch?v=oqUgcxwrnSY)
