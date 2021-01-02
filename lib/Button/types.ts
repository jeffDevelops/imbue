import { ReactNode, ButtonHTMLAttributes } from 'react'
import { Color } from '../utility/Color/types'

export type ButtonComponentProps = ButtonHTMLAttributes<
  HTMLButtonElement
> & {
  children?: ReactNode
  width?: string
}

export type ButtonProps = ButtonComponentProps &
  Color &
  StyledButtonProps

export type StyledButtonProps = Color & {
  width?: string
  disabled?: boolean
}
