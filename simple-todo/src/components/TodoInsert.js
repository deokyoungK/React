import React from 'react'
import { MdCircle } from 'react-icons/md'
import "./TodoInsert.css"

export default function TodoInsert({onInsertToggle}) {
  return (
    <div>
      <div className='background' onClick={onInsertToggle}></div>
      <form>
        <input></input>
        <button type='submit'>
          <MdCircle />
        </button>
      </form>
    </div>
  )
}
