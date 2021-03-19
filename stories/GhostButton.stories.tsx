import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import GhostButton from '../lib/components/GhostButton'
import { withTheme } from '../testUtils/withTheme'

export default {
  title: 'Components/GhostButton',
  component: GhostButton,
} as Meta

export const Success = () =>
  withTheme(
    <GhostButton meaning="success">Success</GhostButton>,
  )

export const Warning = () =>
  withTheme(
    <GhostButton meaning="warning">Warning</GhostButton>,
  )

export const Danger = () =>
  withTheme(
    <GhostButton meaning="danger">Danger</GhostButton>,
  )

export const Disabled = () =>
  withTheme(
    <GhostButton meaning="success" disabled>
      Disabled
    </GhostButton>,
  )
