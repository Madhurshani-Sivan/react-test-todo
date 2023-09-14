import { httpRequest } from "../../helpers/http";
import { getTodoListAPI } from "../../configs/api-end-points";
import { addTodoDataKey, requestTodoDataKey } from "../../configs/action-keys";

const fetchTasks = async (dispatch) => {
  try {
    const response = await httpRequest(getTodoListAPI);

    dispatch({ type: requestTodoDataKey, payload: response.items });
  } catch (error) {
    console.error("Failed to fetch data:", error);

    dispatch({ type: requestTodoDataKey, payload: [] });
  }
};

const addNewTask = async (dispatch, body) => {
  console.log(body);
  try {
    const response = await httpRequest(getTodoListAPI, "POST", body);
  } catch (error) {
    console.error("Failed to Add data:", error);
  }
};

const todoActions = (dispatch) => {
  return {
    fetchTasks: () => fetchTasks(dispatch),
    addNewTask: (body) => addNewTask(dispatch, body),
  };
};

export { todoActions };
