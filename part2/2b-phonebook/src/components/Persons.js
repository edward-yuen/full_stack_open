import React from 'react'

const Persons = (props) => {

    const namesToShow = props.filterName === ''
        ?   props.persons
        :   props.persons.filter(person => person.name.toLowerCase().includes(props.filterName))

    return (
        <div>
        {namesToShow.map(person =>
          <div key={person.name}>{person.name} {person.number}</div>)}
      </div>
    )
}

export default Persons