import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [task, setTask] = useState([]);
  const [NewTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask[event.target.value];
  };
  const handleAddtask = (event) => {
    if (NewTask.trim() !== "") {
      setTask((prevTask) => [...prevTask, NewTask]);
      setNewTask("");
    }
  };

  return (
    <>
      <h1>Todo list</h1>
      <ul>
        {setTask.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="新しいタスクを入力してください"
        value={NewTask}
        onChange={handleChange}
      ></input>
      <button onClick={handleAddtask}>追加</button>
      <button onClick={handleChange}>リセット</button>
    </>
  );
}

export default App;
