import { HTMLAttributes } from 'react'
import { Position } from '../../../utility/Position/types'
import { Color } from '../../../utility/Color/types'

export type StyledPanelAccentBorderProps = {
  placement: Position
} & Color

export interface DivAndPlacement
  extends HTMLAttributes<HTMLDivElement> {
  placement: Position
}

export type PanelAccentBorderProps = Color & DivAndPlacement
