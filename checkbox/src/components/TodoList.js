// TodoList에서는 App.jsdptj todos라는 인자를 받아올 거임
// todos는 할 일 목록이 들어있는 배열
import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onCheckToggle }) {
  return (
    <div className="TodoList">
      {/* list를 렌더링 할 때는 반드시 key를 넣어줘야 한다 */}
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onCheckToggle={onCheckToggle} />
      ))}
    </div>
  );
}
