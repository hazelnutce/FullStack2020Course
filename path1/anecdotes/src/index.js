import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [arrayVote, setArrayVote] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))
  const [maxSelected, setMaxSelected] = useState(0)
  const [maxVote, setVote] = useState(0)

  function handleVote(){
    const copy = [ ...arrayVote ]
    copy[selected] += 1

    setVote(Math.max(...copy))
    setMaxSelected(indexOfMax(...copy))
    
    setArrayVote(copy)
  }

  function handleAnecdotes(){
    let randomNum = Math.round(Math.random() * 5)
    setSelected(randomNum)
  }

  function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <div>has {arrayVote[selected]} votes</div>
      <div>
        <button onClick={() => handleVote()}>Vote</button>
        <button onClick={() => handleAnecdotes()}>Next Anecdotes</button>
      </div>
      <h1>Anecdote with most vote</h1>
      {props.anecdotes[maxSelected]}
      <div>has {maxVote} votes</div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
