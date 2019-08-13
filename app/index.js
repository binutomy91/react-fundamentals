import React, { Component } from "react";
import ReactDOM from "react-dom";

import './index.css';


function showWarning() {
  return true;
}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {
          showWarning() === true && <h3>Hello World!</h3>
        }
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)