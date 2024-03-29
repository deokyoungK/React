import React from "react";

import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <Container>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Container>
  );
};

export default TodoList;

// TodoList.styles.js

export const Container = styled.div`
  width: 400px;
  padding: 30px;

  display: flex;
  flex-direction: column;

  background: white;

  border-radius: 15px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.34);
`;
