import { useState } from "react";
import TodoList from "../components/TodoList";

export default function CheckBox() {
  // useState() 괄호 사이에 초기값 넣어주기 // 여기선 객체 배열로 설정할거임
  const [todos, setTodos] = useState([
    {
      id: 1,
      checked: true,
      text: "나는 체크박스",
    },
    {
      id: 2,
      checked: false,
      text: "옆에 박스를 눌러봐 📦",
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
      <h3>베열로 구성된 체크박스를 보여줍니다.</h3>
      <TodoList todos={todos} onCheckToggle={onCheckToggle} />
    </div>
  );
}
