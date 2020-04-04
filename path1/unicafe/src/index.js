import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => {
  return <button onClick={handleClick}>{text}</button>
}

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, bad, netural}) => {
  const all = good + netural + bad

  if(all === 0)
  {
    return (
      <>
        <h1>Statistics</h1>
        <div>No feedback given</div>
      </>
    )
  }
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <thead></thead>
        <tbody>
          <Statistic text="Good" value={good} />
          <Statistic text="Netural" value={netural} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="All" value={all} />
          <Statistic text="Average" value={(good - bad) / (all)} />
          <Statistic text="Positive" value={good / (all)} />
        </tbody>
      </table>
      
    </>
    
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [netural, setNetural] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="Good" handleClick={() => setGood(good + 1)}/>
      <Button text="Netural" handleClick={() => setNetural(netural + 1)}/>
      <Button text="Bad" handleClick={() => setBad(bad + 1)}/>
      <Statistics good={good} bad={bad} netural={netural}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)