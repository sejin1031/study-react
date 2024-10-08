import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  height:100px;
  position: fixed;
  background: rgba(0,0,0,0.1);
  bottom: 0; 
`

function Footer () {
  return (
    <StyledFooter>
      This is Footer
    </StyledFooter>
  )
}

export default Footer