import styled, { css } from 'styled-components'
import { Theme } from '../../Theme'
import { TextAlign } from '../../utility/TextAlign'

export const styles = (p: {
  theme: Theme
  textAlign: TextAlign
}) => css`
  text-align: ${p.textAlign};
  color: ${p.theme.h1.color};
  font-family: ${p.theme.h1.fontFamily};
  font-size: ${p.theme.h1.fontSize};
  font-style: ${p.theme.h1.fontStyle};
  font-weight: ${p.theme.h1.fontWeight};
  line-height: ${`calc(${p.theme.h1.fontSize} * 1.4)`};
  letter-spacing: ${p.theme.h1.kerning};
  margin-bottom: ${p.theme.h1.marginBottom};
  text-transform: ${p.theme.h1.textTransform};
`

export const StyledH1 = styled.h1<{
  theme: Theme
  textAlign: TextAlign
}>`
  ${p => styles(p)}
`
