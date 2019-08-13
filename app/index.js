import React, { Component } from "react";
import ReactDOM from "react-dom";

import './index.css';

class App extends Component {
  render() {
    return (

      <ul>
        {this.props.friends.map((friend) => (
          <li key={friend.id}>
            {friend.name}
          </li>
        ))}
      </ul>

    )
  }
}

ReactDOM.render(
  <App friends={[
    { id: 893, name: 'Mikenzi' },
    { id: 871, name: 'Cash' },
    { id: 982, name: 'Steven' },
    { id: 61, name: 'Kimmy' },
    { id: 117, name: 'Doug' }
  ]} />,
  document.getElementById('app')
)