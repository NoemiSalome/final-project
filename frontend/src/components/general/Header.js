import React,{ useState } from 'react'
import styled from 'styled-components/macro'

import ScreenNavigation from 'components/ScreenNavigation'

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <>

      <HeaderContainer>
        <HeaderTitle>ANINA SCHMID.</HeaderTitle> 
        <CircleButton onClick={() => setModalVisible(true)}></CircleButton>
      </HeaderContainer>              
      <ScreenNavigation
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
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
  margin: 0 40px 0 0;
`

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 80px;
  margin: 15px 0;
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