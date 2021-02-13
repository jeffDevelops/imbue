import styled, { css } from 'styled-components'
import { Theme } from '../../Theme'

export const styles = (p: { theme: Theme }) => css`
  color: ${p.theme.h5.color};
  font-family: ${p.theme.h5.fontFamily};
  font-size: ${p.theme.h5.fontSize};
  font-style: ${p.theme.h5.fontStyle};
  font-weight: ${p.theme.h5.fontWeight};
  line-height: ${`calc(${p.theme.h5.fontSize} * 1.4)`};
  letter-spacing: ${p.theme.h5.kerning};
  margin-bottom: ${p.theme.h5.marginBottom};
  text-transform: ${p.theme.h5.textTransform};
`

export const StyledH5 = styled.h5`
  ${p => styles(p)}
`
