import { HTMLAttributes } from 'react'
import { PositionValues } from '../../../utility/Position/types'
import { Color } from '../../../utility/Color/types'

export type StyledPanelAccentBorderProps = {
  placement: PositionValues
} & Color

export interface DivAndPlacement
  extends HTMLAttributes<HTMLDivElement> {
  placement: PositionValues
}

export type PanelAccentBorderProps = Color & DivAndPlacement
