import { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import './App.css';
import Template from './components/Template';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

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
}
 

  return (
    <Template todoLength={todos.length}>
      <TodoList todos={todos}/>
      <div className='add-todo-button' onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && <TodoInsert onInsertToggle={onInsertToggle} /> }
    </Template>
  );
}

export default App;
