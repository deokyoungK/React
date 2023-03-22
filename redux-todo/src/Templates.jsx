import React from "react";
import styled from "styled-components";

export default function Templates({ children }) {
  const today = new Date();

  const dateString = today.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dayName = today.toLocaleString("ko-KR", { weekday: "long" });
  return (
    <div className="Template">
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="TaskLeft">오늘의 할 일 </div>
      <div>{children}</div>
    </div>
  );
}
