import { useState } from 'react'
import './App.css'
import Addtodo from './Components/Addtodo'
import Todo from './Components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Addtodo/>
      <Todo/>
    </>
  )
}

export default App
