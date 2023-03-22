export const ADD = "ADD_TODO";
export const DELETE = "DELETE_TODO";

// 왜 id를 let으로 줬을까?
// > let 키워드로는 변수 중복 선언이 불가하지만, 재할당은 가능하다.
// 그렇다면 왜 함수 밖으로 뺐을까?
// > 함수가 새로 리렌더링 될 때마다 계속 처음 값으로 돌아가고, 계속 증가시켜야하기 때문에 함수 바깥에 위치시킴

let id = 1;

function add_todo(todo) {
  return {
    type: ADD,
    todo: {
      id: id++,
      title: todo.title,
      isComplete: todo.isComplete,
    },
  };
}

function delete_todo(id) {
  return {
    type: DELETE,
    id,
  };
}
