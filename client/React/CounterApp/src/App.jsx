import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  function increase(){
    setCount(count+1)
  }

  function Decrement(){
    if(count>0)
      setCount(count - 1)
  }
  

  return (
    <>
      <h1>Counter App</h1>
      <h3>Counter Value {count} </h3>
      <button onClick={increase}>Increment Value</button>
      <button onClick={Decrement}>Decrement Value</button>
    </>
  )
}

export default App
