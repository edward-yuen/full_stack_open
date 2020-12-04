import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import axios from 'axios'

const App = () => {
  const [countries, setCountries ] = useState([]) 
  const [filterName, setNewFilter ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
  <div>
  <Filter countries = {countries} filterName = {filterName} setNewFilter = {setNewFilter} />
  <Countries countries = {countries} filterName = {filterName} />
  </div>
  )
}
export default App;
