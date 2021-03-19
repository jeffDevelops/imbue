import React, { FC } from 'react'
import { NativeSelectProps } from './types'
import { StyledNativeSelect } from './styled'

const NativeSelect: FC<NativeSelectProps> = ({
  margin,
  ...props
}: NativeSelectProps) => {
  return <StyledNativeSelect margin={margin} {...props} />
}

export default NativeSelect
