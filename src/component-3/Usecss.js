import React from 'react'
import '../Colorstylesheet.css'

function Usecss() {
    const mycss = {color: 'yellow'}
  return (
    <div>
        <h1 className = 'changedcolor'>Change My color</h1>
        <h1 style={mycss}>change to yellow</h1>
    </div>
  )
}

export default Usecss