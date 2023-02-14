import { useState } from "react";
import styles from "./TaskForm.module.css";

const TaskForm = (props) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const titleChangeHandler = (e) => {
    const userInput = e.target.value;
    setNewTaskTitle(userInput);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userTaskData = {
      title: newTaskTitle,
    };

    props.onSaveTaskForm(userTaskData);
    setNewTaskTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["new-task__controls"]}>
        <div className={styles["new-task__control"]}>
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={newTaskTitle}
          />
        </div>
        <div className={styles["new-task__actions"]}>
          <button type="button" onClick={props.onCancelEdit}>
            Cancel
          </button>
          <button type="submit">Add Task</button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
