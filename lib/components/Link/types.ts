import { AnchorHTMLAttributes, ReactNode } from 'react'
import { OptionalColor } from '../utility/Color/types'

export type LinkComponentProps = AnchorHTMLAttributes<
  HTMLButtonElement
> & {
  children?: ReactNode
  width?: string
}

export type StyledLinkProps = OptionalColor & {}

export type LinkProps = LinkComponentProps & StyledLinkProps
