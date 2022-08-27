import React, { Component } from 'react'

class ConditionalClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         var : true
      }
    }
  render() {
    let isLoggedin //2
    if(this.state.var){
        isLoggedin = <div>User has logged in</div>
    }
    else{
        isLoggedin = <div>User hasnt logged in</div>
    }
    return(
        isLoggedin
    )

//1 st method
    // if(this.state.var){
    //     return(
    //         <div>User has logged in</div>
    //     )

    // }
    // else{
    //     return(
    //         <div>User has not logged in</div>
    //     )
    // }
    
  }
}

export default ConditionalClass

//class