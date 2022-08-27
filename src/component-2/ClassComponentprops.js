import React, { Component } from 'react'

class ClassComponentprops extends Component {
  constructor(props) {
    super(props)
  
    
  }
  render() {
    return (
      <div>
        {this.props.name} = {this.props.rn}
      </div>
    )
  }
}

export default ClassComponentprops