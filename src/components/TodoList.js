import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = ({ todos }) => {
  return (
    <div className={styles.todoList}>
      <button className={styles.addButton}>Add New +</button>
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
