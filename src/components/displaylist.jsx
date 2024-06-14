import React from "react";
const ListDisplay = ({ todo, handleDelete }) => {
  return (
    <div>
      <ul>
        {todo.map((item, index) => (
          <li key={index} className="task">
            {item}
            <button onClick={() => handleDelete(index)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListDisplay;
