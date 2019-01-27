import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'

class App extends Component {
  render() {
    return (
      <div className="container mx-auto my-8">
        <div>{this.props.count}</div>
        <button onClick={this.props.decrement}>decrement</button>
        <button onClick={this.props.increment}>increment</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
})

const mapDispatchToProps = {
  increment,
  decrement,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
