import React, { Component } from 'react'

class BindingExample extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         color: "red"
      }
      this.changeTheColor = this.changeTheColor.bind(this)
      
    }
    changeTheColor(){
        this.setState({ color: 'yellow'});
        
        
    }
  render() {
    return (
      <div>
        <div>
            {this.state.color}
            
        </div>
        
        <button onClick={this.changeTheColor}>Change Color</button>
      </div>
    )
  }
}

export default BindingExample