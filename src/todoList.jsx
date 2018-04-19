import React from 'react';
import { render } from 'react-dom';
import { TodoForm } from './todoForm';
import { ItemsList } from './itemsList';

 export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Wash the dog',
        'Mow the lawn',
        'Take out trash'
      ]
    };
  }

  addItem = (item => {
    let newItems = this.state.items;
    if (!item){
      alert('Empty string!');
    }
    newItems.push(item);
    this.setState({ items: newItems });
  });

  deleteItem = (idx => {
    let newItems = this.state.items;
    newItems.splice(idx, 1);
    this.setState({ items: newItems });
  });

  render() {
    return (
      <div className="todo-list">
        <TodoForm submitAction={this.addItem} />
        <ItemsList
          items={this.state.items}
          clickAction={this.deleteItem} />
      </div>
    );
  }
}
