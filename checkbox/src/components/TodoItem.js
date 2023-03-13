import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

// TodoList에서 todo라는 객체를 받아옴
export default function TodoItem({ todo, onCheckToggle }) {
  const { id, text, checked } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <MdCheckBox
            className="checkbox"
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        ) : (
          <MdCheckBoxOutlineBlank
            className="checkbox"
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        )}
      </div>
      <div>{text}</div>
    </div>
  );
}
