import { useState } from "react";
import styles from "./AddTaskModal.module.css";
import { useTaskContext } from "../context/TaskContext";

const AddTaskModal = ({ onClose }) => {
  const { addNewTask } = useTaskContext();

  const [title, setTitle] = useState("");
  const [validation, setValidation] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setValidation("");
  };

  const handleSubmit = () => {
    if (title.trim() === "") {
      setValidation("Title cannont be empty");
    } else {
      addNewTask(title);
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
        <button onClick={handleSubmit}>CONFIRM</button>
      </div>
    </div>
  );
};

export default AddTaskModal;
