import React, { forwardRef } from 'react'
import { StyledBody1 } from './styled'
import { Body1Props } from './types'

const Body1 = forwardRef<HTMLParagraphElement, Body1Props>(
  (
    { children, textAlign = 'left', ...props }: Body1Props,
    ref,
  ) => (
    <StyledBody1 textAlign={textAlign} ref={ref} {...props}>
      {children}
    </StyledBody1>
  ),
)

export default Body1
