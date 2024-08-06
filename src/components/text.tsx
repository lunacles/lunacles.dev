import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Props from 'styles/props'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
`

const TitleWrapper = styled.div<Props>`
  font-size: 5vmin;
  transform: translate(1.25em, -0.1em);
  height: 2em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  mix-blend-mode: screen;

  span {
    --color: ${props => props.color1 ?? '#fff'};
    font-family: 'Ubuntu', Impact, 'Anton', Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: ${props => props.fontWeight ?? 'bold'};
    font-style: italic;
    display: block;
    position: absolute;
    color: var(--color);
    letter-spacing: -0.005em;

    &::before,
    &::after {
      content: attr(data-text);
      display: block;
      position: relative;
      padding: 0 0.1em;
      z-index: 1;
    }

    &::before {
      position: absolute;
      -webkit-text-stroke: 0.1em black;
      z-index: 0;
    }

    &:first-child {
      transform: translate(-0.255em, -0.25em);
    }

    &:last-child {
      --color: ${props => props.color2 ?? '#000'};
      transform: translate(0.255em, 0.25em);
    }

    &.invert {
      color: black;

      &::before {
        -webkit-text-stroke: 0.05em var(--color);
      }
    }
  }
`

const NameTitle: React.FC<{
  text1: string
  text2: string
  color1: string
  color2: string
  weight: string
}> = ({ text1, text2, color1, color2, weight }) => {
  return (
    <>
      <GlobalStyle />
      <TitleWrapper
        color1={color1}
        color2={color2}
        fontWeight={weight}
      >
        <span data-text={text1}></span>
        <span className="invert" data-text={text2}></span>
      </TitleWrapper>
    </>
  )
}

export default NameTitle
