import React from "react";
const ListDisplay = ({ todo, handleDelete, handleToggleComplete }) => {
  return (
    <div>
      <ul>
        {todo.map((item) => (
          <li
            key={item.id}
            className={`task ${item.completed ? "completed" : ""}`}
          >
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggleComplete(item.id)}
            />
            {item.inputValue}
            <button onClick={() => handleDelete(item.id)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListDisplay;
