import styled, { css } from 'styled-components'
import { Theme } from '../../Theme/types'
import { TextAlign } from '../../utility/TextAlign/types'

export const styles = (p: {
  theme: Theme
  textAlign?: TextAlign
}) => css`
  text-align: ${p.textAlign || 'left'};
  color: ${p.theme.body1.color};
  font-family: ${p.theme.body1.fontFamily};
  font-size: ${p.theme.body1.fontSize};
  font-style: ${p.theme.body1.fontStyle};
  font-weight: ${p.theme.body1.fontWeight};
  line-height: ${p =>
    `calc(${p.theme.body1.fontSize} * 1.75)`};
  letter-spacing: ${p.theme.body1.kerning};
  margin-bottom: ${p.theme.body1.marginBottom};
  text-transform: ${p.theme.body1.textTransform};

  &:last-child {
    margin-bottom: 0;
  }
`

export const StyledBody1 = styled.p<{
  theme: Theme
  textAlign: TextAlign
}>`
  ${p => styles(p)}
`
