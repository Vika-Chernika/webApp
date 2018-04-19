import React from 'react';
import { render } from 'react-dom';

 export class ItemsList extends React.Component {
  render() {
    let listItems = this.props.items.map((item, i) => {
      return (
        <li key={i}>
          <div className="text">{item}</div>
          <div
            onClick={this.props.clickAction.bind(this, i)}
            className="delete fa fa-trash-o"></div>
        </li>
      );
    });
    return <ul>{listItems}</ul>
  }
}
