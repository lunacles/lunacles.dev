import React from 'react'
import Header from './components/header'
import { Theme } from './styles/theme'
import styled from 'styled-components'

const StyledApp = styled.div`
  background: ${Theme.Background};
`

const App = () => {
  return (<>
    <StyledApp className='App' >
      <Header/>
    </StyledApp>
    <h1>this is still a wip lol</h1>
  </>)
}

export default App
