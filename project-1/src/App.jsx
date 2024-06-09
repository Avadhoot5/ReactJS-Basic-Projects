import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DrawerAppBar from './DrawerAppBar'
import Hero from './Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <DrawerAppBar />
    <Hero/>
    
    </>
  )
}


export default App
