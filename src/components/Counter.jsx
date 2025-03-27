import { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
    this.setState((prevState) => ({ count: prevState.count + 1 }))
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

  render() {
    return (
      <div>
        <p>Счетчик: {this.state.count}</p>
        <button onClick={this.increment}>Прибавить</button>
      </div>
    )
  }
}

export default Counter
