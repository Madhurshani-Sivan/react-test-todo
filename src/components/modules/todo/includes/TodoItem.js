import { FaSpinner, FaTrash } from "react-icons/fa";
import styles from "./TodoItem.module.css";
import { useState } from "react";
import { useTodoContext } from "../../../../context/providers/TodoContextProvider";

const TodoItem = ({ title, id, completed }) => {
  // const { deleteTask, updateTaskCompletion } = useTaskContext();
  // const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const [state, dispatchActions] = useTodoContext();

  /* const handleDelete = async () => {
    setIsDeleting(true);
    await deleteTask(id);
    setIsDeleting(false);
  };*/

  const editTodo = async () => {
    setIsUpdating(true);
    await dispatchActions.editTask(id);
    setIsUpdating(false);
  };

  return (
    <div className={styles.todoItemContainer}>
      <div className={styles.todoItem}>
        <input
          type="radio"
          className={styles.doneCheckbox}
          checked={completed}
          onChange={editTodo}
        />
        {isUpdating ? (
          <FaSpinner className={styles.loadingIcon} />
        ) : (
          <p className={!completed ? styles.todoTitle : styles.completed}>
            {title}
          </p>
        )}
        {/* <button className={styles.deleteButton} onClick={handleDelete}>
           {isDeleting ? (
            <FaSpinner className={styles.loadingIcon} />
          ) : ( 
          <FaTrash />
        </button> */}
      </div>
    </div>
  );
};

export default TodoItem;
