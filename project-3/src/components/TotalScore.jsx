import styled from 'styled-components';


function TotalScore({score}) {
  return (
    <ScoreContainer>
            <div className="score">
                <h1>{score}</h1>
                <p>Total Score</p>
            </div>
    </ScoreContainer>
  )
}

export default TotalScore; 

const ScoreContainer = styled.div`
    max-width: 200px;
    max-height: 150px;
    text-align: center;

    h1 {
        font-size: 100px;
        font-weight: 400;
        line-height: 100px;
    }

    p {
        font-size: 24px;
        font-weight: 500;
    }

`