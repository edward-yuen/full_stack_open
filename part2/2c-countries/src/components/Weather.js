import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = (props) => {

    console.log(props)
    const [weather, setWeather] = useState([])

    useEffect(() => {
        axios
          .get(`http://api.weatherstack.com/current?access_key=${props.api}&query=${props.country.capital}&units=f`)
          .then(response => {
            console.log(response)
            setWeather(response.data)
          })
    }, [])


    return (
        <div>
            <div> Weather in {props.country.capital}</div> 
            <div> temperature: {weather.current.temperature} </div>
        </div>)
}

export default Weather