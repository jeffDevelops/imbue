import styled, { css } from 'styled-components'
import { Theme } from '../../Theme/types'
import { TextAlign } from '../../utility/TextAlign'

export const styles = (p: {
  theme: Theme
  textAlign: TextAlign
}) => css`
  text-align: ${p.textAlign};
  color: ${p.theme.body2.color};
  font-family: ${p.theme.body2.fontFamily};
  font-size: ${p.theme.body2.fontSize};
  font-style: ${p.theme.body2.fontStyle};
  font-weight: ${p.theme.body2.fontWeight};
  line-height: ${p =>
    `calc(${p.theme.body2.fontSize} * 1.75)`};
  letter-spacing: ${p.theme.body2.kerning};
  margin-bottom: ${p.theme.body2.marginBottom};
  text-transform: ${p.theme.body2.textTransform};

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const StyledBody2 = styled.p<{
  textAlign: TextAlign
  theme: Theme
}>`
  ${p => styles(p)}
`
