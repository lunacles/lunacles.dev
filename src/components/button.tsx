import React from 'react'
import styled from 'styled-components'
import { Theme } from '../styles/theme'

interface StyledButtonProps {
  disabled: boolean
}

let topLevel = (props: any): boolean => props.className === 'primary'
let mix = (color: string, weight: number): string => `color-mix(in srgb, var(--color) ${weight}%, ${color})`

const StyledButton = styled.button<StyledButtonProps>`
  font-family: Ubuntu 16px bold;
  --color: ${props => (
    props.className === 'primary' ? Theme.Primary :
    props.className === 'secondary' ? Theme.Secondary :
    props.className === 'tertiary' ? Theme.Tertiary :
    '#000'
  )};
  border-radius: ${Theme.BorderRadius}px;
  border: ${Theme.BorderRadius * 0.25}px solid;
  color: ${props =>
    topLevel(props) ? Theme.Background : Theme.White
  };
  background-color: ${
    props => topLevel(props) ? 'var(--color)' : 'transparent'
  };
  border-color: var(--color);
  padding: 2px 4px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: none;
  transition: all 0.3s ease-in-out;

  ${props => props.disabled ? `
    opacity: 0.5;
    cursor: not-allowed;
  ` : ''}

  &&:primary {
    border: none;
  }
  &&:hover {
    background-color: ${props => topLevel(props) ?
      mix(Theme.Highlight, 35) :
      mix('transparent', 65)
    };
    border-color: ${props => topLevel(props) ?
      mix(Theme.Highlight, 35) :
      mix(Theme.Secondary, 25)
    };
  }

  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`

interface ButtonProps {
  type: 'primary' | 'secondary' | 'tertiary'
  href?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  disabled?: boolean
  width?: string
  height?: string
  content?: string
  icon?: string
  alt?: string
}

const Button: React.FC<ButtonProps> = ({ type, href, onClick, disabled = false, width, height, content, icon, alt }) => {
  return (
    <StyledButton as={href ? 'button' : 'a'} href={href} className={type} onClick={onClick} disabled={disabled}>
      {content}
      {icon && <img src={icon} alt={alt} width={width} height={height}/>}
    </StyledButton>
  )
}

export default Button
