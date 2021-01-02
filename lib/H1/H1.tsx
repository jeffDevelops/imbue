import React, { ReactNode, forwardRef } from 'react'
import { StyledH1 } from './styled'

export interface H1Props {
  children: ReactNode
}

const H1 = forwardRef<HTMLHeadingElement, H1Props>(
  ({ children, ...props }: H1Props, ref) => (
    <StyledH1 ref={ref} {...props}>
      {children}
    </StyledH1>
  ),
)

export default H1
