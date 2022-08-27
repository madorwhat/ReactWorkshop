import React, { Component } from 'react'
import {UserConsumer} from './UserContext'

class ContextComponentF extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
            {
                (username) => {
                    return (
                        <div>
                            My name is {username}
                        </div>
                    )
                }
            }
        </UserConsumer>
      </div>
    )
  }
}

export default ContextComponentF