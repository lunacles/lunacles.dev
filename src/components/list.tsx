import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
  display: flex;
  gap: 2rem;
`

const StyledListChild = styled.li`
  list-style: none;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
  }

  a:hover {
    top: 1px;
    height: 39px;
    box-shadow: inset 0 -3px rgba(0, 0, 0, 0.15);
  }
`

interface ListProps {
  children: React.ReactNode
}

const List: React.FC<ListProps> = ({ children }) => {
  return (
    <StyledList>
      {React.Children.map(children, (child, index) => (
        <StyledListChild key={index}>
          {child}
        </StyledListChild>
      ))}
    </StyledList>
  )
}

export default List
