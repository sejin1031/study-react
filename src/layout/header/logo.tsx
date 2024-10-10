import styled from "styled-components"

const StyledLogo = styled.span`
  flex-grow: 1;
  align-self: center;
  font-size: 1.5rem;
  font-weight: bold;
`

function Logo () {
  return (
    <StyledLogo>
      FF
    </StyledLogo>
  )
}

export default Logo