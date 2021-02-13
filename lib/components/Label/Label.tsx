import React, { FC } from 'react'
import { LabelProps } from './types'
import { StyledLabel } from './styled'

const Label: FC<LabelProps> = ({
  ...props
}: LabelProps) => {
  return (
    <StyledLabel {...props}>{props.children}</StyledLabel>
  )
}

export default Label
