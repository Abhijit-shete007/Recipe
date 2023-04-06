import React, { useState } from "react";
// import the css file from the component folder
import "./TodoButton.css";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export default function TodoButton() {
  const [todos, setTodo] = useState("");
  const [newTodos, setNewTodos] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    setNewTodos([...newTodos, todos]);
    setTodo("");
  };

  const deleteByIndex = (index) => {
    setNewTodos((todos) => {
      return todos.filter((_, i) => i !== index);
      /* The first argument (_) represents the current element of the array being processed. 
      The underscore is used as a placeholder to indicate that this argument is not used in the function body
      The second argument (i) represents the index of the current element. */
    });
  };
  return (
    <div>
      <h2>Todo</h2>
      <div>
        <ul className="todo-list">
          {newTodos.map((todo, index) => {
            return (
              <li key={index}>
                {todo}
                <IconButton
                  className="delete-button"
                  variant="contained"
                  color="primary"
                  onClick={() => deleteByIndex(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </li>
            );
          })}
        </ul>
      </div>
      <input type="text" name="todo" value={todos} onChange={handleChange} />
      <button className="submit-button" type="submit" onClick={handleClick}>
        Save
      </button>
    </div>
  );
}
