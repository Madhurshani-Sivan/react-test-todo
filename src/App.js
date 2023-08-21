import "./App.css";
import Layout from "./components/Layout";
import TodoList from "./components/TodoList";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <Layout>
        <TodoList />
      </Layout>
    </TaskProvider>
  );
}

export default App;
