import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Button from '../lib/components/Button/Button'
import { withTheme } from '../testUtils/withTheme'

export default {
  title: 'Components/HierarchicalButton',
  component: Button,
} as Meta

export const Primary = () =>
  withTheme(<Button hierarchy="primary">Primary</Button>)

export const Secondary = () =>
  withTheme(
    <Button hierarchy="secondary">Secondary</Button>,
  )

export const Tertiary = () =>
  withTheme(<Button hierarchy="tertiary">Tertiary</Button>)

export const Quaternary = () =>
  withTheme(
    <Button hierarchy="quaternary">Quaternary</Button>,
  )
