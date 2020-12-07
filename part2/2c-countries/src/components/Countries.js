import React from 'react'
import Weather from './Weather'


const Countries = (props) => {
    // console.log(props.countries)


    const namesToShow = props.filterName === ''
        ?   props.countries
        :   props.countries.filter(country => country.name.toLowerCase().includes(props.filterName.toLowerCase()))
    
        const showField = namesToShow.length >= 10
        ? "Too many matches, specify another filter"
        : namesToShow.length === 1
            ? namesToShow.map(country => 
                <div>
                <div key={country.name}><h1>{country.name}</h1></div>
                <div key={country.capital}>capital {country.capital}</div>
                <div key={country.population}>population {country.population}</div>
                <div key={country.languages}><h2>Languages</h2>
                {country.languages.map(language =>
                <li key = {language.name}>{language.name}</li> 
                    )}
                </div>
                <div key={country.flag}><img src={country.flag} alt="flag" style = {{width:500, height:300}}/></div>
                </div>)
            : namesToShow.map(country => 
                <div key={country.name}>{country.name} <button onClick= {() => {props.setNewFilter(country.name)}}>show</button> </div>)
  

    return (
        <div>
        {showField}
        {namesToShow.length === 1 ? <Weather country = {namesToShow} weather = {props.weather} setWeather = {props.setWeather}/> : ''}
        </div>
    )
}

export default Countries