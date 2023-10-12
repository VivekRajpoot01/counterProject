import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const addValue = () => {
    if(counter >= 20){
      return alert("Counter Value Cannot Be Greater Than 20")
    }else{
      counter = counter+1
    }
    
    setCounter(counter)
    console.log(counter)
    console.log("Value Incremented")
  }
  const removeValue = () => {
    if(counter <= 0){
      return alert("Counter Value Cannot Be Less Than 0")
    }else{
      counter = counter-1
    }
    
    setCounter(counter)
    console.log(counter)
    console.log("Value Decremented")
  }
  return (
    <>
     <h1>Counter Project</h1>
     <h2>Counter Value: {counter}</h2>
     <button
     onClick={addValue}
     >Increment</button>
     <button
     onClick={removeValue}
     >Decrement</button>
      
    </>
  )
}

export default App
