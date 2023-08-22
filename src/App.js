import "./App.css";
import Layout from "./components/Layout";
import TodoList from "./components/TodoList";
import { TaskProvider } from "./context/TaskContext";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <TaskProvider>
      <Layout>
        <ErrorBoundary>
          <TodoList />
        </ErrorBoundary>
      </Layout>
    </TaskProvider>
  );
}

export default App;
