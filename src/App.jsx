import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCount] = useState(0);
  const incCounter = () => {
    setCount(counter + 1);
  }

  return (
    <>
      <button onClick={incCounter}>HamzaFattouh {counter}</button>
    </>
  )
}

export default App
