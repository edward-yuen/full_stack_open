import React, { useEffect } from 'react'
import axios from 'axios'
import DisplayWeather from './DisplayWeather.js'

const Weather = (props) => {
    const api_key = process.env.REACT_APP_API_KEY


    useEffect(() => {
        axios
          .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${props.country.map(country => country.capital)},${props.country.map(country => country.name)}&units=f`)
          .then(response => {
            props.setWeather(response.data)
          })
    }, [])

    return (
        <div>
        {props.weather === null ?  'weather not working' : <DisplayWeather weather={props.weather}/>}
        </div>
    )
}

export default Weather