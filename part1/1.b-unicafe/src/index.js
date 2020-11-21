import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Display = (props) => (
  <div>
    <h1>give feedback</h1> 
  </div>
)

const Statistics = (props) => (
  <div>
    <h1>statistics</h1>
    <div>good {props.good}</div>
    <div>neutral {props.neutral}</div>
    <div>bad {props.bad}</div>
    <div>all {props.all}</div>
    <div>average {props.average}</div>
    <div>positive {props.positive}%</div>
  </div>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+bad+neutral

  const setGoodValue = newValue => {
    setGood(newValue)
  }

  const setNeutralValue = newValue => {
    setNeutral(newValue)
  }

  const setBadValue = newValue => {
    setBad(newValue)
  }

  return (
    <div>
      <Display />
      <Button handleClick={() => setGoodValue(good + 1)} text="good" />
      <Button handleClick={() => setNeutralValue(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBadValue(bad + 1)} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={(good-bad)/all}positive={good/all*100} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)