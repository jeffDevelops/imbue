import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactText,
} from 'react'
import {
  HierarchicalColorOptions,
  SemanticColorOptions,
} from '../utility/Color/types'

export type StyledRadioProps = {
  meaning?: SemanticColorOptions
  hierarchy?: HierarchicalColorOptions
  checked: boolean
  borderless?: boolean
  disabled?: boolean
  value: ReactText
}

export type RadioProps = InputHTMLAttributes<
  HTMLInputElement
> & {
  meaning?: SemanticColorOptions
  hierarchy?: HierarchicalColorOptions
  htmlFor?: string
  checked: boolean
  label?: string
  onChange(e?: ChangeEvent<HTMLInputElement>): void
  borderless?: boolean
  disabled?: boolean
  value: ReactText
}
