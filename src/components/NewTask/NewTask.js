import { useState } from "react";

import styles from "./NewTask.module.css";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const newTaskHandler = (enteredTaskData) => {
    const userTaskData = {
      ...enteredTaskData,
      id: Math.random().toString(),
    };
    props.onAddTask(userTaskData);
    setIsEditing(false);
  };

  const displayFormHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className={styles["new-expense"]}>
      {!isEditing && <button onClick={displayFormHandler}>Add New Task</button>}
      {isEditing && (
        <TaskForm
          onSaveTaskForm={newTaskHandler}
          onCancelEdit={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewTask;
