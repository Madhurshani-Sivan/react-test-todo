import { httpRequest } from "../../helpers/http";
import { editTodoListAPI, getTodoListAPI } from "../../configs/api-end-points";
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
    console.error("Failed to add data:", error);
  }
};

const editTask = async (dispatch, id) => {
  console.log(id);
  try {
    const response = await httpRequest(`${editTodoListAPI}/${id}`, "PUT", {
      completed: true,
    });
  } catch (error) {
    console.error("Failed to edit data:", error);
  }
};

const todoActions = (dispatch) => {
  return {
    fetchTasks: () => fetchTasks(dispatch),
    addNewTask: (body) => addNewTask(dispatch, body),
    editTask: (body) => editTask(dispatch, body),
  };
};

export { todoActions };
