import React, {Component} from 'react';
import styles from './styles/index';

class Counter extends Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }
  increment = () => {
    let count = this.state.count + 1;
    this.setState({ count })
  }

  decrement = () => {
    if (this.state.count === 0) {
      return;
    }
    let count = this.state.count - 1;
    this.setState({ count })
  }

  render() {
    return (
      <div style={styles.counterBackground} className="Counter">
        <h4>Counter: {this.state.count}</h4>
        <button className="btn btn-info mr-2" style={{background: 'black'}} onClick={this.increment}>increment</button>
        <button className="btn btn-danger" onClick={this.decrement}>decrement</button>
      </div>
    )
  }
}

export default Counter;
