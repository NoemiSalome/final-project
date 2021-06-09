import React from 'react'

import Home from 'pages/Home'
import Projects from 'pages/Projects'
import About from 'pages/About'
import Contact from 'pages/Contact'
import Header from 'components/general/Header'

export const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}