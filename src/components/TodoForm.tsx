import { useState } from "react";

interface Props {
  addTodo: any;
}

const TodoForm = (props: Props) => {
  const { addTodo } = props;
  const [text, setText] = useState<string>("");

  const updateTodoList = (e: any) => {
    e.preventDefault();
    if (text) {
      const todo = {
        id: Date.now(),
        text,
        isDone: false
      };
      addTodo(todo);
      setText("");
    }
  };

  return (
    <div className="form">
      <form className="form__field" onSubmit={updateTodoList}>
        <input
          type="text"
          placeholder="Enter Todo Item and click on Add Or Press Enter"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="button"
          value="ADD"
          disabled={!text}
          onClick={updateTodoList}
        />
      </form>
    </div>
  );
};

export default TodoForm;
