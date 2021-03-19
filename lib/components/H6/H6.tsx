import React, {
  ReactNode,
  forwardRef,
  HTMLAttributes,
} from 'react'
import { TextAlign } from '../../utility/TextAlign'
import { StyledH6 } from './styled'

export interface H6Props
  extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  textAlign?: TextAlign
}

const H6 = forwardRef<HTMLHeadingElement, H6Props>(
  (
    { children, textAlign = 'left', ...props }: H6Props,
    ref,
  ) => (
    <StyledH6 textAlign={textAlign} ref={ref} {...props}>
      {children}
    </StyledH6>
  ),
)

export default H6
