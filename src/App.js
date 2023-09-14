import "./App.css";
import Layout from "./components/Layout";
import TodoList from "./components/modules/todo/includes/TodoList";
import TodoPage from "./components/modules/todo/TodoPage";
import {
  TaskProvider,
  TodoContextProvider,
} from "./context/providers/TodoContextProvider";

function App() {
  return (
    <TodoContextProvider>
      <TodoPage />
    </TodoContextProvider>
  );
}

export default App;
