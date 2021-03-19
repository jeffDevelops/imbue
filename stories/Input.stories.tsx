import React, { useState } from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Input from '../lib/components/Input'
import { withTheme } from '../testUtils/withTheme'
import Flex from '../lib/components/Flex'

export default {
  title: 'Components/Input',
  component: Input,
} as Meta

export const HierarchyAndMeaning = () =>
  withTheme(
    <Flex
      width="100%"
      maxWidth="650px"
      justifyContent="space-between"
    >
      <Flex column width="300px">
        <Input
          id="input_primary"
          label="Primary"
          placeholder="Primary Hierarchy"
        />
        <Input
          hierarchy="secondary"
          id="input_secondary"
          label="Secondary"
          placeholder="Secondary Hierarchy"
        />
        <Input
          hierarchy="tertiary"
          id="input_tertiary"
          label="Tertiary"
          placeholder="Tertiary Hierarchy"
        />
        <Input
          hierarchy="quaternary"
          id="input_quaternary"
          label="Quaternary"
          placeholder="Quaternary Hierarchy"
        />
      </Flex>
      <Flex column width="300px">
        <Input
          meaning="success"
          id="input_success"
          label="Success"
          placeholder="Success Meaning"
        />
        <Input
          meaning="warning"
          id="input_warning"
          label="Warning"
          placeholder="Warning Meaning"
        />
        <Input
          meaning="danger"
          id="input_danger"
          label="Danger"
          placeholder="Danger Meaning"
        />
      </Flex>
    </Flex>,
  )

const ErrorStateExample = () => {
  const [state, setState] = useState('')

  return (
    <Flex column width="300px">
      <Input
        value={state}
        onChange={(
          e: React.ChangeEvent<HTMLInputElement>,
        ) => setState(e.target.value)}
        id="input_primary"
        label="Primary"
        error={!state && 'Say something! Anything!'}
      />
    </Flex>
  )
}

export const ErrorState = () =>
  withTheme(<ErrorStateExample />)
