import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

import sanityClient from '../../client'

const Header = () => {
  const [projectTitle, setProjectTitle] = useState([])
  const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == '${slug}'] {
            title
        }`)
  .then((data) => setProjectTitle(data[0]))
  .catch(console.error)
  }, [slug])


  return (
    <HeaderContainer>
      <HeaderTitle>ANINA SCHMID.</HeaderTitle> 
      <NavigationContainer>
        <Navigation>
          <Link to="/" exact>home</Link>
        </Navigation>
        <Navigation>
          <Link to="/projects">projects</Link>
          <CurrentProject>
            {projectTitle && projectTitle.title}
          </CurrentProject>
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

const CurrentProject = styled.h4`
  font-family: 'Archivo', sans-serif;
  font-size: 6px;
  position: absolute;
  top: 38px;
    @media(min-width: 768px){
      font-size: 12px;
      top: 48px;
    }
    @media(min-width: 1024px){
      font-size: 16px;
    }
`

const HeaderContainer = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100vw;
  height: 80px;
  margin: 15px 0 ;
    @media(min-width: 1024px){
      height: 60px;
    }
`

const HeaderTitle = styled.h1`
  font-family:'Archivo', sans-serif;
  font-size: 15px;
  margin-left: 15px;
    @media(min-width: 768px){
      font-size: 25px
    }
    @media(min-width: 1024px){
      font-size: 23px;
      margin-left: 100px
    }
`

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  width: 50%;
  margin-right: 15px;
  text-align: center;
  .active {
    border-top: 1px solid black
  }
`

const Navigation = styled.div`
  font-family:'Archivo', sans-serif;
  display: flex;
  flex-direction: column;
  font-size: 10px;
  margin-left: 5px;
  text-decoration: none;
  color: black;
  width: 110px;
    @media(min-width: 768px){
      font-size: 18px
    }
    @media(min-width:1024px){
      margin-left: 22px
    }
  `

  const Link = styled(NavLink)`
    color: black;
    text-decoration: none;
    padding: 6px 0 1px;
    :hover {
      opacity: 0.6;
      transition: 0.2s;
    }
  `

export default Header