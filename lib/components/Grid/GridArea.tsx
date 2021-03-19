import React, { FC, ReactNode } from 'react'
import { GridAreaProps } from './types'
import { StyledGridArea } from './styled'

const GridArea: FC<GridAreaProps> = ({
  children,
  gridArea,
}: GridAreaProps) => (
  <StyledGridArea gridArea={gridArea}>
    {children}
  </StyledGridArea>
)

export default GridArea
