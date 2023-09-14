import styles from "./TodoItem.module.css";

const TodoItem = ({ title, completed }) => {
  /* const { deleteTask, updateTaskCompletion } = useTaskContext();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    await deleteTask(id);
    setIsDeleting(false);
  };

  const handleRadioClick = async () => {
    setIsUpdating(true);
    await updateTaskCompletion(id);
    setIsUpdating(false);
  };*/

  return (
    <div className={styles.todoItemContainer}>
      <div className={styles.todoItem}>
        <input
          type="radio"
          className={styles.doneCheckbox}
          checked={completed}
          //onChange={handleRadioClick}
        />
        {/*  {isUpdating ? (
          <FaSpinner className={styles.loadingIcon} />
        ) : ( */}
        <p className={!completed ? styles.todoTitle : styles.completed}>
          {title}
        </p>
        {/* )}
        {  <button className={styles.deleteButton} onClick={handleDelete}>
          {isDeleting ? (
            <FaSpinner className={styles.loadingIcon} />
          ) : (
            <FaTrash />
          )}
        </button> } */}
      </div>
    </div>
  );
};

export default TodoItem;
