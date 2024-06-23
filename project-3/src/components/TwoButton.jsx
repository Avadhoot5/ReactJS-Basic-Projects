import styled from 'styled-components'


function TwoButton({title, resetScore, toggleRule}) {

  const handleClick = () => {
    if (resetScore) resetScore();
    if (toggleRule) toggleRule();
  }

  return (
    <div>
        <TwoButtonCss onClick={handleClick}>
            {title}
        </TwoButtonCss>

    </div>
  )
}


export default TwoButton;

const TwoButtonCss = styled.button`
    min-width: 220px;
    background-color: white;
    color: black;
    padding: 10px 15px;
    font-size: 17px;
    border-radius: 5px;
    cursor: pointer;
`
