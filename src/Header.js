import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="App-header mt-4 mb-3">
        <h1 className="App-title">React Counters</h1>
        <button className="btn btn-primary mr-2" onClick={this.props.increaseCounter}>+</button>
        <button className="btn btn-danger" onClick={this.props.decreaseCounter}>-</button>
      </header>
    );
  }
}

export default Header;
