import styled, { css } from 'styled-components'
import { Theme } from '../../Theme'

export const styles = (p: { theme: Theme }) => css`
  font-family: ${p.theme.label.fontFamily};
  font-size: ${p.theme.label.fontSize};
  font-weight: ${p.theme.label.fontWeight};
  line-height: ${`calc(${p.theme.body1.fontSize} * 1.75)`};
  margin-bottom: 8px;
  letter-spacing: ${p.theme.label.kerning};
  color: ${p.theme.label.color};
  user-select: none;
  cursor: pointer;
`

export const StyledLabel = styled.label`
  ${p => styles(p)}
`
