import { httpRequest } from "../../helpers/http";
import { getTodoListAPI } from "../../configs/api-end-points";
import { requestTodoDataKey } from "../../configs/action-keys";

const fetchTasks = async (dispatch) => {
  try {
    const response = await httpRequest(getTodoListAPI);

    dispatch({ type: requestTodoDataKey, payload: response.items });
  } catch (error) {
    console.error("Failed to fetch data:", error);

    dispatch({ type: requestTodoDataKey, payload: [] });
  }
};

const todoActions = (dispatch) => {
  return {
    fetchTasks: () => fetchTasks(dispatch),
  };
};

export { todoActions };
