import { useState } from "react";
import styles from "./AddTaskModal.module.css";

const AddTaskModal = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = () => {
    if (title.trim() !== "") {
      onSubmit(title);
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
        <button onClick={onClose}>CANCEL</button>
        <button onClick={handleSubmit}>CONFIRM</button>
      </div>
    </div>
  );
};

export default AddTaskModal;
