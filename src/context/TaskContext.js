import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const apiKey = "1j9carA1jwm3R6T7-Ju832Ff-9grjINo-jwGSItRO6ewtjjoTA";
    const apiUrl = "/api/v1/task";

    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get(apiUrl, {
          headers: { Authorization: `Bearer ${apiKey}` },
        });

        setTasks(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, isLoading }}>
      {children}
    </TaskContext.Provider>
  );
};
