import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";
import { FaPlus } from "react-icons/fa";

const TodoList = ({ todos }) => {
  return (
    <div className={styles.todoList}>
      <button className={styles.addButton}>
        Add New <FaPlus className={styles.addIcon} />
      </button>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} title={todo.title} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
