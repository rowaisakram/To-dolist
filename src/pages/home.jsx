import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Form from "../components/addform";
import ListDisplay from "../components/displaylist";
import Search from "../components/search";

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
  const [searchValue, setSearchValue] = useState("");
  const [filteredTodo, setFilteredTodo] = useState(todo);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  useEffect(() => {
    setFilteredTodo(
      todo.filter((item) =>
        item.inputValue.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, todo]);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodo([...todo, { id: Date.now(), inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };
  const handleToggleComplete = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <>
      <Header />
      <Search
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}
      />
      <Form
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ListDisplay
        todo={filteredTodo}
        handleDelete={handleDelete}
        handleToggleComplete={handleToggleComplete}
      />
    </>
  );
}

export default Home;
