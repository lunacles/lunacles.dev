import React from 'react'
import styled from 'styled-components'
import Props from 'styles/props'
import NameTitle from './text'

const StyledHeader = styled.main<Props>`
  background-color: #282c34;
  min-height: 10h;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Header = () => {
  return (
    <StyledHeader>
      <header>
        <NameTitle
          text1="luna"
          text2=".dev"
          color1="#ffba11"
          color2="#b6acff"
          weight="400"
        ></NameTitle>
      </header>
    </StyledHeader>
  )
}

export default Header
