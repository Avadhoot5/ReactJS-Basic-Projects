import { useState } from 'react';
import styled from 'styled-components'

function NumberSelector({error, selectedNumbers, setSelectedNumbers}) {

    const arrNumbers = [1,2,3,4,5,6];

  return (
    <NumberSection>
        <p className='error'>
        {error}
        </p>
        <div className='selectNumbers'>
            
            {/* Iterating array */}
            {arrNumbers.map((value, i) => {
                return <Box
                isSelected = {selectedNumbers === value}
                key={i} onClick={ () => {setSelectedNumbers(value)}}
                >{value}</Box>
            })}

        </div>
        <div className="para">
            <p>Select Number</p>
        </div>
    </NumberSection>

  )
}


export default NumberSelector;

const NumberSection = styled.div`
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: end;

    .selectNumbers {
        display: flex;
        gap: 24px;    
    }

    .para {
        font-size: 20px;
        font-weight: 700;
    }
    
    .error {
        color: red;
    }

`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 600;

    background-color: ${(props) => props.isSelected ? "black": "white"};
    color: ${(props) => props.isSelected ? "white": "black"}
`

