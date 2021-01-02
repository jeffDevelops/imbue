import React, { ReactNode, forwardRef } from 'react'
import { StyledH5 } from './styled'

export interface H5Props {
  children: ReactNode
}

const H5 = forwardRef<HTMLHeadingElement, H5Props>(
  ({ children, ...props }: H5Props, ref) => (
    <StyledH5 ref={ref} {...props}>
      {children}
    </StyledH5>
  ),
)

export default H5
