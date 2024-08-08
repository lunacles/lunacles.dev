import React from 'react'
import styled from 'styled-components'
import NameTitle from './text'
import List from './list'
import Button from './button'
import { Theme } from '../styles/theme'

const StyledHeader = styled.header`
  position: relative;
  padding: 0 2rem;
  color: ${Theme.Foreground};
  border-bottom: ${Theme.BorderRadius * 0.5}px solid color-mix(in srgb, ${Theme.Foreground} 95%, ${Theme.White});

  .navbar {
    width: 100%;
    height: 60px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

let buttons: Array<{
  [key: string]: string
}> = [{
  content: 'About', href: 'about'
}, {
  content: 'Projects', href: 'projects'
}, {
  content: 'Contact', href: 'contact'
}, {
  content: 'Photography', href: 'photography'
}]

const Header = () => {
  return (
    <StyledHeader>
      <div className='navbar'>
        <NameTitle
          text1='luna'
          text2='.dev'
          color1={Theme.Primary as string}
          color2={Theme.White as string}
          weight='700'
        />

        <List>
          {buttons.map((button, index) => (
            <Button
              type={'primary'}
              key={index}
              content={button.content}
              href={button.href}
            />
          ))}
        </List>
      </div>
    </StyledHeader>

  )
}

export default Header
