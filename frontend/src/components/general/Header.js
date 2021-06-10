import React from 'react'
import styled from 'styled-components/macro'

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

const NavigationLink = styled.a`
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
        <NavigationLink href="">home</NavigationLink>
        <NavigationLink href="">projects</NavigationLink>
        <NavigationLink href="">about</NavigationLink>
        <NavigationLink href="">contact</NavigationLink>
      </NavigationContainer>
    </HeaderContainer>
    )
}

export default Header