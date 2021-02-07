import React, { forwardRef, ReactNode } from 'react'
import { StyledBody1 } from './styled'
import { Body1Props } from './types'

const Body1 = forwardRef<HTMLParagraphElement, Body1Props>(
  ({ children, ...props }: Body1Props, ref) => (
    <StyledBody1 ref={ref} {...props}>
      {children}
    </StyledBody1>
  ),
)

export default Body1
