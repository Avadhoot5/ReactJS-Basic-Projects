import styled from 'styled-components'
import TwoButton from './TwoButton';
import ShowRules from './ShowRules'
import { useState } from 'react';

function RollDice({currentDice, rollDice, resetScore}) {

    const [showRules, setShowRules] = useState(false);

    const toggleRule = () => {
        setShowRules(!showRules);
    }

  return (
    <MainDiceContainer>
        <DiceContainer onClick={rollDice}>
            <img src={`/images/dice/dice_${currentDice}.png`} alt="dice image" />
        </DiceContainer>
        <div>
            <p>Click on Dice to roll</p>
        </div>
        <div className="two_bttn">
            <TwoButton resetScore={resetScore} title="Reset Score"></TwoButton>
            <TwoButton toggleRule={toggleRule} title="Rules"></TwoButton>
        </div>
        <div>
            {showRules && <ShowRules/>}
        </div>
    </MainDiceContainer>
  )
}


export default RollDice;


const DiceContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 48px;
    cursor: pointer;

`
const MainDiceContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;

    .two_bttn {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    p {
        font-size: 24px;
        font-weight: 500;
    }

`