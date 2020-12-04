import React from 'react'

const Filter = (props) => {

    const handleFilterChange = (event) => {
        props.setNewFilter(event.target.value)
      }

    
    return (
        <div>
        find countries <input
            value={props.filterName} 
            onChange={handleFilterChange}/>
       </div>
        )
}

export default Filter