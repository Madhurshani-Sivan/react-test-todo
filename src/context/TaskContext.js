import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = "1j9carA1jwm3R6T7-Ju832Ff-9grjINo-jwGSItRO6ewtjjoTA";
  const apiUrl = "/api/v1/task";

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setError(null);
      setIsLoading(true);

      const response = await axios.get(apiUrl, {
        headers: { Authorization: `Bearer ${apiKey}` },
      });

      setTasks(response.data.items);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch data:", error);

      setError("Failed to fetch tasks.");
      setIsLoading(false);
    }
  };

  const addNewTask = async (title) => {
    const newTask = { title, completed: false };

    try {
      setError(null);

      await axios.post(apiUrl, [newTask], {
        headers: { Authorization: `Bearer ${apiKey}` },
      });

      fetchTasks();
    } catch (error) {
      console.error("Failed to add new task:", error);

      setError("Failed to add the new task.");
    }
  };

  const deleteTask = async (id) => {
    try {
      setError(null);

      await axios.delete(`${apiUrl}/${id}`, {
        headers: { Authorization: `Bearer ${apiKey}` },
      });

      fetchTasks();
    } catch (error) {
      console.error("Failed to delete task:", error);

      setError("Failed to delete the task");
    }
  };

  const updateTaskCompletion = async (id) => {
    try {
      setError(null);

      await axios.put(
        `${apiUrl}/${id}`,
        { completed: true },
        {
          headers: { Authorization: `Bearer ${apiKey}` },
        }
      );

      fetchTasks();
    } catch (error) {
      console.error("Failed to update task:", error);

      setError("Failed to update the tasks.");
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        error,
        isLoading,
        addNewTask,
        deleteTask,
        updateTaskCompletion,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
