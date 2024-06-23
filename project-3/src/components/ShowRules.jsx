import styled from 'styled-components'

 function ShowRules() {
  return (
    <RuleContainer>
        <h3>How to play dice game</h3>
        <div className="stepSection">
            <div>Select any number</div>
            <div>Click on dice image</div>
            <div>after click on  dice  if selected number is equal to dice number you will get same point as dice </div>
            <div>if you get wrong guess then  2 point will be dedcuted   </div>
        </div>
    </RuleContainer>
  )
}


export default ShowRules;

const RuleContainer = styled.div`
    margin-bottom: 10px;
    width: 770px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background: #FBF1F1;
    gap: 20px;
`