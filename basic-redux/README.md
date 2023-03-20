<img src="https://user-images.githubusercontent.com/101792929/226386738-055effc9-d844-4cec-accf-df3cf48c21b4.gif">

## 🔗 의존성 추가

- styled-components
- react-redux

## 🎨 UI 작업하기

- 홈 화면 만들기

## 🦄 리덕스 작업하기

- action type 만들기
- action creator 만들기
- reducer 만들기
- store 추가하기

### 🤓 배운 내용

- redux의 구성 요소

1. Provider
2. action
   2-1. action type
   2-2. action payload
3. action Creator
   : action 객체를 반환하는 함수
4. Dispatch
   : action 을 리듀서에게 전달한다
5. Reducer
   action이 새로운 state를 반환한다
6. Store
   : 관리하려는 state를 저장하는 곳

#### Provider

Provider 는 리덕스의 가장 기본이라고 할 수 있다.
state 를 관리하고 Global 하게 사용하기 위해서 사용위해서는 가장 최상위 컴포넌트에 Provider 컴포넌트를 부모 컴포넌트로 만들어야 한다.
보통 create-react-app 을 통해서 리액트 앱을 만들게 되면 App 컴포넌트가 가장 상위 컴포넌트가 된다.
App 컴포넌트 내부에 있는 컴포넌트들이 store를 사용할 수 있게 하기 위해서 index.js에서 <Provider /> 로 wrapping 해야 한다.

#### useDispatch, useSelector

리덕스를 함수형 컴포넌트에서 사용하기 위한 방법이다.

- useSelector 는 Redux Store 로 부터 state 를 가져올 때 사용한다.
- useDispatch 는 action 을 dispatch 할 때 사용할 수 있는 훅이다.

#### actions.js, reducer.js, store.js

- actions.js
  : action 생성을 하고 해당 action 이 어떤 일을 수행할지 지정한다.
  todo를 생성하기 위해서는 매개변수로 받은 todo 객체를 reducer 에게 반환 하고, todo를 삭제하기 위해서는 삭제하려는 todo의 id 만을 넘겨주도록 한다.

- reducer.js
  : action 을 실행시킬 reducer으로 action 객체를 받아 state 를 변경시킨다.
  action-creator 에게 받은 action.type, action.payload를 가지고 이제 실제로 해당 액션이 어떤 결과를 내어야 하는지를 이 reducer 에서 정의하도록 한다.
  생성을 위해서는 initialState 에 존재하는 todo 배열에 새로운 항목을 추가한 새로운 state를 반환하도록 한다.
  그리고 삭제에서는 action이 넘겨줄 id를 가지고 Array.filter() 메서드를 이용해서 id가 동일한 todo 객체를 삭제한 todos를 반환하도록 한다.

- store.js
  : reducer 로 global store 를 만들 redux store이다. commons 디렉토리를 생성하고 다음 3개의 파일을 각각 작성하도록 하자.
  리덕스 스토어에 reducer를 넣어주는 작업을 해당 파일에서 수행한다.
