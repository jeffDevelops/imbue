import { HTMLAttributes } from 'react'

export interface CodeBlockProps
  extends HTMLAttributes<HTMLElement> {
  code: string
}
