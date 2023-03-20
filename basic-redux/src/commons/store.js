import { createStore } from "redux";
// 리덕스 스토어에 reducer를 넣어주는 작업을 해당 파일에서 수행한다.
import { reducer } from "./reducer";

const store = createStore(reducer);

export default store;
