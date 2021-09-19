import React, { useState } from "react";
import TodoItem from "./TodoItem";

interface ItodoItem {
  id: number;
  text: string;
}

interface Props {
  todos: ItodoItem[];
  removeTodo: any;
}

const TodoList = (props: Props) => {
  const { todos, removeTodo } = props;
  return (
    <div className="list">
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            removeTodo={removeTodo}
          ></TodoItem>
        );
      })}
    </div>
  );
};

export default TodoList;
