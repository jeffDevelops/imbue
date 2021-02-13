import React, { FC } from 'react'
import { StyledPanelAccentBorder } from './styled'
import { PanelAccentBorderProps } from './types'

const AccentBorder: FC<PanelAccentBorderProps> = ({
  ...props
}: PanelAccentBorderProps) => (
  <StyledPanelAccentBorder {...props} />
)

export default AccentBorder
