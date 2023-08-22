import { FaTrash } from "react-icons/fa";
import styles from "./TodoItem.module.css";
import { useTaskContext } from "../context/TaskContext";

const TodoItem = ({ title, id }) => {
  const { deleteTask } = useTaskContext();

  const handleDelete = () => {
    deleteTask(id);
  };

  return (
    <div className={styles.todoItemContainer}>
      <div className={styles.todoItem}>
        <input type="radio" className={styles.doneCheckbox} />
        <p className={styles.todoTitle}>{title}</p>
        <button className={styles.deleteButton} onClick={handleDelete}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
