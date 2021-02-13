import { TextareaHTMLAttributes } from 'react'
import { LabelProps } from '../Label/types'
import { OptionalColor } from '../utility/Color/types'

type ResizeDirection =
  | 'both'
  | 'horizontal'
  | 'vertical'
  | 'none'

type Resizable =
  | undefined // 'none'
  | {
      /* Which direction(s) the textarea may be resized in */
      direction: ResizeDirection
      /* restrict the resizable text area to a certain height; default: 'none'; */
      maxHeight?: string
      /* restrict the resizable text area to a certain width; default: 'none'; */
      maxWidth?: string
      /* restrict the resizable text area to a certain minimum height; default: 'none'; */
      minHeight?: string
      /* restrict the resizable text area to a certain minimum width; default: 'none'; */
      minWidth?: string
    }

export type TextareaProps = TextareaHTMLAttributes<
  HTMLTextAreaElement
> &
  OptionalColor & {
    /* inclusion of a resize object makes the textarea resizable; omission or false does the opposite */
    resize?: Resizable
    label?: string
    LabelProps?: LabelProps
    margin?: string // CSS value
    error?: string // An error message indicating what is invalid about the user's input
  }

export type StyledTextareaProps = Omit<
  TextareaProps,
  'resize'
> & {
  resize: ResizeDirection
  width: string | null
  maxWidth: string
  minWidth: string
  height: string | null
  maxHeight: string
  minHeight: string
}
