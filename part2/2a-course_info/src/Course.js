import React from 'react'

const Part = (parts) => {

    return (
      <div>
        {parts.name} {parts.exercises}
      </div>
    )
  }
  
  const Content = (content) => {
  
    const total = content.parts.map(part => part.exercises).reduce( (accumulator, currentValue, currentIndex, array) => {
      console.log('what is happening', accumulator, currentValue, currentIndex)
      console.log('sum', accumulator + currentValue)
      return accumulator+currentValue}) 
    
    return (
      <div>
        <h1>{content.name}</h1>
        {content.parts.map(parts=>
          <Part key={parts.id} name={parts.name} exercises={parts.exercises}/> )}
        <div><b>total of {total} exercises</b></div>
      </div>
    )
  }
  
  
  const Course = ({courses}) => {
  
    return (
      <div>
        <h1>{courses.name}</h1>
        <div>
          {courses.map((content) => 
            <Content key={content.id} name={content.name} parts={content.parts} />
          )} 
        </div>
      </div>
    )
  }

  export default Course