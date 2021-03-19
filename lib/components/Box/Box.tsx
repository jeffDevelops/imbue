import React, { ForwardedRef, forwardRef } from 'react'
import { BoxProps } from './types'
import { StyledBox } from './styled'

const Box = forwardRef(
  (
    { children, ...props }: BoxProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <StyledBox ref={ref} {...props}>
        {children}
      </StyledBox>
    )
  },
)

export default Box
