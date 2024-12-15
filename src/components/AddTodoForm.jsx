import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

function AddTodoForm() {
  const [value, setValue] = useState();

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(
      addTodo({
        title: value,
      })
    );
    setValue("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <p>My Todo List</p>
      <div>
        <input
          placeholder="My task"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default AddTodoForm;
