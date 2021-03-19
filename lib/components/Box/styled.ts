import styled, { css } from 'styled-components'
import { Theme } from '../../Theme/types'
import { StyledBoxProps } from './types'

export const styles = (
  p: { theme: Theme } & StyledBoxProps,
) => css`
  ${p.gridArea && `grid-area: ${p.gridArea};`}
  display: ${p.display ? p.display : 'block'};
  min-height: ${p.minHeight || 0};
  max-height: ${p.maxHeight || 'none'};
  min-width: ${p.minWidth || 0};
  max-width: ${p.maxWidth || 'none'};
  z-index: ${p.zIndex || 1};
  position: ${p.position || 'static'};
`

export const StyledBox = styled.div.attrs<
  { theme: Theme } & StyledBoxProps
>(
  ({
    height = 'auto',
    width = '100%',
    margin = '0',
    padding = '0',
    top,
    left,
    right,
    bottom,
  }: StyledBoxProps) => ({
    style: {
      height,
      width,
      margin,
      padding,
      ...(top ? { top } : {}),
      ...(left ? { left } : {}),
      ...(right ? { right } : {}),
      ...(bottom ? { bottom } : {}),
    },
  }),
)<{ theme: Theme } & StyledBoxProps>`
  ${p => styles(p)}
`
