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
  font-family: 'Cormorant', serif;
  font-size: 11px;
  position: absolute;
  top: 27px;
    @media(min-width: 768px){
      font-size: 16px;
      top: 42px;
    }
    @media(min-width: 1024px){
      font-size: 16px;
    }
`

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 80px;
  margin-top: 10px;
  margin-bottom: 30px;
    @media(min-width: 1024px){
      height: 60px;
    }
`

const HeaderTitle = styled.h1`
  font-family: 'Abril Fatface', cursive;
  font-size: 17px;
  margin-left: 15px;
    @media(min-width: 768px){
      font-size: 30px
    }
    @media(min-width: 1024px){
      font-size: 23px;
      margin-left: 100px
    }
`

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  margin-right: 15px;
  .active {
    text-decoration: 2px underline pink;
  }
  @media(min-width: 768px){
    .active {
      text-decoration: 2px underline pink;
    }
  }
`

const Navigation = styled.div`
  font-family: 'Abril Fatface', cursive;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  margin-left: 5px;
  text-decoration: none;
  color: black;
  width: 100px;
    @media(min-width: 768px){
      font-size: 22px
    }
    @media(min-width:1024px){
      margin-left: 22px
    }
  `

  const Link = styled(NavLink)`
    color: black;
    text-decoration: none;
  `

export default Header