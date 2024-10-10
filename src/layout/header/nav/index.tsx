import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";

interface NavProps {
  name: string;
  path: string;
}

const StyledNav = styled.nav`
  flex-grow: 5;
  height: 70%;
  // border: 1px solid black;
  align-self: center;
  margin-right: 5%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  
`

const StyleNavContent = styled.div`
  
  
  align-self: center;
  margin: 30px;
  font-size: 2rem;
  font-weight: bold;
  transition: all 0.3s;

  :hover {
    font-size:3rem;
    color: red;
    transform: translate(-100px,-1000px);
  }

  a {
    text-decoration: none;
    color: white;

  }

  .active {
    background: rgba(0,0,0,0.3);
    border-radius: 10px;
  }

  .active a {

  }


`

function NavLink ({path, name}: NavProps) {

  return <StyleNavContent className="active"><Link to={path}>{name}</Link></StyleNavContent>
}

function Nav () {

  const navElements = [
    {
      name: 'HOME',
      path: '/'
    },
    {
      name: 'POST',
      path: '/posts'
    }
  ]
  return (
    <StyledNav>
      {
        navElements.map(({name, path}) => {
          return <NavLink key={name} name={name} path={path}/>
        })
      }
    </StyledNav>
  )
}

export default Nav;