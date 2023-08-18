import { FaTrash } from "react-icons/fa";
import styles from "./TodoItem.module.css";

const TodoItem = ({ title }) => {
  return (
    <div className={styles.todoItemContainer}>
      <div className={styles.todoItem}>
        <input type="radio" className={styles.doneCheckbox} />
        {title}
        <button className={styles.deleteButton}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
