import React from 'react';

interface ItodoItem {
  id: number,
  text: string,
}

interface Props {
  todo: ItodoItem,
  removeTodo: any
}

interface State {
  isDone: boolean
}

class TodoItem extends React.Component<Props, State> {

  state = { isDone: false };

  removeTodo = () => {
    const id = this.props.todo.id;
    this.props.removeTodo(id);
  }

  render() {
    const { todo } = this.props;
    return (
      <div className="list-item">
        <div className="item-checkbox">
          <input type="checkbox" name={todo.id.toString()} id="" onChange={() => this.setState({isDone: !this.state.isDone})} />
        </div>
        <div className={`item-text ${this.state.isDone ? 'item-text--done' : ''}`}>{todo.text}</div>
        <div className="item-delete">
          <input type="button" value="Delete" onClick={this.removeTodo} />
        </div>
      </div>
    );
  }
}

export default TodoItem;