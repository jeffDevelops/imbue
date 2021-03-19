import React, {
  ReactNode,
  forwardRef,
  HTMLAttributes,
} from 'react'
import { StyledH3 } from './styled'
import { TextAlign } from '../../utility/TextAlign'

export interface H3Props
  extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  textAlign?: TextAlign
}

const H3 = forwardRef<HTMLHeadingElement, H3Props>(
  (
    { children, textAlign = 'left', ...props }: H3Props,
    ref,
  ) => (
    <StyledH3 textAlign={textAlign} ref={ref} {...props}>
      {children}
    </StyledH3>
  ),
)

export default H3
