import React, {useState} from 'react'


const PersonForm = (props) => {

    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber] = useState('')
  
    const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
    }
  
    const handleNameChange = (event) => {
      setNewName(event.target.value)
    }
  
    const addName = (event) => {
      event.preventDefault()
      const nameObject = {
        name: newName,
        number: newNumber
      }
      
      props.persons.some(person => person.name === newName) ? window.alert(`${newName} is already added to phonebook`) : props.setPersons(props.persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }

    return (
        <form onSubmit={addName}> 
            <div>
            name: <input 
                        value={newName} 
                        onChange={handleNameChange}/>
            </div>
            <div>
            number: <input
                        value={newNumber}
                        onChange={handleNumberChange}/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm