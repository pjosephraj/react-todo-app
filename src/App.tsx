import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

interface ItodoItem {
  id: number,
  text: string,
}

interface Props {}

interface State {
  todos: ItodoItem[]
}
class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTodo = (todoItm: ItodoItem) => {
    this.setState({ todos: this.state.todos.concat(todoItm) });
  };

  removeTodo = (id: number) => {
    const { todos } = this.state;
    const filteredTodos = todos.filter((itm: ItodoItem) => itm.id !== id);
    this.setState({ todos: filteredTodos });
  };

  render() {
    return (
      <div className="container">
        <div className="title">React Todo App</div>
        <TodoForm addTodo={this.addTodo}></TodoForm>
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo}></TodoList>
      </div>
    );
  }
}

export default App;
