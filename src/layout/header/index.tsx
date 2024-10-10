import styled from "styled-components"
import Logo from "layout/header/logo"
import Hamberger from "layout/header/hamberger"
import Nav from "layout/header/nav"

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  space-between: center;
  text-align: center;
  flex-wrap: wrap;
  background: orange;
  height: 99px;
  width: 100%;
  top: 0;
`

function Header (props: Object) {
  return (
    <StyledHeader>
      <Logo></Logo>
      <Nav/>
      {/* <Hamberger></Hamberger> */}
    </StyledHeader>
  )
}

export default Header