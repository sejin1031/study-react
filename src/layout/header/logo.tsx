import styled from "styled-components"

const StyledLogo = styled.span`
  flex-grow: 2;
  align-self: center;
  font-size: 1.5rem;
  font-weight: bold;
`

function Logo () {
  return (
    <StyledLogo>
      To Do List
    </StyledLogo>
  )
}

export default Logo