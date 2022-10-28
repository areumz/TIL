# Context API


## Context API란?
* 리액트 내에서 전역적으로 사용할 데이터가 있을 때 사용
  * 리덕스, 리액트 라우터, styled-components 등 라이브러리도 Context API 기반
  * 리액트는 컴포넌트간 데이터를 props로 전달해야하기 때문에, 프로젝트가 복잡해지면 복잡한 절차를 거쳐서 전달해야하므로   
    Context API를 사용하여 복잡도를 줄일 수 있음
  * 리덕스나 MobX 등 많이 사용하지만 리액트 v16.3 업데이트 이후에는 Context API가 많이 개선되어,   
    별도 라이브러리 사용하지 않아도 쉽게 전역 상태 관리 가능
    
## 사용 방법
* **새 Context 만들기**
```js
// context 디렉터리 따로 만들기도 함
// context/color.js

import { createContext } from 'react';

// 파라미터에 기본 상태 지정
const ColorContext = createContext({ color: 'black' });

export default ColorContext;
```

* **Consumer**
  * 값 조회 가능
```js
// components/Colorbox.js

import React from 'react';
import ColorContext from '../context/color';

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
    
// Consumer 사이에 함수 넣어주는 패턴 : Function as a child (Render Props)
      {value => ( 
        <div 
          style = {{
            width: '64px',
            height: '64px',
            background: value.color
          }}
        />
      )}
    </ColorContext.Consumer>
  )
}

export default ColorBox
```

* **Provider**
  * Context의 value 변경 가능
```js
// App.js

import React from 'react';
import ColorBox from './components/ColorBox';
import ColorContext from './context/color';
const App = () => {
  return (
    <ColorContext.Provider value = {{ color: 'red' }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext>
  );
};

export default App;
```

* **동적 Context 사용**
```js
// context/color.js

import React, { createContext, useState } from 'react';

const ColorContext = createContext({ 
  state: { color: 'black', subcolor: 'red' },
  actions: {
    setColor : () => {},
    setSubColor : () => {}
  }
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');
  
  const value = {
  // 상태
    state: { color, subcolor },
  // 업데이트 함수
    actions: { setColor, setSubcolor }
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.Consumer와 같은 ㅡ이미
const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer }
export default ColorContext;
```

## Consumer 대신 사용 가능한 방법
* **useContext Hook**
```js
// components/ColorBox.js

import React, { useContext } from 'react';
import ColorContext from '../context/color';

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div 
        style={{
          width: '64px',
          height: '64px',
          background: state.color
        }}
      />
      <div 
          style={{
          width: '64px',
          height: '64px',
          background: state.subcolor
        }}
      />
    </>
  )
}
```
    
> 참고 : <리액트를 다루는 기술>
