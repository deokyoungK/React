import { ADD, DELETE } from "./actions";
// action-creator 에게 받은 action.type, action.payload를 가지고
// 이제 실제로 해당 액션이 어떤 결과를 내어야 하는지를 이 reducer 에서 정의하도록 한다.

// 생성을 위해서는 initialState 에 존재하는 todo 배열에 새로운 항목을 추가한 새로운 state를 반환하도록 한다.
const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
  if (action.type === ADD) {
    return {
      // 만약 다른 state 가 존재한다면 전개 연산 ...state 를 해야함
      // 하지만 현재 state 에는 todos 하나 뿐이라 todos 만 반환하면 됨
      todos: [...state.todos, action.todo],
    };
    // 삭제에서는 action이 넘겨줄 id를 가지고 Array.filter() 메서드를 이용해서 id가 동일한 todo 객체를 삭제한 todos를 반환하도록 한다.
  } else if (action.type === DELETE) {
    return {
      todos: [...state.todos.filter((todo) => todo.id !== action.id)],
    };
  } else {
    return state;
  }
};
