import React, { useState } from "react";

export default function TodoExample() {
  const todoItems = [
    {
      id: 1,
      title: "learn react",
      completed: true,
    },
    {
      id: 2,
      title: "learn redux",
      completed: false,
    },
    {
      id: 3,
      title: "learn Javascript",
      completed: true,
    },
  ];
  const [todos, setTodos] = useState(todoItems);

  const handleCheckboxChange = (todoId) => {
    const newTodos = todos.map((todo) => {
      //find the todo item with the matching id
      if (todo.id === todoId) {
        //edit the todo item and return it
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      //return the todo item edited
      return todo;
    });
    // update the todos state
    setTodos(newTodos);
  };

  // console.log("todo:", todos);

  return (
    <div>
      <h3>Todo Example</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxChange(todo.id)}
            />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
