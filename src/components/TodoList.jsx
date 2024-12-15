import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
    const todos = useSelector((state) => state.todos);

  return (
    <div style={{ width: "400px" }}>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {todos.map((todo) => (
          <TodoItem
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
