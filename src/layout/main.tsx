import { ReactNode } from "react"
import styled from "styled-components"

type Props = {
  children: ReactNode
}

const StyledMain = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  background: yellow;
  // min-height: 100%;
  margin-top: 40px;
`

function Main (props: Props) {
  return (
    <StyledMain>
      {props.children}
    </StyledMain>
  )
}

export default Main