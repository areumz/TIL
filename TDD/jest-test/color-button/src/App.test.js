// 테스트용 App 파일
// 버튼을 누르면 red <-> blue 색상 바꿔주는 간단한 버튼

import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// test : 글로벌 함수. 두가지 인자를 가짐
// 첫번째 인자는 문자열로 테스트의 설명. 자스민에서는 describe
// 두번째 인자는 테스트를 실행하는 테스트 함수
test('버튼이 제대로 잘 작동하고 있습니까?', () => {

  // render : 인자로 받는 JSX의 가상돔을 생성. 여기서는 app 컴포넌트를 전달 받음
  render(<App />);

  // screen : 생성된 가상돔에 접근하기 위한 전역 객체
  // getByText : 인자로 전달된 텍스트를 가지는지 돔 안의 요소를 찾음. 정규표현식 형태로, 뒤에 붙는 i는 대소문자를 구분하지 않는다는 의미
  // const linkElement = screen.getByText(/learn react/i);

  // role은 aria에서 사용하는 요소의 역할을 의미하는 속성. 특정 요소는 role을 명시하지 않아도 암묵적으로 가지고 있는 경우도 있음. role값이 틀렸을 경우 친절하게 Jest에서 제안해주기도함. 암묵적인 role이 없을 경우 직접 명시
  // 두번째 인자로 찾아야할 요소 안의 텍스트는 무엇인지 알려줘야함
  const button = screen.getByRole('button', { name: 'change to blue!'})
  // toHaveStyle : 요소가 특정한 CSS 스타일을 가지고 있는지 체크
  expect(button).toHaveStyle({ backgroundColor: 'red'})

  // fireEvent : 가상돔과의 상호작용이 가능하도록 하는 객체
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'blue'})
  expect(button.textContent).toBe('change to red!')

  // expect : 기대한 결과가 성공인지 실패인지 판단하는 함수
  // toBeInTheDocument : matcher 함수. 자스민의 toBe() 함수 역할
  // expect(linkElement).toBeInTheDocument();
});
