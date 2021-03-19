import styled, { css } from 'styled-components'
import { Theme } from '../../Theme/types'
import { GridProps } from './types'

export const styles = (
  p: GridProps & { theme: Theme },
) => css`
  display: grid;
  grid-template-columns: ${p.gridTemplateColumns};
  grid-template-rows: ${p.gridTemplateRows};
  grid-template-areas: ${p.gridTemplateAreas};
  gap: ${p.gap};
  width: 100%;
  height: ${p.height ? p.height : '100%'};
`

export const StyledGrid = styled.section<GridProps>`
  ${p => styles(p)}
`

export const StyledGridArea = styled.div<{
  gridArea: string
}>`
  grid-area: ${p => p.gridArea};
`
