import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistic = ({ good, neutral, bad, total, }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {total}</p>
      <p>Average: {total / 3}  </p>
      <p>Positive: {good / total * 100}%</p>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad

  return (
    <div>
      <h1>Give feedback</h1>

      <Button onClick={() => setGood(good + 1)} text={"Good"}></Button>
      <Button onClick={() => setNeutral(neutral + 1)} text={"Neutral"}></Button>
      <Button onClick={() => setBad(bad + 1)} text={"Bad"}></Button>

      <Statistic good={good} neutral={neutral} bad={bad} total={total}></Statistic>
    </div>
  )
}

export default App