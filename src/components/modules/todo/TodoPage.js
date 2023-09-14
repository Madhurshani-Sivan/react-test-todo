import { useEffect } from "react";
import { useTodoContext } from "../../../context/providers/TodoContextProvider";
import TodoList from "./includes/TodoList";

const TodoPage = () => {
  const [state, dispatchActions] = useTodoContext();

  useEffect(() => {
    dispatchActions.fetchTasks();
  }, [state.refreshState]);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList tasks={state.tasks} isLoading={state.isLoading} />
    </div>
  );
};

export default TodoPage;
