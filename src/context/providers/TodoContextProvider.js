import { createContext, useContext, useReducer } from "react";
import { addTodoDataKey, requestTodoDataKey } from "../../configs/action-keys";
import { todoActions } from "../actions/TodoActions";

const intialState = { tasks: [] };

const TodoContext = createContext({});

const useTodoContext = () => useContext(TodoContext);

const todoReducer = (state, action) => {
  switch (action.type) {
    case requestTodoDataKey:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, intialState);
  const dispatchActions = todoActions(dispatch);
  return (
    <TodoContext.Provider value={[state, dispatchActions]}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoContextProvider, useTodoContext };
