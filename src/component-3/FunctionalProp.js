import React from 'react'

function FunctionalProp(props) {
  return (
    <div>
        <button onClick={() => props.showname("Madhura")}>Show my name</button>
    </div>
  )
}

export default FunctionalProp