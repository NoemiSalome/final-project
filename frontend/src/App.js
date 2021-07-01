import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from 'pages/Home'
import Project from 'pages/Project'
import ProjectDetail from 'pages/Projectdetail'
import About from 'pages/About'
import Contact from 'pages/Contact'
import ScreenNavigation from 'components/ScreenNavigation'

export const App = () => {

  return (
    <>
    
      <BrowserRouter>
        <Switch>
        {/* <ScreenNavigation /> */}
          <Route component={Home} path='/' exact />
          <Route component={ProjectDetail} path='/projects/:slug' />
          <Route component={Project} path='/projects' />
          <Route component={About} path='/about' />
          <Route component={Contact} path='/contact' />
        </Switch>
      </BrowserRouter>
</>
  )
}