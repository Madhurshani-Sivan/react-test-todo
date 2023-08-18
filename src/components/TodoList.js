import styles from "./TodoList.module.css";

const TodoList = ({ todos }) => {
  return (
    <div className={styles.todoList}>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
