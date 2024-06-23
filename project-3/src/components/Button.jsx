import styled from 'styled-components'

function Button({toggle, title}) {
  return (
    <>
    <Buttoncss onClick = {toggle}>
        {title}
    </Buttoncss>
    </>
  )
}

export default Button;

export const Buttoncss = styled.button`
min-width: 200px;
max-width: 200px;
background-color: black;
color: white;
padding: 10px 15px;
font-size: 17px;
border: 1px solid white;
border-radius: 5px;
transition: 0.3s background ease-in;
cursor: pointer;

&:hover {
    border: 1px solid black;
    background-color: white;
    color: black;
    transition: 0.3s background ease-in;
}
`

