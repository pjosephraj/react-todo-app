import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

interface ItodoItem {
  id: number;
  text: string;
}

const APP = () => {
  const [todos, setTodos] = useState<ItodoItem[]>([]);

  const addTodo = (todoItm: ItodoItem) => {
    setTodos((prev: ItodoItem[]) => prev.concat(todoItm));
  };

  useEffect(() => {
    const lsTodos = localStorage.getItem("todos");
    if (lsTodos) {
      console.log(lsTodos);
      setTodos(JSON.parse(lsTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id: number) => {
    setTodos((prev: ItodoItem[]) =>
      prev.filter((itm: ItodoItem) => itm.id !== id)
    );
  };

  return (
    <div className="container">
      <div className="title">React Todo App</div>
      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoList todos={todos} removeTodo={removeTodo}></TodoList>
    </div>
  );
};

export default APP;
