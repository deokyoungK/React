import React from 'react'
import { MdCheckBox,  MdCheckBoxOutlineBlank} from 'react-icons/md';
import "./TodoItem.css"


// TodoList에서 todo라는 객체를 받아옴
export default function TodoItem({todo, onCheckToggle, onInsertToggle,onChangeSelectedTodo}) {
    const { id, text, checked } = todo;
    return (
        <div className="TodoItem">
        <div className={`content ${checked ? "checked" : ""}`}>
          {checked ? (
            <MdCheckBox
              onClick={() => {
                onCheckToggle(id);
              }}  
            />
          ) : (
            <MdCheckBoxOutlineBlank
              onClick={() => {
                onCheckToggle(id);
              }}
            />
          )}
                <div className="text"
                 onClick={() => {
                  onChangeSelectedTodo(todo);
                  onInsertToggle(id);
                 }}
                >
                  {text}
                </div>
            </div>
        </div>
    );
};

