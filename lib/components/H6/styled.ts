import styled, { css } from 'styled-components'
import { Theme } from '../../Theme'
import { TextAlign } from '../../utility/TextAlign/types'

export const styles = (p: {
  theme: Theme
  textAlign: TextAlign
}) => css`
  text-align: ${p.textAlign};
  color: ${p.theme.h6.color};
  font-family: ${p.theme.h6.fontFamily};
  font-size: ${p.theme.h6.fontSize};
  font-style: ${p.theme.h6.fontStyle};
  font-weight: ${p.theme.h6.fontWeight};
  line-height: ${`calc(${p.theme.h6.fontSize} * 1.4)`};
  letter-spacing: ${p.theme.h6.kerning};
  margin-bottom: ${p.theme.h6.marginBottom};
  text-transform: ${p.theme.h6.textTransform};
`

export const StyledH6 = styled.h6<{
  theme: Theme
  textAlign: TextAlign
}>`
  ${p => styles(p)}
`
