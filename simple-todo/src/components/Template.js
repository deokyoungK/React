import React from 'react'
import "./Template.css"

export default function Template({ children, todoLength }) {
    const today = new Date();

    const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
    });

    const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });

        
  
  return (
    <div className='Template'>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className='TaskLeft'>오늘의 할 일 {todoLength} </div>
      <div>{ children }</div>
    </div>
  );
}
