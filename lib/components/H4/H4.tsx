import React, { ReactNode, forwardRef } from 'react'
import { StyledH4 } from './styled'

export interface H4Props {
  children: ReactNode
}

const H4 = forwardRef<HTMLHeadingElement, H4Props>(
  ({ children, ...props }: H4Props, ref) => (
    <StyledH4 ref={ref} {...props}>
      {children}
    </StyledH4>
  ),
)

export default H4
