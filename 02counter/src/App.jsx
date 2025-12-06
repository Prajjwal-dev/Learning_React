import { useState } from 'react';
import './App.css'

function App() {
  // let counter = 2
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    console.log("clicked", counter);
    // counter = counter + 1
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Pro Newar</h1>
      <h2>Counter Value: {counter}</h2>


      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
