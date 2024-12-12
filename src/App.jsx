import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { TotalCompletedItems } from "./components/TotalCompletedItems";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexFlow: "column",
      }}
    >
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
