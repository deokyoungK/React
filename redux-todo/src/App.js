import "./App.css";
import { MdAddCircle } from "react-icons/md";
import Templates from "./Templates";

function App() {
  return (
    <Templates>
      <div className="add-todo-button">
        <MdAddCircle />
      </div>
    </Templates>
  );
}

export default App;
