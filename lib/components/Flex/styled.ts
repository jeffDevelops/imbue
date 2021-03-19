import styled, { css } from 'styled-components'
import { FlexProps } from './types'

export const styles = (p: FlexProps) => css`
  ${p.gridArea && `grid-area: ${p.gridArea};`}
  display: ${p.display ? p.display : 'flex'};
  flex-direction: ${() => {
    if (p.column) return 'column'
    if (p.flexDirection) return p.flexDirection
    return 'row'
  }};
  flex-wrap: ${p.wrap || 'no-wrap'};
  justify-content: ${p.justifyContent || 'center'};
  align-items: ${p.alignItems || 'center'};
  max-width: ${p.maxWidth || 'none'};
  max-height: ${p.maxHeight || 'none'};
  min-width: ${p.minWidth || '0'};
  min-height: ${p.minHeight || '0'};
  z-index: ${p.zIndex || 1};
  margin: ${p.margin || 'initial'};
  padding: ${p.padding || 'initial'};
  position: ${p.position || 'static'};
`

export const StyledFlex = styled.div.attrs<FlexProps>(
  ({ width, height, top, left, right, bottom }) => ({
    style: {
      width: width || '100%',
      height: height || 'auto',
      ...(top ? { top } : {}),
      ...(left ? { left } : {}),
      ...(right ? { right } : {}),
      ...(bottom ? { bottom } : {}),
    },
  }),
)`
  ${p => styles(p)}
`
