interface ItodoItem {
  id: number;
  text: string;
  isDone?: boolean;
}

interface Props {
  todo: ItodoItem;
  removeTodo: any;
  updateTodo: any;
}

const TodoItem = (props: Props) => {
  const { todo } = props;

  const removeTodo = () => {
    const { id } = todo;
    props.removeTodo(id);
  };

  const updateTodo = () => {
    todo.isDone = !todo.isDone;
    props.updateTodo(todo);
  };

  return (
    <div className="list-item">
      <div className="item-checkbox">
        <input
          type="checkbox"
          name={todo.id.toString()}
          onChange={updateTodo}
          checked={todo.isDone}
        />
      </div>
      <div className={`item-text ${todo.isDone ? "item-text--done" : ""}`}>
        {todo.text}
      </div>
      <div className="item-delete">
        <input type="button" value="Delete" onClick={removeTodo} />
      </div>
    </div>
  );
};

export default TodoItem;
