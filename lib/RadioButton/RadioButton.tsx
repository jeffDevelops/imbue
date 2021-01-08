import React, { forwardRef, useState } from 'react'
import { RadioProps } from './types'
import {
  Label,
  Input,
  CustomRadio,
  RelativeContext,
} from './styled'

const RadioButton = forwardRef<
  HTMLLabelElement,
  RadioProps
>(
  (
    {
      id,
      htmlFor,
      borderless,
      defaultChecked,
      onChange,
      checked,
      disabled,
      label,
      value,
      ...props
    },
    ref,
  ) => {
    const buttonColor = (() => {
      if ('meaning' in props)
        return { meaning: props.meaning }
      if ('hierarchy' in props)
        return { hierarchy: props.hierarchy }
      return {}
    })()

    return (
      <Label
        {...buttonColor}
        ref={ref}
        checked={checked}
        value={value}
        disabled={disabled}
        htmlFor={htmlFor}
      >
        <Input
          id={id}
          value={value}
          disabled={disabled}
          onClick={() => onChange()}
        />
        <RelativeContext
          {...buttonColor}
          value={value}
          checked={checked}
        >
          <CustomRadio
            checked={checked}
            value={value}
            defaultChecked={defaultChecked}
            borderless={borderless}
            disabled={disabled}
            {...props}
          >
            {checked && '●'}
          </CustomRadio>
        </RelativeContext>
        {label && <span>{label}</span>}
      </Label>
    )
  },
)

function runRuntimeValidations(
  defaultChecked?: boolean,
  checked?: boolean,
) {
  // Ensure controlled or uncontrolled implementation is specified
  if (
    defaultChecked === undefined &&
    checked === undefined
  ) {
    throw new Error(
      'Imbue error: RadioButton is missing either the `checked` prop or `defaultChecked` prop. To maintain the state of the radio button yourself, opt for `checked` (controlled implementation). For the uncontrolled implementation, use `defaultChecked`.',
    )
  }

  // Ensure that both controlled and uncontrolled are not implemented
  if (
    defaultChecked !== undefined &&
    checked !== undefined
  ) {
    throw new Error(
      'Imbue error: RadioButton is switching between a controlled and uncontrolled implementation. If you need to maintain state of the radio button, use the `checked` prop and specify the initial value there instead of using `defaultChecked`.',
    )
  }
}

export default RadioButton
