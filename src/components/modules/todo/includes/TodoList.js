import { useState } from "react";
import styles from "./TodoList.module.css";
import { FaFileAlt, FaPlus, FaSpinner } from "react-icons/fa";
import TodoItem from "./TodoItem";
import AddTaskModal from "../../../modals/AddTaskModal";

const TodoList = ({ tasks, isLoading }) => {
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
          tasks
            .sort((a, b) => (a.completed ? 1 : -1))
            .map((todo) => (
              <TodoItem
                key={todo._uuid}
                id={todo._uuid}
                title={todo.title}
                completed={todo.completed}
              />
            ))
        )}
      </ul>
      {isModalOpen && <AddTaskModal onClose={closeModal} />}
    </div>
  );
};

export default TodoList;
