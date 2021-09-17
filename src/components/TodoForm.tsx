import React from 'react';

interface Props {
  addTodo: any;
}

interface State {
  text: string;
}

class TodoForm extends React.Component<Props, State>{

  constructor(props: Props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  addTodo = (e: any) => {
    e.preventDefault();
    if(this.state.text) {
      const todo = {
        id: Date.now(),
        text: this.state.text,
      }
      this.props.addTodo(todo);
      this.setState({text: ''});
    }
  }

  render() {
    return (
      <div className="form">
        <form className="form__field" onSubmit={this.addTodo}>
          <input type="text" placeholder="Enter Todo Item and click on Add Or Press Enter" value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} />
          <input type="button" value="ADD" disabled={!this.state.text} onClick={this.addTodo} />
        </form>
      </div>
    );
  }

}

export default TodoForm;