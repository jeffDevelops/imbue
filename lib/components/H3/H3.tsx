import React, { ReactNode, forwardRef } from 'react'
import { StyledH3 } from './styled'

export interface H3Props {
  children: ReactNode
}

const H3 = forwardRef<HTMLHeadingElement, H3Props>(
  ({ children, ...props }: H3Props, ref) => (
    <StyledH3 ref={ref} {...props}>
      {children}
    </StyledH3>
  ),
)

export default H3
