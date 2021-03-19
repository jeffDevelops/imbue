import {
  ReactNode,
  ButtonHTMLAttributes,
  RefObject,
} from 'react'
import { Color } from '../../utility/Color/types'

export type ButtonComponentProps = ButtonHTMLAttributes<
  HTMLButtonElement
> & {
  children?: ReactNode
  width?: string
  ref?: RefObject<HTMLButtonElement>
}

export type ButtonProps = ButtonComponentProps &
  Color &
  StyledButtonProps

export type StyledButtonProps = Color & {
  width?: string
  disabled?: boolean
}
