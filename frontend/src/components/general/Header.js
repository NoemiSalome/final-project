import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100vw;
  height: 40px;
  padding: 0 3px;
  margin-bottom: 15px
`

const HeaderTitle = styled.h1`
  font-family: 'Abril Fatface', cursive;
  font-size: 20px;
`

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  font-size: 14px;
`

const Navigation = styled.div`
  font-family: 'Abril Fatface', cursive;
  font-size: 13px;
  margin-left: 5px;
  text-decoration: none;
  color: black;
`

const Header = () => {

  return (
    <HeaderContainer>
      <HeaderTitle>ANINA SCHMID.</HeaderTitle> 
      <NavigationContainer>
        <Navigation>
          <NavLink to="/" exact>
            home
          </NavLink>
        </Navigation>
        <Navigation>
          <NavLink to="/projects">projects</NavLink>
        </Navigation>
        <Navigation>
          <NavLink to="/about">about</NavLink>
        </Navigation>
        <Navigation>
          <NavLink to="/contact">contact</NavLink>
        </Navigation>
      </NavigationContainer>
    </HeaderContainer>
    )
}

export default Header