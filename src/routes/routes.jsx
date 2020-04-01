import React from 'react'
import { Router } from '@reach/router'
import Home from './home'
import API from './api'

export default () => {
  return (
    <Router>
      <Home path="/" />
      <API path="api" />
    </Router>
  )
}
