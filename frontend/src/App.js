import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from 'pages/Home'
import Project from 'pages/Project'
// import ProjectDetail from 'pages/ProjectDetail'
import About from 'pages/About'
import Contact from 'pages/Contact'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Project} path='/projects' />
        {/* <Route component={ProjectDetail} path='/projects/:slug' /> */}
        <Route component={About} path='/about' />
        <Route component={Contact} path='/contact' />
      </Switch>
    </BrowserRouter>
  )
}