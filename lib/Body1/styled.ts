import styled, { css } from 'styled-components'
import { Theme } from '../Theme/types'

export const styles = (p: { theme: Theme }) => css`
  color: ${p => p.theme.body1.color};
  font-family: ${p => p.theme.body1.fontFamily};
  font-size: ${p => p.theme.body1.fontSize};
  font-style: ${p => p.theme.body1.fontStyle};
  font-weight: ${p => p.theme.body1.fontWeight};
  line-height: ${p =>
    `calc(${p.theme.body1.fontSize} * 1.75)`};
  letter-spacing: ${p => p.theme.body1.kerning};
  margin-bottom: ${p => p.theme.body1.marginBottom};
  text-transform: ${p => p.theme.body1.textTransform};

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const StyledBody1 = styled.p`
  ${p => styles(p)}
`
