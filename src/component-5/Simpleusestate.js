import React from 'react'
import {useState} from 'react'

function Simpleusestate() {
    const[name, changeName]  = useState("Mad")
  return (
    <div>
      {name}
      <div><button onClick={() => changeName("Harsh") }>Change Name </button></div>
    </div>
  )
}

export default Simpleusestate
