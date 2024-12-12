import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {

    const dispatch = useDispatch();

    const handleCompleteClick = () => {
        dispatch(
            toggleComplete({id: id, completed: !completed})
        )
    }

    const handleDeleteClick = () => {
        dispatch(
            deleteTodo({id: id})
        )
    }

  return (
    <li>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <input onChange={handleCompleteClick} type="checkbox" checked={completed}></input>
        </div>
        <p style={{ margin: "0" }}>{title}</p>
        <div>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
