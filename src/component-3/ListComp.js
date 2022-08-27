import React from 'react'
import PersonShow from './PersonShow'

function ListComp() {
    const persons = [
        {name: 'Madhura', rn: '33'},
        {name: 'Harsh', rn: '48'},
        {name: 'Mansi', rn: '7'}
    ]
    const personList = persons.map((person, index) => <PersonShow key = {index} personn={person}></PersonShow>)
  return (
    <div>
        {personList}
    </div>
  )
}

export default ListComp