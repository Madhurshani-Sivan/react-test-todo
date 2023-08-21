import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";
import { FaFileAlt, FaPlus, FaSpinner } from "react-icons/fa";
import AddTaskModal from "./AddTaskModal";

const TodoList = () => {
  const { tasks, isLoading } = useTaskContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.todoList}>
      <button className={styles.addButton} onClick={openModal}>
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
      {isModalOpen && <AddTaskModal onClose={closeModal} />}
    </div>
  );
};

export default TodoList;
