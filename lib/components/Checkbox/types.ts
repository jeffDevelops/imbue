import { ChangeEvent, InputHTMLAttributes } from 'react'
import {
  SemanticColorOptions,
  HierarchicalColorOptions,
} from '../utility/Color/types'

export type StyledCheckboxProps = {
  meaning?: SemanticColorOptions
  hierarchy?: HierarchicalColorOptions
  checked: boolean
  indeterminate?: boolean
  borderless?: boolean
  disabled?: boolean
}

export type CheckboxProps = InputHTMLAttributes<
  HTMLInputElement
> & {
  meaning?: SemanticColorOptions
  hierarchy?: HierarchicalColorOptions
  htmlFor?: string
  checked?: boolean
  defaultChecked?: boolean
  indeterminate?: boolean
  label?: string
  checkIcon?: () => JSX.Element
  onChange?(e?: ChangeEvent<HTMLInputElement>): void
  borderless?: boolean
  disabled?: boolean
}
