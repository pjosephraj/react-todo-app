import React from 'react';
import TodoItem from './TodoItem';

interface ItodoItem {
  id: number,
  text: string,
}

interface Props {
  todos: ItodoItem[],
  removeTodo: any
}

class TodoList extends React.Component<Props> {

  render() {
    const { todos, removeTodo } = this.props;
    return (
      <div className="list">
        {todos.map(todo => {
          return <TodoItem todo={todo} key={todo.id} removeTodo={removeTodo}></TodoItem>
        })}
      </div>
    );
  }
}

export default TodoList;