import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import {Modal} from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

const styles = {
  modal: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    display: 'flex',
    overflow: 'none',
    width: '100vw',
    padding: '0',
    margin: '0',
    height: '100vh',
    minWidth: '100vw',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'white',
    padding: '0'
  },
  closeIcon: {
    fill: 'black'
  }
};

const ScreenNavigation = props => {
  const { showNavigation, setShowNavigation } = props

  return (
		<>
      <Modal
        open={showNavigation}
        onClose={() => setShowNavigation(false)}
        styles={styles}
        animationDuration={500}
        focusTrapped={true}
        closeIconSize={40}
        showCloseIcon={true}
      >
        <NavigationOverlay>
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
        </NavigationOverlay>
      </Modal>
		</>
  )
}

const NavigationOverlay = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Navigation = styled.div`
  margin: 5px 0;
`

const Link = styled(NavLink)`
  font-family:'Archivo', sans-serif;
  font-size: 50px;
  text-decoration: none;
  color: black;
  :hover {
    font-style: italic;
  }
`

export default ScreenNavigation