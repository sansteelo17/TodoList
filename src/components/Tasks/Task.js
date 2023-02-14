import Card from "../UI/Card";
import styles from "./Task.module.css";
import TaskItem from "./TaskItem";

function Task({ tasks, onRemoveTask }) {
  return (
    <div>
      <Card className={styles.tasks}>
        {tasks.length > 0 &&
          tasks.map((item) => (
            <ul className={styles["tasks-list"]}>
              <TaskItem
                key={Math.random() * 100}
                title={item.title}
                onRemoveTask={() => {
                  onRemoveTask(item.title);
                }}
              />
            </ul>
          ))}
        {tasks.length === 0 && (
          <p style={{ textAlign: "center", color: "white" }}>
            Add a new task to see it appear here!
          </p>
        )}
      </Card>
    </div>
  );
}

export default Task;
