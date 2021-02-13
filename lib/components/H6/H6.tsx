import React, { ReactNode, forwardRef } from 'react'
import { StyledH6 } from './styled'

export interface H6Props {
  children: ReactNode
}

const H6 = forwardRef<HTMLHeadingElement, H6Props>(
  ({ children, ...props }: H6Props, ref) => (
    <StyledH6 ref={ref} {...props}>
      {children}
    </StyledH6>
  ),
)

export default H6
