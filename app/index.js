import React, { Component } from "react";
import ReactDOM from "react-dom";

import './index.css';

var USER_DATA = {
  name: 'Binu tomy',
  img: 'https://avatars3.githubusercontent.com/u/7398374?s=460&v=4',
  username: 'binutomy91'
}


class Avatar extends React.Component {
  render() {
    return (
      <img src={this.props.img} />
    )
  }
}

class Label extends React.Component {
  render() {
    return (
      <h1>Name: {this.props.name}</h1>
    )
  }
}

class ScreenName extends React.Component {
  render() {
    return (
      <h3>Username: {this.props.username}</h3>
    )
  }
}


class App extends Component {
  render() {
    return (
      <React.Fragment>
         <Avatar img={this.props.user.img} />
        <Label name={this.props.user.name} />
        <ScreenName username={this.props.user.username}/>
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App user={USER_DATA}
  />,
  document.getElementById('app')
)