import styled, { css } from 'styled-components'
import { Theme } from '../Theme/types'

export const styles = (p: { theme: Theme }) => css`
  color: ${p.theme.h3.color};
  font-family: ${p.theme.h3.fontFamily};
  font-size: ${p.theme.h3.fontSize};
  font-style: ${p.theme.h3.fontStyle};
  font-weight: ${p.theme.h3.fontWeight};
  line-height: ${`calc(${p.theme.h3.fontSize} * 1.4)`};
  letter-spacing: ${p.theme.h3.kerning};
  margin-bottom: ${p.theme.h3.marginBottom};
  text-transform: ${p.theme.h3.textTransform};
`

export const StyledH3 = styled.h3`
  ${p => styles(p)}
`
