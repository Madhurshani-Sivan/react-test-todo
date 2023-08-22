import { FaTrash } from "react-icons/fa";
import styles from "./TodoItem.module.css";
import { useTaskContext } from "../context/TaskContext";

const TodoItem = ({ title, id, completed }) => {
  const { deleteTask, updateTaskCompletion } = useTaskContext();

  const handleDelete = () => {
    deleteTask(id);
  };

  const handleRadioClick = () => {
    updateTaskCompletion(id);
  };

  return (
    <div className={styles.todoItemContainer}>
      <div className={styles.todoItem}>
        <input
          type="radio"
          className={styles.doneCheckbox}
          checked={completed}
          onChange={handleRadioClick}
        />
        <p className={!completed ? styles.todoTitle : styles.completed}>
          {title}
        </p>
        <button className={styles.deleteButton} onClick={handleDelete}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
