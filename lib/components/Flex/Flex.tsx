import React, { forwardRef } from 'react'
import { FlexProps } from './types'
import { StyledFlex } from './styled'

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ children, ...props }: FlexProps, ref) => {
    return (
      <StyledFlex ref={ref} {...props}>
        {children}
      </StyledFlex>
    )
  },
)

export default Flex
