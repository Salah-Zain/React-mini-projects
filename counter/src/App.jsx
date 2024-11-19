import { useState } from 'react'
import './App.css'
import Counter from './counter'

const App = () => {
  
  const [count,setCount] =useState(0);

  const increment =()=>{
    setCount(count+1)
  }
  
  const reset =()=>{
    setCount(0)
  }

  const decrement =()=>{
    setCount(count-1)
  }
  return (
    <div className='container'>
    <div className='box'>
    <Counter count = {count}/>
    <button onClick={increment}>Increment</button>
    <button onClick={reset}>Reset</button>
    <button onClick={decrement}>Decrement</button>
    </div>
    </div>
  )
}

export default App
