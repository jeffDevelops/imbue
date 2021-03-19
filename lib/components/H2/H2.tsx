import React, {
  ReactNode,
  forwardRef,
  HTMLAttributes,
} from 'react'
import { StyledH2 } from './styled'
import { TextAlign } from '../../utility/TextAlign'

export interface H2Props
  extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  textAlign?: TextAlign
}

const H2 = forwardRef<HTMLHeadingElement, H2Props>(
  (
    { children, textAlign = 'left', ...props }: H2Props,
    ref,
  ) => (
    <StyledH2 textAlign={textAlign} ref={ref} {...props}>
      {children}
    </StyledH2>
  ),
)

export default H2
