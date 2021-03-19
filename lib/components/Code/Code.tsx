import React, { FC } from 'react'
import { CodeProps } from './types'
import { StyledCode } from './styled'

const Code: FC<CodeProps> = ({ children }: CodeProps) => {
  return <StyledCode>{children}</StyledCode>
}

export default Code
