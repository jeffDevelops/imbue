import React, { forwardRef } from 'react'
import Label from '../Label/Label'
import Flex from '../Flex/Flex'
import {
  RelativeContext,
  StyledTextInput,
  InputErrorMessage,
} from './styled'
import { InputProps } from './types'

const TextInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      LabelProps,
      label,
      margin,
      id,
      zIndex = 0,
      ...props
    }: InputProps,
    ref,
  ) => {
    return (
      <Flex
        ref={ref}
        position="relative"
        column
        alignItems="flex-start"
        margin={margin}
      >
        {label && (
          <Label htmlFor={id} {...LabelProps}>
            {label}
          </Label>
        )}
        <RelativeContext zIndex={zIndex} {...props}>
          <StyledTextInput
            zIndex={zIndex}
            id={id}
            {...props}
          />
          {props.error && (
            <InputErrorMessage>
              {props.error}
            </InputErrorMessage>
          )}
        </RelativeContext>
      </Flex>
    )
  },
)

export default TextInput
