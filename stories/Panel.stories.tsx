import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Panel from '../lib/components/Panel'
import { withTheme } from '../testUtils/withTheme'
import H3 from '../lib/components/H3'
import Body1 from '../lib/components/Body1'
import Flex from '../lib/components/Flex'

export default {
  title: 'Components/Panel',
  component: Panel,
} as Meta

export const Basic = () =>
  withTheme(
    <Panel width="95%" maxWidth="500px" height="auto">
      <H3>Panel</H3>
      <Body1>
        This is a basic panel. It tries to fill up its
        container by default (100% width and height), but
        you can specify height, width, maxHeight, maxWidth,
        minHeight, and maxWidth.
      </Body1>
    </Panel>,
  )

export const Outlined = () =>
  withTheme(
    <Panel
      outlined
      width="95%"
      maxWidth="500px"
      height="auto"
    >
      <H3>Panel</H3>
      <Body1>
        This is an outlined panel. It behaves like the basic
        panel, but with a flatter design.
      </Body1>
    </Panel>,
  )

export const Success = () =>
  withTheme(
    <Flex column>
      <Panel
        accentBorder={{
          meaning: 'success',
          placement: 'left',
        }}
        width="95%"
        maxWidth="500px"
        height="auto"
      >
        <H3>Success!</H3>
        <Body1>
          Give your panels semantic meaning, such as with
          this success accentBorder on the left.
        </Body1>
      </Panel>
      <Flex height="16px" />
      <Panel
        outlined
        accentBorder={{
          meaning: 'success',
          placement: 'left',
        }}
        width="95%"
        maxWidth="500px"
        height="auto"
      >
        <H3>Success!</H3>
        <Body1>
          Give your panels semantic meaning, such as with
          this success accentBorder on the left.
        </Body1>
      </Panel>
    </Flex>,
  )

export const Warning = () =>
  withTheme(
    <Flex column>
      <Panel
        accentBorder={{
          meaning: 'warning',
          placement: 'bottom',
        }}
        width="95%"
        maxWidth="500px"
        height="auto"
        minHeight="250px"
      >
        <H3>Well, this is awkward</H3>
        <Body1>
          The accent borders can go on whichever side you
          wish (for example, on the bottom). This one has
          'warning' semantic meaning.
        </Body1>
      </Panel>

      <Flex height="16px" />

      <Panel
        outlined
        accentBorder={{
          meaning: 'warning',
          placement: 'bottom',
        }}
        width="95%"
        maxWidth="500px"
        height="auto"
        minHeight="250px"
      >
        <H3>Well, this is awkward</H3>
        <Body1>
          The accent borders can go on whichever side you
          wish (for example, on the bottom). This one has
          'warning' semantic meaning.
        </Body1>
      </Panel>
    </Flex>,
  )

export const Danger = () =>
  withTheme(
    <Flex column>
      <Panel
        accentBorder={{
          meaning: 'danger',
          placement: 'right',
        }}
        width="95%"
        maxWidth="400px"
        height="auto"
      >
        <H3>Yikes.</H3>
        <Body1>
          This panel conveys 'danger' semantic meaning, and
          its accentBorder is right-aligned.
        </Body1>
      </Panel>

      <Flex height="16px" />

      <Panel
        outlined
        accentBorder={{
          meaning: 'danger',
          placement: 'right',
        }}
        width="95%"
        maxWidth="400px"
        height="auto"
      >
        <H3>Yikes.</H3>
        <Body1>
          This panel conveys 'danger' semantic meaning, and
          its accentBorder is right-aligned.
        </Body1>
      </Panel>
    </Flex>,
  )

export const ColorHierarchy = () =>
  withTheme(
    <Flex wrap="wrap">
      <Panel
        margin="8px"
        outlined
        accentBorder={{
          hierarchy: 'quaternary',
          placement: 'top',
        }}
        width="300px"
        maxWidth="400px"
        height="auto"
        minHeight="350px"
      >
        <H3>The cheap-ass option</H3>
        <Body1>
          This panel utilizes the quaternary color, and its
          accentBorder is top-aligned.
        </Body1>
      </Panel>

      <Panel
        margin="8px"
        outlined
        accentBorder={{
          hierarchy: 'tertiary',
          placement: 'top',
        }}
        width="300px"
        maxWidth="400px"
        height="auto"
        minHeight="350px"
      >
        <H3>The buy-up option</H3>
        <Body1>
          This panel utilizes the tertiary color, and its
          accentBorder is top-aligned.
        </Body1>
      </Panel>

      <Panel
        margin="8px"
        outlined
        accentBorder={{
          hierarchy: 'secondary',
          placement: 'top',
        }}
        width="300px"
        maxWidth="400px"
        height="auto"
        minHeight="350px"
      >
        <H3>The Deluxe option</H3>
        <Body1>
          This panel utilizes the secondary color, and its
          accentBorder is top-aligned.
        </Body1>
      </Panel>

      <Panel
        margin="8px"
        outlined
        accentBorder={{
          hierarchy: 'primary',
          placement: 'top',
        }}
        width="300px"
        maxWidth="400px"
        height="auto"
        minHeight="350px"
      >
        <H3>The Premium option</H3>
        <Body1>
          This panel utilizes the primary color, and its
          accentBorder is top-aligned.
        </Body1>
      </Panel>
    </Flex>,
  )
