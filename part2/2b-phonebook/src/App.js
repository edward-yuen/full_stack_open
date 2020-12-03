import React, { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [filterName, setNewFilter ] = useState('')
  const [showAll, setShowAll] = useState(true)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons = {persons} filterName = {filterName} setNewFilter = {setNewFilter} showAll = {showAll} setShowAll = {setShowAll} />
      <PersonForm persons = {persons} setPersons = {setPersons}/>
      <h2>Numbers</h2>
      <Persons persons = {persons} filterName = {filterName} showAll = {showAll} setShowAll = {setShowAll}/>

    </div>
  )
}

export default App
