import { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

interface ItodoItem {
  id: number;
  text: string;
  isDone?: boolean;
}

const APP = () => {
  const [todos, setTodos] = useState<ItodoItem[]>([]);

  useEffect(() => {
    const lsTodos = localStorage.getItem("todos");
    if (lsTodos) {
      setTodos(JSON.parse(lsTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todoItm: ItodoItem) =>
    setTodos((prev: ItodoItem[]) => prev.concat(todoItm));

  const removeTodo = (id: number) =>
    setTodos((prev: ItodoItem[]) =>
      prev.filter((itm: ItodoItem) => itm.id !== id)
    );

  const updateTodo = (todo: ItodoItem) => {
    setTodos((prev: ItodoItem[]) => {
      return prev.map((itm: ItodoItem) => {
        if (itm.id === todo.id) {
          itm.isDone = todo.isDone;
        }
        return itm;
      });
    });
  };

  return (
    <div className="container">
      <div className="title">React Todo App</div>
      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      ></TodoList>
    </div>
  );
};

export default APP;
