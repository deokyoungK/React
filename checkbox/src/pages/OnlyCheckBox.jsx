import React from "react";

import { useState } from "react";
import OnlyCheck from "../components/onlycheck";

export default function OnlyCheckBox() {
  const [service, setService] = useState(false);
  const [marketing, setMarketing] = useState(false);
  return (
    <article className="checkcontainer">
      <header>
        <h3>
          서로 관련이 없는 체크박스가 하나 이상 필요할 때 사용되는 체크박스를
          보여줍니다.
        </h3>
      </header>
      <OnlyCheck checked={service} onChange={setService}>
        (필수) 서비스 이용약관
      </OnlyCheck>
      <OnlyCheck checked={marketing} onChange={setMarketing}>
        (선택) 마케팅 수신
      </OnlyCheck>
      <footer>
        <button disabled={!service}>회원 가입</button>
      </footer>
    </article>
  );
}
