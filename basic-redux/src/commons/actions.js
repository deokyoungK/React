// 일단 간단하게 1. todo생성과 2. todo삭제 액션만 사용할 것이다.
export const ADD = "ADD_TODO";
export const DELETE = "DELETE_TODO";

let id = 1;

// todo를 생성하기 위해서 매개변수로 받은 todo객체를 reducer에게 반환하고,
export const add_todo = (todo) => {
  return {
    type: ADD,
    todo: {
      id: id++,
      title: todo.title,
      isComplete: todo.isComplete,
    },
  };
};

// todo를 삭제하기 위해서는 삭제하려는 todo의 id만을 넘겨주도록 한다.
export const delete_todo = (id) => {
  return {
    type: DELETE,
    id,
  };
};
