import styled, { css } from 'styled-components'
import { StyledLinkProps } from './types'
import { Theme } from '../Theme/types'
import { determineColor } from '../utility/Color/determineColor'
import {
  HierarchicalColorOptions,
  SemanticColorOptions,
} from '../utility/Color/types'

export const borderAnimationStyles = <
  Props extends {
    theme: Theme
    hierarchy?: HierarchicalColorOptions
    meaning?: SemanticColorOptions
  }
>(
  p: Props,
) => css`
  &:after {
    content: ' ';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    background-color: ${determineColor(p) ||
    p.theme.palette.primary.value};
    height: 1px;
    z-index: 0;
    border-radius: ${`0 0 ${p.theme.checkbox.borderRadius} ${p.theme.checkbox.borderRadius}`};
    transition: width ease-out 0.2s;
  }
  &:hover {
    &:after {
      width: 100%;
      transition: width ease-in 0.3s;
    }
  }
`

export const styles = (
  p: StyledLinkProps & { theme: Theme },
) => css`
  display: inline-block;
  position: relative;
  /* Set by the theme exclusively */
  text-transform: ${p => p.theme.link.textTransform};
  letter-spacing: ${p => p.theme.link.kerning};
  font-weight: ${p => p.theme.link.fontWeight};
  font-family: ${p => p.theme.link.fontFamily};
  line-height: 1;
  outline: ${p => p.theme.link.outline};
  background-color: transparent;
  border: none;
  color: ${determineColor(p) ||
  p.theme.palette.primary.value};
  cursor: ${p => p.theme.link.cursor};

  &:after {
    width: 0;
  }

  ${p => borderAnimationStyles(p)}

  &:visited {
    color: ${p => p.theme.link.visited.color};
  }
`

export const StyledLink = styled.a<StyledLinkProps>`
  ${p => styles(p)}
`
