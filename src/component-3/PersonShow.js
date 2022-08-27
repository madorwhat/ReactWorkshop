import React from 'react'

function PersonShow(props) {
  return (
    <div>
        My name is {props.personn.name} and my roll no is {props.personn.rn}
    </div>
  )
}

export default PersonShow