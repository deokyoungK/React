// InputForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { add_todo } from "./commons/actions";

const InputForm = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;

    setText(value);
  };

  const handleClick = () => {
    const todo = {
      title: text,
      isComplete: false,
    };

    dispatch(add_todo(todo));
    setText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <Container>
      <InputBox
        type="text"
        placeholder="할 일을 입력하세요!!"
        onChange={handleChange}
        value={text}
        onKeyDown={handleKeyPress}
      />
      <Button onClick={handleClick}>추가 하기</Button>
    </Container>
  );
};

export default InputForm;

// InputForm.styles.js

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputBox = styled.input`
  width: 295px;
  height: 40px;
  margin: 10px 5px;

  border-radius: 15px;
  font-size: 1.2rem;

  background: white;
  padding: 5px 25px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.34);
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;

  font-size: 1.2rem;

  background: white;

  border: none;
  border-radius: 15px;

  color: #20c997;

  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.34);

  cursor: pointer;
`;
