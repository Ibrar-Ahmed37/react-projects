import { useState } from 'react'
import './App.css'
import { Facebook } from './components/Facebook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Facebook/>
    </>
  )
}

export default App
