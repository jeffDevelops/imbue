import React, { FC, forwardRef } from 'react'
import Label from '../Label/Label'
import { LabelProps } from '../Label/types'
import Flex from '../Flex/Flex'
import {
  RelativeContext,
  StyledTextInput,
  InputErrorMessage,
} from './styled'
import { InputProps } from './types'

const TextInput: FC<InputProps> = forwardRef<
  HTMLInputElement,
  InputProps
>(
  (
    { LabelProps, label, margin, id, ...props }: InputProps,
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
        <RelativeContext {...props}>
          <StyledTextInput id={id} {...props} />
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
