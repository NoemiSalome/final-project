import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

const Header = () => {

  return (
    <HeaderContainer>
      <HeaderTitle>ANINA SCHMID.</HeaderTitle> 
      <NavigationContainer>
        <Navigation>
          <Link to="/" exact>home</Link>
        </Navigation>
        <Navigation>
          <Link to="/projects">projects</Link>
        </Navigation>
        <Navigation>
          <Link to="/about">about</Link>
        </Navigation>
        <Navigation>
          <Link to="/contact">contact</Link>
        </Navigation>
      </NavigationContainer>
    </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100vw;
  height: 40px;
  margin-bottom: 30px;
`

const HeaderTitle = styled.h1`
  font-family: 'Abril Fatface', cursive;
  font-size: 17px;
  margin-left: 15px
`

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  font-size: 14px;
  margin-right: 15px;

  .active {
    text-decoration: 2px underline pink;
  }
`

const Navigation = styled.div`
  font-family: 'Abril Fatface', cursive;
  font-size: 13px;
  margin-left: 5px;
  text-decoration: none;
  color: black;
`
const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
`

export default Header