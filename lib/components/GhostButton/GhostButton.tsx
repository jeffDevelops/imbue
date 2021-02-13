import React, {
  FC,
  ReactNode,
  ButtonHTMLAttributes,
} from 'react'
import { StrictUnion } from '../tsUtils/types/StrictUnion'
import { StyledGhostButton } from './styled'

import {
  HierarchicalColor,
  SemanticColor,
} from '../utility/Color/types'

export type ButtonColor = StrictUnion<
  HierarchicalColor | SemanticColor
>

export type ButtonComponentProps = ButtonHTMLAttributes<
  HTMLButtonElement
> & {
  children?: ReactNode
  width?: string
}

export type ButtonProps = ButtonComponentProps &
  ButtonColor &
  StyledButtonProps

export type StyledButtonProps = ButtonColor & {
  width?: string
  disabled?: boolean
}

const GhostButton: FC<ButtonProps> = ({
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledGhostButton {...props}>
      {children}
    </StyledGhostButton>
  )
}

export default GhostButton
