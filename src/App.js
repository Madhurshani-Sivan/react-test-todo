import "./App.css";
import TodoPage from "./components/modules/todo/TodoPage";
import { TodoContextProvider } from "./context/providers/TodoContextProvider";

function App() {
  return (
    <TodoContextProvider>
      <TodoPage />
    </TodoContextProvider>
  );
}

export default App;
