import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Form from "../components/addform";
import ListDisplay from "../components/displaylist";

function Home() {
  const [todo, setTodo] = useState(() => {
    const savedTodo = localStorage.getItem("todo");
    if (savedTodo) {
      return JSON.parse(savedTodo);
    } else {
      return [];
    }
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      setTodo([...todo, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todo];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

  return (
    <>
      <Header />
      <Form
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ListDisplay todo={todo} handleDelete={handleDelete} />
    </>
  );
}

export default Home;
