import React from 'react'
import styled from 'styled-components'
import Routes from '../routes/routes'

const Main = styled.main`
  margin: 0 2rem;
`

export default () => {
  return (
    <Main>
      <Routes />
    </Main>
  )
}
