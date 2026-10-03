import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addName = (e) => {
    setNewName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    for (const value of persons) {
      if (value.name === newName) {
        alert(`${newName} is already added to the phonebook.`)
        setNewName('')
        return
      }
    }

    setPersons(prev => [...prev, { name: newName }])
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type='text' value={newName} onChange={addName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(item => <p>{item.name}</p>)}
    </div>
  )
}

export default App