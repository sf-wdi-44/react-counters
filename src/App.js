import React, { Component } from "react";
import Header from "./Header";
import CounterList from './CounterList';


class App extends Component {
  constructor() {
    super()

    this.state = {
      numberOfCounters: 0,
    }
  }

  increaseCounter = () => {
    let numberOfCounters = this.state.numberOfCounters + 1;
    this.setState({ numberOfCounters })
  }

  decreaseCounter = () => {
    if(this.state.numberOfCounters === 0) {
      return;
    }

    let numberOfCounters = this.state.numberOfCounters - 1;
    this.setState({ numberOfCounters })
  }

  render() {
    return (
      <div className="App">
        <Header
          increaseCounter={this.increaseCounter}
          decreaseCounter={this.decreaseCounter} />
        <p style={{textAlign: 'center'}}>Counters: {this.state.numberOfCounters}</p>
        <CounterList counters={this.state.numberOfCounters} />
      </div>
    );
  }
}

export default App;
