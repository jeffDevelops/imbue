import { ReactNode } from 'react'
import { Color } from '../../utility/Color/types'
import { PositionValues } from '../../utility/Position/types'

export interface StyledPanelProps {
  children?: ReactNode
  width?: string // CSS string
  minWidth?: string // CSS string
  maxWidth?: string // CSS string
  height?: string // CSS string
  minHeight?: string // CSS string
  maxHeight?: string // CSS string
  padding?: string // CSS string
  margin?: string // CSS string
  backgroundColor?: string // CSS string
  boxShadow?: string // CSS string
  outlined?: boolean
  outlineColor?: string // CSS string
}

export interface PanelProps extends StyledPanelProps {
  accentBorder?: {
    placement: PositionValues
  } & Color
}
