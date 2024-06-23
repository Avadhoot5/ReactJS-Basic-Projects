import './App.css'
import styled from 'styled-components';
import { useState } from 'react'
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((status) => !status);
  }

  return (
    <>
    {isGameStarted ? <GamePlay/> : <StartGame toggle = {toggleGamePlay}/>}
    </>
  )
}


export default App
