import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../UI/Card";
import styles from "./TaskItem.module.css";

function TaskItem(props) {
  const removeTaskHandler = () => {
    props.onRemoveTask(props.title);
  };

  return (
    <li>
      <Card className={styles["task-item"]}>
        <div className={styles["task-item__description"]}>
          <h2>{props.title}</h2>
          <button onClick={removeTaskHandler}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </Card>
    </li>
  );
}

export default TaskItem;
