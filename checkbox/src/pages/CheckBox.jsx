import { useState } from "react";
import TodoList from "../components/TodoList";

// 함수가 새로 리렌더링 될 때마다 계속 처음 값으로 돌아가고, 계속 증가시켜야하기 때문에 함수 바깥에 위치시킴

export default function CheckBox() {
  // useState() 괄호 사이에 초기값 넣어주기 // 여기선 객체 배열로 설정할거임
  const [todos, setTodos] = useState([
    {
      id: 1,
      checked: true,
    },
  ]);

  // onCheckToggle함수는 id를 인자로 받아와서 사용할 것임
  function onCheckToggle(id) {
    // setTodos함수를 이용하여 todos배열은 새로운 함수를 리턴할거고, 클린된 객체의 id를 봐가지고 그 id와 일치하는 객체를 찾아서
    // checked: true < 요 boolean 값을 반대로 바꿔주면 된다.

    setTodos((todos) =>
      // 일단 map함수를 이용하여 todo를 받는다.
      todos.map((todo) =>
        // ...todo : todo가 가지고 있는 객체 속성을 모두 가져온다
        // todo.id와 인자의 id가 일치한다면, 스프레드 연산자를 이용하여 todo가 가지고 있는 속성을 모두 가져오고 checked값을 반대로 바꿔준다.
        // 만약 같지 않다면, 그냥 todo를 반환해준다.

        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }

  return (
    <div>
      <TodoList todos={todos} onCheckToggle={onCheckToggle} />
    </div>
  );
}
