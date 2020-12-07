import React from 'react'

const DisplayWeather = (props) => {


    return (
        <div>
        <div> <h2>Weather in {props.weather.location.name} </h2> </div> 
        <div> <b>temperature:</b> {props.weather.current.temperature} Farenheit</div>
        <div> <img src={props.weather.current.weather_icons} alt = "weather" style = {{width:100, height:100}}/></div>
        <div> <b>wind:</b> {props.weather.current.wind_speed} mph direction {props.weather.current.wind_dir}</div>
        </div>
        )
}

export default DisplayWeather