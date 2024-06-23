import styled from 'styled-components'
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';
import { useState } from 'react';

function GamePlay() {

  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumbers, setSelectedNumbers] = useState();
  const [error, setError] = useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const rollDice = () => {
    if (!selectedNumbers) {
      setError("Please select a number");
    } else {
      setError("");
      const randomNumber = generateRandomNumber(1,6);
      setCurrentDice(randomNumber);
  
      if (randomNumber === selectedNumbers) {
        setScore((value) => value + randomNumber);
      } else {
        setScore((value) => value - 2);
      }
      setSelectedNumbers(undefined);
    }
}

  const resetScore = () => {
    setScore(0);
  }

  return (
    <div>
        <Main className='gamePlay_header'>
            <TotalScore score = {score}/>
            <NumberSelector
            error = {error} 
            selectedNumbers = {selectedNumbers}
            setSelectedNumbers = {setSelectedNumbers}
            />
        </Main>
        <RollDice
        resetScore = {resetScore}
        currentDice = {currentDice}
        rollDice = {rollDice}
        />
    </div>
  )
}

export default GamePlay;

const Main = styled.main`

    display: flex;
    justify-content: space-between;
    padding: 30px;

`