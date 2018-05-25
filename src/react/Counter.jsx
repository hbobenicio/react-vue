import React from 'react'

class Counter extends React.Component {
  state = {
    count: 0
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  handleDecrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }))
  }

  render() {
    return (
      <div className="Counter">
        <div>
          Count: {this.state.count}
        </div>
        <button type="button" onClick={this.handleDecrement}>-</button>
        <button type="button" onClick={this.handleIncrement}>+</button>
      </div>
    )
  }
}

export default Counter