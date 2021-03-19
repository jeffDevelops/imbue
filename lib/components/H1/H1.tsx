import React, {
  ReactNode,
  forwardRef,
  HTMLAttributes,
} from 'react'
import { StyledH1 } from './styled'
import { TextAlign } from '../../utility/TextAlign'

export interface H1Props
  extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  textAlign?: TextAlign
}

const H1 = forwardRef<HTMLHeadingElement, H1Props>(
  (
    { children, textAlign = 'left', ...props }: H1Props,
    ref,
  ) => (
    <StyledH1 textAlign={textAlign} ref={ref} {...props}>
      {children}
    </StyledH1>
  ),
)

export default H1
