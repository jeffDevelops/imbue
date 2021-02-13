import { ReactNode, ButtonHTMLAttributes } from 'react'
import { Color } from '../utility/Color/types'

export type StyledGhostButtonProps = ButtonHTMLAttributes<
  HTMLButtonElement
> & {
  width?: string
  disabled?: boolean
}

export interface GhostButtonProps
  extends StyledGhostButtonProps {
  children?: ReactNode
}
