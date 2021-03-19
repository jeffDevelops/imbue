// Import the correct HTMLAttributes
import { HTMLAttributes } from 'react'

export interface BoxProps
  extends HTMLAttributes<HTMLElement> {
  height?: string
  minHeight?: string
  maxHeight?: string
  width?: string
  minWidth?: string
  maxWidth?: string
  padding?: string
  margin?: string
  border?: string
  display?: string
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

export interface StyledBoxProps extends BoxProps {}
