import React from 'react'
import { ButtonProps } from './types'
import { StyledButton } from './styled'

const Button = ({
  children,
  ref,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      ref={ref}
      type={props.type || 'button'}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button
