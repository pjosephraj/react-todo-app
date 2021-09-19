import { useState } from "react";

interface ItodoItem {
  id: number;
  text: string;
}

interface Props {
  todo: ItodoItem;
  removeTodo: any;
}

const TodoItem = (props: Props) => {
  const { todo } = props;
  const [isDone, setIsDone] = useState(false);

  const removeTodo = () => {
    const { id } = todo;
    props.removeTodo(id);
  };

  return (
    <div className="list-item">
      <div className="item-checkbox">
        <input
          type="checkbox"
          name={todo.id.toString()}
          onChange={() => setIsDone(!isDone)}
        />
      </div>
      <div className={`item-text ${isDone ? "item-text--done" : ""}`}>
        {todo.text}
      </div>
      <div className="item-delete">
        <input type="button" value="Delete" onClick={removeTodo} />
      </div>
    </div>
  );
};

export default TodoItem;
