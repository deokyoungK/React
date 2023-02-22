import React from 'react'
import { MdCheckBox,  MdCheckBoxOutlineBlank} from 'react-icons/md';
import "./TodoItem.css"


// TodoList에서 todo라는 객체를 받아옴
export default function TodoItem({todo}) {
    const { id, text, checked } = todo;
    return (
        <div className='TodoItem'>
            {/* checked=true일 때 checked라는 class를 추가  */}
            <div className={'content ${checked ? "checked" : ""}'}>
            {/* checked=true면 체크된 박스 아이콘이 false면 빈 박스 아이콘이 뜸 */}
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
        </div>
    );
};
