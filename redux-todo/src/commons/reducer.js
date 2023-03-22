// Reducre: 데이터를 수정하는 함수
// state는 변하는 데이터를 의미하고 reducer 함수는 이러한 state를 변경시키는 함수이다.
// 이 함수가 return 하는 값이 state가 되는 것이다.
// 만약 reducer 함수에 return으로 "Hello"라는 스트링을 준다면 store에 있는 state는 Hello가 된다.

// action-creator 에게 받은 action.type, action.payload를 가지고
// 이제 실제로 해당 액션이 어떤 결과를 내어야 하는지를 이 reducer 에서 정의하도록 한다.

import { ADD, DELETE } from "./action";

// 생성을 위해서는 initialState 에 존재하는 todo 배열에 새로운 항목을 추가한 새로운 state를 반환하도록 한다.
const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
  if (action.type === ADD)
    return {
      todos: [...state.todo, action.todo],
    };
  else if (action.type === DELETE) {
    return {
      todos: [...state.todos.filter((todo) => todo.id !== action.id)],
    };
  } else {
    return state;
  }
};
