import React from 'react'

const Button = (props) => {

    return (
        <button onClick={() => props.setNewFilter(props.namesToShow.name)}>show</button>
    )
}

export default Button