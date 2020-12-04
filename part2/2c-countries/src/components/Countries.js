import React from 'react'

const Countries = (props) => {
    console.log(props.countries)
    const namesToShow = props.filterName === ''
        ?   props.countries
        :   props.countries.filter(country => country.name.toLowerCase().includes(props.filterName))

    const showField = namesToShow.length >= 10
        ? "Too many matches, specify another filter"
        : namesToShow.length === 1
            ? namesToShow.map(country => 
                <div>
                <div key={country.name}><h1>{country.name}</h1></div>
                <div key={country.capital}>capital {country.capital}</div>
                <div key={country.population}>population {country.population}</div>
                <div key={country.name}><h2>Languages</h2>
                {country.languages.map(language =>
                <li>{language.name}</li> 
                    )}
                </div>
                <div key={country.flag}><img src={country.flag} alt="flag" style = {{width:500, height:300}}/></div>
                </div>)
            : namesToShow.map(country => 
                <div key={country.name}>{country.name}</div>)

          

    return (
        <div>
        {showField}
        </div>
    )
}

export default Countries