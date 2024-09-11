import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter , setCounter]= useState(15)
  const addvalue =()=>{
    setCounter(prevCounter => prevCounter+1)
  }
  const removevalue =() =>{
    setCounter(prevCounter=>prevCounter-1)
  }

  return (
    <>
      <h1>Counter Project</h1>
      <button onClick={addvalue}>
       Add Value {counter}
      </button>
      <br />
      <button onClick={removevalue}>
        remove value{counter}

      </button>

    </>
  )
}

export default App
