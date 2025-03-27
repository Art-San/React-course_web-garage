import { Component } from 'react'
import { ChildComponent } from './ChildComponent'

class ParentComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <ChildComponent count={this.state.count} onIncrement={this.increment} />
      </div>
    )
  }
}

export default ParentComponent
