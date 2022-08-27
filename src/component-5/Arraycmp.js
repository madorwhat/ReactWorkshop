import React from 'react'
import { useState } from 'react'

function Arraycmp() {
    const [item, setItems] = useState([{id : 1,val: 5}])
function addElement()
{
    setItems([...item,{id: item.length, val: Math.floor (Math.random() * 10 +1)}])
}

  return (
    <div>
        <button onClick={addElement}>Add item</button>
        {item.map((item) => <li key={item.id}>{item.val}</li>)}
      {/* <ul> */}
        {/* {item.map((item) => <li key={item.id}>{item.val}</li>)} */}
      {/* </ul> */}
    </div>
  )
}

export default Arraycmp
