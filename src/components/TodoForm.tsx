import { useState } from "react";

interface Props {
  addTodo: any;
}

const TodoForm = (props: Props) => {
  const { addTodo } = props;
  const [text, setText] = useState<string>("");

  const updateTodo = (e: any) => {
    e.preventDefault();
    if (text) {
      const todo = {
        id: Date.now(),
        text
      };
      addTodo(todo);
      setText("");
    }
  };

  return (
    <div className="form">
      <form className="form__field" onSubmit={updateTodo}>
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
          onClick={updateTodo}
        />
      </form>
    </div>
  );
};

export default TodoForm;
