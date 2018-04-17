import React from 'react';
import{render} from 'react-dom';

 export class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
  }

  updateText = (e => {
    this.setState({ task: e.target.value });
  });

  submitForm = (e => {
    e.preventDefault();
    let item = e.target[0].value;
      this.props.submitAction(item);
      this.setState({ task: '' });
    });

  render() {
    return (
      <form
        onSubmit={this.submitForm}
        className="todo-form">
        <input
          type="text"
          placeholder="Enter task"
          onChange={this.updateText}
          value={this.state.task} />
        <input type="submit" />
      </form>
    );
  }
}
