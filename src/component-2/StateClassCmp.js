import React, { Component } from 'react'

class StateClassCmp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : 'hello'
      }
    }
    changName(){
        this.setState({
            message : 'bye'
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick = {() => {this.changName()}}>Change name</button>
      </div>
    )
  }
}

export default StateClassCmp
//class