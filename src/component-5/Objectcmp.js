import React from 'react'
import { useState } from 'react'

function Objectcmp() {
    const [name, setname] = useState({fname: 'Mad', lname: 'hura'})
  return (
    <div>
        <form>
          <input type="text" value={name.fname} onChange ={(e) => setname({...name,fname: e.target.value})} />
          <input type="text" value={name.lname} onChange ={(e) => setname({...name,lname: e.target.value})} />


        </form>
       <h1>My first Name is: {name.fname}</h1>
       <h1>My last Name is: {name.lname}</h1>
      
    </div>
  )
}

export default Objectcmp
