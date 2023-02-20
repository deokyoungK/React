import React from 'react'

export default function Template({ children }) {
  return (
    <>
        <div>오늘의 할일 (0) </div>
        <div>{ children }</div>
    </>
  );
}
