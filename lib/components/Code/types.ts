import { ReactText, HTMLAttributes } from 'react'

export interface CodeProps
  extends HTMLAttributes<HTMLElement> {
  children: ReactText
}
