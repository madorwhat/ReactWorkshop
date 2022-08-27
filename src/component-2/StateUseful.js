import React, { Component } from 'react'

class StateUseful extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter : 0
      }
    }
    incrementCounter() {
        this.setState(prevState => ({
            counter : prevState.counter + 1
        }))
        
    }
    incrementFive(){
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
    }
  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={() => this.incrementFive()}>Incrementby5</button>
      </div>
    )
  }
}

export default StateUseful