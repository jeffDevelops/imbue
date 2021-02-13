import styled, { css } from 'styled-components'
import { FlexProps } from './types'

export const styles = (p: FlexProps) => css`
  ${p.gridArea && `grid-area: ${p.gridArea};`};
  display: flex;
  flex-direction: ${() => {
    if (p.column) return 'column'
    if (p.flexDirection) return p.flexDirection
    return 'row'
  }};
  flex-wrap: ${p.wrap};
  justify-content: ${p.justifyContent || 'center'};
  align-items: ${p.alignItems || 'center'};
  width: ${p.width || '100%'};
  height: ${p.height || 'auto'};
  max-width: ${p.maxWidth || 'none'};
  max-height: ${p.maxHeight || 'none'};
  min-width: ${p.minWidth || '0'};
  min-height: ${p.minHeight || '0'};
  z-index: ${p.zIndex || 1};
  margin: ${p.margin || 'initial'};
  padding: ${p.padding || 'initial'};
  position: ${p.position || 'static'};
  
  ${p.top && `top: ${p.top};`}
  ${p.left && `left: ${p.left};`}
  ${p.right && `right: ${p.right};`}
  ${p.bottom && `bottom: ${p.bottom};`}
`

export const StyledFlex = styled.div<FlexProps>`
  ${p => styles(p)}
`
