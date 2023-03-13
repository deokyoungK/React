import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckBox from "../pages/CheckBox";
import OnlyCheckbox from "../pages/OnlyCheckBox";

export default function router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CheckBox />}></Route>
          {/* <Route path="/onlycheckbox" element={<OnlyCheckbox />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
