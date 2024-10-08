import { ReactNode } from "react"
import styled from "styled-components"

type Props = {
  children: ReactNode
}

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 350px;
  background: rgba(0,0,0,0.3);
`;

function Card (props: Props) {
  return (
    <StyledCard>
      {props.children}
    </StyledCard>
  )
}

export default Card