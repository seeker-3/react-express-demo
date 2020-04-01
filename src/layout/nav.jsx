import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

const Nav = styled.nav`
  display: flex;
  background: #ddd;
  > * {
    margin: 2rem 0 2rem 2rem;
  }
`

export default () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="api">API</Link>
    </Nav>
  )
}
