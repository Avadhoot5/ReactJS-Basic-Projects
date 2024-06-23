import styled from 'styled-components'
import Button from './Button'

function StartGame({toggle}) {
  return (
    <div>
        <Container>
            <div>
                <img src="./images/dices.png" alt="image" />
            </div>
            <div className="content">
                <h1>Dice Game</h1>
                <Button title="Play Now" toggle={toggle}/>
            </div>
        </Container>
    </div>
  )
}

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    flex-direction: row;
    align-items:center;
    margin: 0 auto;
    height: 100vh;

    .content {
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        h1 {
            font-size: 96px;
            text-wrap: nowrap;
        }
    }
`
