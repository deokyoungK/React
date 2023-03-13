import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckBox from "../pages/CheckBox";

export default function router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CheckBox />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
