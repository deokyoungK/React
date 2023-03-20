import React from "react";
import styled from "styled-components";
import InputForm from "./InputForm";
import TodoList from "./TodoList";

function App() {
  return (
    <Container>
      <Wrapper>
        <h1>Redux 로 배우는 Todo List</h1>
        <InputForm />
        <TodoList />
      </Wrapper>
    </Container>
  );
}

export default App;

// App.styles.js

export const Container = styled.div`
  width: 100vw;
  height: 200vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background: #e9ecef;

  input {
    appearance: none;
    outline-style: none;
    border: none;
  }
`;

export const Wrapper = styled.div`
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
