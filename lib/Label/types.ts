import { LabelHTMLAttributes, ReactText } from 'react'

export interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactText
}
