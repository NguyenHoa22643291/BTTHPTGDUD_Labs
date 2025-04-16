import { useState } from 'react'
import CounterUseReducer from './CounterUseReducer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CounterUseReducer/>
    </div>

  )
}

export default App
