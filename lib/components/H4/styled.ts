import styled, { css } from 'styled-components'
import { Theme } from '../../Theme'
import { TextAlign } from '../../utility/TextAlign'

export const styles = (p: {
  theme: Theme
  textAlign: TextAlign
}) => css`
  text-align: ${p.textAlign};
  color: ${p.theme.h4.color};
  font-family: ${p.theme.h4.fontFamily};
  font-size: ${p.theme.h4.fontSize};
  font-style: ${p.theme.h4.fontStyle};
  font-weight: ${p.theme.h4.fontWeight};
  line-height: ${`calc(${p.theme.h4.fontSize} * 1.4)`};
  letter-spacing: ${p.theme.h4.kerning};
  margin-bottom: ${p.theme.h4.marginBottom};
  text-transform: ${p.theme.h4.textTransform};
`

export const StyledH4 = styled.h4<{
  theme: Theme
  textAlign: TextAlign
}>`
  ${p => styles(p)}
`
