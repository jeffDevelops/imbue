import React, { FC, HTMLAttributes } from 'react'
import { Theme } from '../../Theme/types'
import { Position } from '../../utility/Position/types'
import { Color } from '../../utility/Color/types'
import { StyledPanelAccentBorder } from './styled'
import { PanelAccentBorderProps } from './types'

const AccentBorder: FC<PanelAccentBorderProps> = ({
  ...props
}: PanelAccentBorderProps) => (
  <StyledPanelAccentBorder {...props} />
)

export default AccentBorder
