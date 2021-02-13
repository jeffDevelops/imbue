import React, { forwardRef, ReactNode } from 'react'
import { StyledBody2 } from './styled'

export interface Body2Props {
  children: ReactNode
}

const Body2 = forwardRef<HTMLParagraphElement, Body2Props>(
  ({ children, ...props }: Body2Props, ref) => (
    <StyledBody2 ref={ref} {...props}>
      {children}
    </StyledBody2>
  ),
)

export default Body2
