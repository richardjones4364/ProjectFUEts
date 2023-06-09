import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLOHqh3XatTe205mB3ODQzVipZWmv-GIPhBw&usqp=CAU' />
      </div>
      <h1>Welcome to Project FUE</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {count} fucks given
        </button>
        
      </div>
      <p className="read-the-docs">
        Made In Cornwall
      </p>
    </>
  )
}

export default App
