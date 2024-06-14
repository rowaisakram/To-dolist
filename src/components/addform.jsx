import React from "react";
const Form = ({ inputValue, handleChange, handleSubmit }) => {
  return (
    <form>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Write your next task"
      />
      <button type="submit" onClick={handleSubmit}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </form>
  );
};
export default Form;
