import { useState } from "react";
import styles from "./AddTaskModal.module.css";
import { useTodoContext } from "../../context/providers/TodoContextProvider";

const AddTaskModal = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [validation, setValidation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [state, dispatchActions] = useTodoContext();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setValidation("");
  };

  const handleSubmit = async () => {
    if (title.trim() === "") {
      setValidation("Title cannont be empty");
    } else {
      setIsLoading(true);
      await dispatchActions.addNewTask([{ title: title, completed: false }]);
      setIsLoading(false);
      onClose();
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Add New Item</h2>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
        {validation && <p className={styles.validationText}>{validation}</p>}
        <button onClick={onClose}>CANCEL</button>
        <button onClick={handleSubmit}>
          {isLoading ? "ADDING..." : "CONFIRM"}
        </button>
      </div>
    </div>
  );
};

export default AddTaskModal;
