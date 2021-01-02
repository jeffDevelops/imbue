import { Color } from '../utility/Color/types'
import { Position } from '../utility/Position/types'

export interface StyledPanelProps {
  width?: string // CSS string
  minWidth?: string // CSS string
  maxWidth?: string // CSS string
  height?: string // CSS string
  minHeight?: string // CSS string
  maxHeight?: string // CSS string
  padding?: string // CSS string
  margin?: string
  backgroundColor?: string // CSS string
  boxShadow?: string // CSS string
  outlined?: boolean
  outlineColor?: string // CSS string
}

export interface PanelProps extends StyledPanelProps {
  accentBorder?: {
    placement: Position
  } & Color
}
