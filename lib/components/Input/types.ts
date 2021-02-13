import { InputHTMLAttributes } from 'react'
import { LabelProps } from '../Label/types'
import { OptionalColor } from '../../utility/Color/types'

export type InputProps = InputHTMLAttributes<
  HTMLInputElement
> &
  OptionalColor & {
    label?: string
    LabelProps?: LabelProps
    margin?: string // CSS value
    error?: string // An error message indicating what is invalid about the user's input
  }
