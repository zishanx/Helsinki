import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistic = ({ good, neutral, bad, total, }) => {

  if (total === 0) {
    return (
      <div>
        <h2>Statistic</h2>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr>
            <StatisticLine text="Good" value={good} />
          </tr>
          <tr>
            <StatisticLine text="Neutral" value={neutral} />
          </tr>
          <tr>
            <StatisticLine text="Bad" value={bad} />
          </tr>
          <tr>
            <StatisticLine text="All" value={total} />
          </tr>
          <tr>
            <StatisticLine text="Average" value={total / 3} />
          </tr>
          <tr>
            <StatisticLine text="Positive" value={`${good / total * 100} %`} />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <p>{text}: {value}</p>
    </>
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