// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  clickMe = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <div className="heading-container">
          <h1 className="heading">
            The Button has been clicked <span className="count">{count}</span>{' '}
            times
          </h1>
        </div>
        <div className="btn-container">
          <p className="click-me-description">
            Click the button to increase the count!
          </p>
          <button onClick={this.clickMe} className="button" type="submit">
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
