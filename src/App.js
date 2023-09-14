import "./App.css";
import { ErrorBoundary } from "./ErrorBoundary";
import TodoPage from "./components/modules/todo/TodoPage";
import { TodoContextProvider } from "./context/providers/TodoContextProvider";

function App() {
  return (
    <ErrorBoundary>
      <TodoContextProvider>
        <TodoPage />
      </TodoContextProvider>
    </ErrorBoundary>
  );
}

export default App;
