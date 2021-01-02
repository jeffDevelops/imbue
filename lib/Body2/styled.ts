import styled, { css } from 'styled-components'
import { Theme } from '../Theme/types'

export const styles = (p: { theme: Theme }) => css`
  color: ${p => p.theme.body2.color};
  font-family: ${p => p.theme.body2.fontFamily};
  font-size: ${p => p.theme.body2.fontSize};
  font-style: ${p => p.theme.body2.fontStyle};
  font-weight: ${p => p.theme.body2.fontWeight};
  line-height: ${p =>
    `calc(${p.theme.body2.fontSize} * 1.75)`};
  letter-spacing: ${p => p.theme.body2.kerning};
  margin-bottom: ${p => p.theme.body2.marginBottom};
  text-transform: ${p => p.theme.body2.textTransform};

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const StyledBody2 = styled.p`
  ${p => styles(p)}
`
