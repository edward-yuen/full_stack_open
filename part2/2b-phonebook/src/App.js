import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [filterName, setNewFilter ] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {

    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
