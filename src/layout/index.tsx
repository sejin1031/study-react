import { ReactNode } from "react"
import styled from "styled-components"
import Header from "layout/header"
import Main from "layout/main"
import Footer from "layout/footer"

type Props = {
  children: ReactNode
}

const LayoutDiv = styled.div`
  flex-wrap: nowrap;
  min-height: 100%;
  padding-bottom: 193px;
`

function Layout (props: Props) {
  return (
    <LayoutDiv>
      <Header></Header>

      <Main>
        {props.children}  
      </Main>
      <Footer></Footer>
      
      
      
    </LayoutDiv>
  )
}

export default Layout