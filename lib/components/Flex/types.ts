import { ReactNode, HTMLAttributes } from 'react'

type ItemDistribution =
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'flex-start'
  | 'flex-end'
  | 'stretch'
  | 'center'
  | 'normal'
  | 'right'
  | 'start'
  | 'left'
  | 'end'

export interface StyledFlexProps {
  display?: 'flex' | 'inline-flex'
  column?: boolean
  flexDirection?:
    | 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse'
  wrap?: 'no-wrap' | 'wrap' | 'wrap-reverse'
  justifyContent?: ItemDistribution
  alignItems?: ItemDistribution
  width?: string // css value
  height?: string // css value
  maxWidth?: string // css value
  maxHeight?: string // css value
  minWidth?: string // css value
  minHeight?: string // css value
  margin?: string // css value
  padding?: string // css value
  position?:
    | 'absolute'
    | 'relative'
    | 'static'
    | 'fixed'
    | 'sticky'
  top?: string
  left?: string
  right?: string
  bottom?: string
  zIndex?: number
  gridArea?: string
}

export interface FlexProps
  extends StyledFlexProps,
    HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}
