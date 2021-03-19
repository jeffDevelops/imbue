import React, {
  ReactNode,
  forwardRef,
  HTMLAttributes,
} from 'react'
import { TextAlign } from '../../utility/TextAlign/types'
import { StyledH4 } from './styled'

export interface H4Props
  extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  textAlign?: TextAlign
}

const H4 = forwardRef<HTMLHeadingElement, H4Props>(
  (
    { children, textAlign = 'left', ...props }: H4Props,
    ref,
  ) => (
    <StyledH4 textAlign={textAlign} ref={ref} {...props}>
      {children}
    </StyledH4>
  ),
)

export default H4
