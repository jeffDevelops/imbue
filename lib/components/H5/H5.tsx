import React, {
  ReactNode,
  forwardRef,
  HTMLAttributes,
} from 'react'
import { TextAlign } from '../../utility/TextAlign'
import { StyledH5 } from './styled'

export interface H5Props
  extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  textAlign?: TextAlign
}

const H5 = forwardRef<HTMLHeadingElement, H5Props>(
  (
    { children, textAlign = 'left', ...props }: H5Props,
    ref,
  ) => (
    <StyledH5 textAlign={textAlign} ref={ref} {...props}>
      {children}
    </StyledH5>
  ),
)

export default H5
