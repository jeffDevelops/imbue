import styled, { css } from 'styled-components'
import { Theme } from '../../Theme'
import { TextAlign } from '../../utility/TextAlign'

export const styles = (p: {
  theme: Theme
  textAlign: TextAlign
}) => css`
  text-align: ${p.textAlign};
  color: ${p.theme.h2.color};
  font-family: ${p.theme.h2.fontFamily};
  font-size: ${p.theme.h2.fontSize};
  font-style: ${p.theme.h2.fontStyle};
  font-weight: ${p.theme.h2.fontWeight};
  line-height: ${`calc(${p.theme.h2.fontSize} * 1.4)`};
  letter-spacing: ${p.theme.h2.kerning};
  margin-bottom: ${p.theme.h2.marginBottom};
  text-transform: ${p.theme.h2.textTransform};
`

export const StyledH2 = styled.h2<{
  theme: Theme
  textAlign: TextAlign
}>`
  ${p => styles(p)}
`
