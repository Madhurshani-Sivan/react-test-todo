import { httpRequest } from "../../helpers/http";
import {
  editTodoListAPI,
  getTodoListAPI,
  removeTodoListAPI,
} from "../../configs/api-end-points";
import {
  pageLoaderStatusKey,
  refreshTodoDataKey,
  requestTodoDataKey,
} from "../../configs/action-keys";

const fetchTasks = async (dispatch) => {
  dispatch({ type: pageLoaderStatusKey, payload: true });

  try {
    const response = await httpRequest(getTodoListAPI);
    dispatch({ type: pageLoaderStatusKey, payload: false });

    dispatch({ type: requestTodoDataKey, payload: response.items });
  } catch (error) {
    dispatch({ type: pageLoaderStatusKey, payload: false });

    console.error("Failed to fetch data:", error);
    dispatch({ type: requestTodoDataKey, payload: [] });
  }
};

const addNewTask = async (dispatch, body) => {
  console.log(body);
  try {
    const response = await httpRequest(getTodoListAPI, "POST", body);
    dispatch({
      type: refreshTodoDataKey,
    });
  } catch (error) {
    console.error("Failed to add data:", error);
  }
};

const editTask = async (dispatch, id) => {
  try {
    const response = await httpRequest(`${editTodoListAPI}/${id}`, "PUT", {
      completed: true,
    });
    dispatch({
      type: refreshTodoDataKey,
    });
  } catch (error) {
    console.error("Failed to edit data:", error);
  }
};

const deleteTask = async (dispatch, id) => {
  try {
    const response = await httpRequest(`${removeTodoListAPI}/${id}`, "DELETE");
    dispatch({
      type: refreshTodoDataKey,
    });
  } catch (error) {
    console.error("Failed to delete data:", error);
  }
};

const todoActions = (dispatch) => {
  return {
    fetchTasks: () => fetchTasks(dispatch),
    addNewTask: (body) => addNewTask(dispatch, body),
    editTask: (id) => editTask(dispatch, id),
    deleteTask: (id) => deleteTask(dispatch, id),
  };
};

export { todoActions };
