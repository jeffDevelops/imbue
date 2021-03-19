import React, { forwardRef, ReactNode } from 'react'
import { Body2Props } from './types'
import { StyledBody2 } from './styled'

const Body2 = forwardRef<HTMLParagraphElement, Body2Props>(
  (
    { children, textAlign = 'left', ...props }: Body2Props,
    ref,
  ) => (
    <StyledBody2 textAlign={textAlign} ref={ref} {...props}>
      {children}
    </StyledBody2>
  ),
)

export default Body2
