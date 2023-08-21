import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const apiKey = "1j9carA1jwm3R6T7-Ju832Ff-9grjINo-jwGSItRO6ewtjjoTA";
    const apiUrl = "https://crudapi.co.uk/api/v1/task";

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: { Authorization: `Bearer ${apiKey}` },
        });
        setTasks(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log(tasks);
  }, []);

  return (
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
};
