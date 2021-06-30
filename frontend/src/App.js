import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from 'pages/Home'
import Project from 'pages/Project'
import ProjectDetail from 'pages/Projectdetail'
import About from 'pages/About'
import Contact from 'pages/Contact'
import { ParallaxProvider } from 'react-scroll-parallax'

export const App = () => {

  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={ProjectDetail} path='/projects/:slug' />
          <Route component={Project} path='/projects' />
          <Route component={About} path='/about' />
          <Route component={Contact} path='/contact' />
        </Switch>
      </BrowserRouter>
    </ParallaxProvider>
  )
}