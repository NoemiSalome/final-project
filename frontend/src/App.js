import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from 'pages/Home'
import Projects from 'pages/Projects'
import ProjectDetail from 'pages/ProjectDetail'
import About from 'pages/About'
import Contact from 'pages/Contact'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={ProjectDetail} path='/projects/:slug' />
        <Route component={Projects} path='/projects' />
        <Route component={About} path='/about' />
        <Route component={Contact} path='/contact' />
      </Switch>
    </BrowserRouter>
  )
}