import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(1);

  const add = () => {
    counter += 1;
    setCounter(counter);
  }
  const minus = () => {
    counter -= 1;
    setCounter(counter);
  }
  return (
    <>
    <h1>Counter</h1>
    <h2> Current Counter Value : {counter}</h2>
    <button type='button' onClick={add}>Add</button>
    <button type='button' onClick={minus}>Minus</button>
    </>
  )
}

export default App
