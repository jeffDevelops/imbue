import React, { ReactNode, forwardRef } from 'react'
import { StyledH2 } from './styled'

export interface H2Props {
  children: ReactNode
}

const H2 = forwardRef<HTMLHeadingElement, H2Props>(
  ({ children, ...props }: H2Props, ref) => (
    <StyledH2 ref={ref} {...props}>
      {children}
    </StyledH2>
  ),
)

export default H2
