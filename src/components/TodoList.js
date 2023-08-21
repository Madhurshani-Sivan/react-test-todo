import { useTaskContext } from "../context/TaskContext";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";
import { FaFileAlt, FaPlus, FaSpinner } from "react-icons/fa";

const TodoList = () => {
  const { tasks, isLoading } = useTaskContext();

  return (
    <div className={styles.todoList}>
      <button className={styles.addButton}>
        Add New <FaPlus className={styles.addIcon} />
      </button>
      <h2>Todo List</h2>
      <ul>
        {isLoading ? (
          <div className={styles.loading}>
            <FaSpinner className={styles.spinner} />
          </div>
        ) : !tasks || tasks.length === 0 ? (
          <div className={styles.noData}>
            <FaFileAlt className={styles.icon} />
            <p>No Data</p>
          </div>
        ) : (
          tasks.map((todo) => <TodoItem key={todo.id} title={todo.title} />)
        )}
      </ul>
    </div>
  );
};

export default TodoList;
