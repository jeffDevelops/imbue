import React, { forwardRef } from 'react'
import { ButtonProps } from './types'
import { StyledButton } from './styled'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }: ButtonProps, ref) => {
    return (
      <StyledButton
        ref={ref}
        type={props.type || 'button'}
        {...props}
      >
        {children}
      </StyledButton>
    )
  },
)

export default Button
