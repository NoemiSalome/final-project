import React,{ useState } from 'react'
import styled from 'styled-components/macro'

import ScreenNavigation from 'components/ScreenNavigation'

const Header = () => {
  const [showNavigation, setShowNavigation] = useState(false);


  return (
    <>
      <HeaderContainer>
        <HeaderTitle>ANINA SCHMID.</HeaderTitle> 
        <CircleButton onClick={() => setShowNavigation(true)}></CircleButton>
      </HeaderContainer>              
      <ScreenNavigation
          showNavigation={showNavigation}
          setShowNavigation={setShowNavigation}
        />
    </>
  )
}

const CircleButton = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: black;
  border: none;
  margin-right: 15px;
	box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
	transform: scale(1);
	animation: pulse 2s infinite;
    :hover{
      scale: 0.4;
      transition-duration: 1s;
    } 
    @keyframes pulse {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
      }
      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
      }
      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
    @media(min-width: 1024px){
      margin-right: 40px
    }
`

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 60px;
    @media(min-width: 1024px){
      height: 60px;
    }
`

const HeaderTitle = styled.h1`
  font-family:'Archivo', sans-serif;
  font-size: 15px;
  padding-left: 15px;
    @media(min-width: 768px){
      font-size: 25px
    }
    @media(min-width: 1024px){
      font-size: 28px;
      padding-left: 40px;
      width: 100%
    }
`


export default Header