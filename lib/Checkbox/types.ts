import { ChangeEvent, InputHTMLAttributes } from 'react'
import { Color } from '../utility/Color/types'

export type StyledCheckboxProps = Color & {
  checked: boolean
  indeterminate?: boolean
  borderless?: boolean
  disabled?: boolean
}

export type CheckboxProps = Color &
  InputHTMLAttributes<HTMLInputElement> & {
    htmlFor?: string
    checked?: boolean
    defaultChecked?: boolean
    indeterminate?: boolean
    label?: string
    checkIcon?: () => JSX.Element
    onChange?(e?: ChangeEvent<HTMLInputElement>): void
    backgroundColor?: Color | string
    borderless?: boolean
    disabled?: boolean
  }
