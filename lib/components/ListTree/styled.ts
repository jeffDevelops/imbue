import styled, { css } from 'styled-components'
import { Theme } from '../../Theme'
import { getCSSForTransition } from '../../utility/Transition/getCSSForTransition'
import { borderAnimationStyles as linkBorderAnimationStyles } from '../Link'

export const UL = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  font-family: 'inherit';
  cursor: pointer;
`

export const listItemStyles = (p: { theme: Theme }) => css`
  box-sizing: border-box;
  width: 100%;
  padding: 8px 8px 8px 16px;
  margin: 0;
  display: flex;
  align-items: center;
  user-select: none;
  min-height: ${p.theme.listTree.listItems.minHeight};
  cursor: pointer;

  * {
    cursor: pointer;
  }

  &:hover {
    background-color: ${p.theme.listTree.listItems.hover
      .backgroundColor};
    transition: ${getCSSForTransition(
      p.theme.listTree.listItems.hover.transition,
    )};
  }

  &:hover > a:after {
    width: 100%;
    transition: width ease-in 0.3s;
  }
`

export const ListItem = styled.li<{ theme: Theme }>`
  ${p => listItemStyles(p)}
`
