import "./App.css";
import Layout from "./components/Layout";
import TodoList from "./components/TodoList";

function App() {
  const todos = [
    { id: 1, title: "Study React" },
    { id: 2, title: "Complete Assignment" },
  ];

  return (
    <Layout>
      <TodoList todos={todos} />
    </Layout>
  );
}

export default App;
