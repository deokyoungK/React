import { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import './App.css';
import Template from './components/Template';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

// 함수가 새로 리렌더링 될 때마다 계속 처음 값으로 돌아가고, 계속 증가시켜야하기 때문에 함수 바깥에 위치시킴
let nextId = 4;

function App() {
  const [insertToggle, setInsertToggle] = useState(false);
  // useState() 괄호 사이에 초기값 넣어주기 // 여기선 객체 배열로 설정할거임
  const [todos, setTodos] = useState([
  {
    id: 1,
    text: '공부',
    checked: true,
  },
  {
    id: 2,
    text: '데이트',
    checked: true,
  },
  {
    id: 3,
    text: '알바',
    checked: false,
  },
]);

function onInsertToggle() {
  // 이전 값의 Boolean 값을 반대로 바꿔주는 함수를 리턴하도록 함
  setInsertToggle(prev => !prev)
};
 

function onInsertTodo(text){
    if (text === ""){
      return alert('할 일을 입력해주세요.')
    } else {
      const todo = {
        id : nextId,
        text,
        checked: false,
      }
      setTodos(todos => todos.concat(todo));
      // concat 함수란? push 함수를 사용하면 해당 배열 자체가 변경되고 concat함수를 사용하면 새 배열이 리턴되고 기존 배열은 변경되지 않음
      // concat함수를 이용해서 상태 불변성을 지켜주는 거임
      nextId++;
    }
};

  function onCheckToggle(id){
    // ...todo : todo가 가지고 있는 객체 속성을 모두 가져온다

    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }

  return (
    <Template todoLength={todos.length}>
      <TodoList 
      todos={todos}
      onCheckToggle={onCheckToggle}
      onInsertToggle={onInsertToggle} 
      onInsertTodo={onInsertTodo}
      />
      <div className='add-todo-button' onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && (
      <TodoInsert 
      onCheckToggle={onCheckToggle}
      onInsertToggle={onInsertToggle} 
      onInsertTodo={onInsertTodo}
      /> 
    )}
    </Template>
  );
}

export default App;
