import React, { forwardRef, useState } from 'react'
import { withTheme } from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import { Theme } from '../../Theme/types'
import {
  Label,
  Input,
  CustomCheckbox,
  RelativeContext,
} from './styled'
import { CheckboxProps } from './types'
import ImbueCheckmark from './ImbueCheckmark'
import ImbueIndeterminateSymbol from './ImbueIndeterminate'

const Checkbox = forwardRef<
  HTMLLabelElement,
  CheckboxProps & { theme: Theme }
>(
  (
    {
      id,
      htmlFor,
      borderless,
      defaultChecked,
      indeterminate,
      onChange,
      checked,
      disabled,
      label,
      theme: {
        checkbox: { icon: ConsumerCheckIcon },
      },
      ...props
    },
    ref,
  ) => {
    runRuntimeValidations(defaultChecked, checked)
    const isUncontrolled = defaultChecked !== undefined

    // If the input is uncontrolled, maintain local checked state
    const [
      uncontrolledChecked,
      setUncontrolledChecked,
    ] = useState(
      defaultChecked === undefined
        ? checked!
        : defaultChecked,
    )

    const color = {
      ...(props.meaning
        ? { meaning: props.meaning }
        : {
            hierarchy: props.hierarchy,
          }),
    }

    const isChecked = (() => {
      if (indeterminate) return false
      if (checked === undefined) {
        return uncontrolledChecked
      }
      return checked
    })()

    return (
      <Label
        {...color}
        checked={isChecked}
        disabled={disabled}
        ref={ref}
        htmlFor={htmlFor}
      >
        <Input
          id={id}
          disabled={disabled}
          onChange={
            isUncontrolled
              ? () => {
                  setUncontrolledChecked(
                    currentState => !currentState,
                  )
                }
              : onChange
          }
        />
        <RelativeContext {...color} checked={isChecked}>
          <CustomCheckbox
            indeterminate={indeterminate}
            checked={isChecked}
            defaultChecked={defaultChecked}
            borderless={borderless}
            disabled={disabled}
            {...props}
          >
            <AnimatePresence>
              {indeterminate ? (
                <ImbueIndeterminateSymbol />
              ) : (
                isChecked &&
                (!!ConsumerCheckIcon ? ( // If consumer has elected to use own icon
                  <ConsumerCheckIcon />
                ) : (
                  // otherwise, use the animated Imbue icon
                  <ImbueCheckmark />
                ))
              )}
            </AnimatePresence>
          </CustomCheckbox>
        </RelativeContext>
        {label && <span>{label}</span>}
      </Label>
    )
  },
)
export default withTheme(Checkbox)

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
      'Imbue error: Checkbox is missing either the `checked` prop or `defaultChecked` prop. To maintain the state of the checkbox yourself, opt for `checked` (controlled implementation). For the uncontrolled implementation, use `defaultChecked`.',
    )
  }

  // Ensure that both controlled and uncontrolled are not implemented
  if (
    defaultChecked !== undefined &&
    checked !== undefined
  ) {
    throw new Error(
      'Imbue error: Checkbox is switching between a controlled and uncontrolled implementation. If you need to maintain state of the checkbox, use the `checked` prop and specify the initial value there instead of using `defaultChecked`.',
    )
  }
}
