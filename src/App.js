import { useState } from "react";
import NewTask from "./components/NewTask/NewTask";
import Task from "./components/Tasks/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  const removeTaskHandler = (title) => {
    const newTasks = tasks.filter((tasks) => tasks.title !== title);
    setTasks(newTasks);
  };

  return (
    <div>
      <NewTask onAddTask={addTaskHandler} />
      <Task tasks={tasks} onRemoveTask={removeTaskHandler} />
    </div>
  );
}

export default App;
