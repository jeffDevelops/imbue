import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Button from '../lib/Button/Button'
import { withTheme } from '../testUtils/withTheme'

export default {
  title: 'Components/SemanticButton',
  component: Button,
} as Meta

export const Success = () =>
  withTheme(<Button meaning="success">Success</Button>)

export const Warning = () =>
  withTheme(<Button meaning="warning">Warning</Button>)

export const Danger = () =>
  withTheme(<Button meaning="danger">Danger</Button>)

export const Disabled = () =>
  withTheme(
    <Button meaning="success" disabled>
      Disabled
    </Button>,
  )
