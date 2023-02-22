import React, { useState } from 'react'
import { MdCircle } from 'react-icons/md'
import "./TodoInsert.css"

export default function TodoInsert({onInsertToggle, onInsertTodo}) {
  const [value, setValue] = useState("");
  // function onChange(e) {
  //   setValue(e.target.value);
  // };
  const onChange = e => {
    setValue(e.target.value);
  };

  // form 형식의 기본 속성으로 button타입이 submit으로 되어있고 그 버튼을 실행하면 form을 서버에 제출하도록 설정되어있음, 따라서 새로고침이 되는거임
  // 이를 막아 주기 위해 preventDefault 함수를 써줄거임
  function onSubmit(e) {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  }

  return (
    <div>
      <div className='background' onClick={onInsertToggle}></div>
      <form onSubmit={onSubmit}>
        <input placeholder='무엇을 해야 하나요?'
        value={value}
        onChange={onChange}
        ></input>
        <button type='submit'>
          <MdCircle />
        </button>
      </form>
    </div>
  )
}
