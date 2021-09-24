import TodoItem from "./TodoItem";

interface ItodoItem {
  id: number;
  text: string;
  isDone?: boolean;
}

interface Props {
  todos: ItodoItem[];
  removeTodo: any;
  updateTodo: any;
}

const TodoList = (props: Props) => {
  const { todos, removeTodo, updateTodo } = props;
  return (
    <div className="list">
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          ></TodoItem>
        );
      })}
    </div>
  );
};

export default TodoList;
